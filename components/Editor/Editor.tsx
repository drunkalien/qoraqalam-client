import { Component } from "react";
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "./editor.module.scss";

class RichEditor extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      // @ts-ignore
      editorState: EditorState.createWithContent(convertFromRaw(initialData)),
      showToolbar: false,
      windowWidth: 0,
      toolbarMeasures: {
        w: 0,
        h: 0,
      },
      selectionMeasures: {
        w: 0,
        h: 0,
      },
      selectionCoordinates: {
        x: 0,
        y: 0,
      },
      toolbarCoordinates: {
        x: 0,
        y: 0,
      },
      showRawData: false,
    };

    // @ts-ignore
    this.focus = () => this.editor.focus();
    // @ts-ignore
    this.onChange = (editorState) => this.setState({ editorState });
  }

  onClickEditor = () => {
    // @ts-ignore
    this.focus();
    this.checkSelectedText();
  };

  // 1- Check if some text is selected
  checkSelectedText = () => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      const text = window.getSelection().toString();
      if (text !== "") {
        // 1-a Define the selection coordinates
        this.setSelectionXY();
      } else {
        // Hide the toolbar if nothing is selected
        this.setState({
          showToolbar: false,
        });
      }
    }
  };

  // 2- Identify the selection coordinates
  setSelectionXY = () => {
    // @ts-ignore
    var r = window.getSelection().getRangeAt(0).getBoundingClientRect();
    // @ts-ignore
    var relative = document.body.parentNode.getBoundingClientRect();
    // 2-a Set the selection coordinates in the state
    this.setState(
      {
        selectionCoordinates: r,
        windowWidth: relative.width,
        selectionMeasures: {
          w: r.width,
          h: r.height,
        },
      },
      () => this.showToolbar(),
    );
  };

  // 3- Show the toolbar
  showToolbar = () => {
    this.setState(
      {
        showToolbar: true,
      },
      () => this.measureToolbar(),
    );
  };

  // 4- The toolbar was hidden until now
  measureToolbar = () => {
    // 4-a Define the toolbar width and height, as it is now visible
    this.setState(
      {
        toolbarMeasures: {
          // @ts-ignore
          w: this.elemWidth,
          // @ts-ignore
          h: this.elemHeight,
        },
      },
      () => this.setToolbarXY(),
    );
  };

  // 5- Now that we have all measures, define toolbar coordinates
  setToolbarXY = () => {
    let coordinates = {};

    const {
      // @ts-ignore
      selectionMeasures,
      // @ts-ignore
      selectionCoordinates,
      // @ts-ignore
      toolbarMeasures,
      // @ts-ignore
      windowWidth,
    } = this.state;

    const hiddenTop = selectionCoordinates.y < toolbarMeasures.h;
    const hiddenRight = windowWidth - selectionCoordinates.x < toolbarMeasures.w / 2;
    const hiddenLeft = selectionCoordinates.x < toolbarMeasures.w / 2;

    const normalX = selectionCoordinates.x - toolbarMeasures.w / 2 + selectionMeasures.w / 2;
    const normalY = selectionCoordinates.y - toolbarMeasures.h;

    const invertedY = selectionCoordinates.y + selectionMeasures.h;
    const moveXToLeft = windowWidth - toolbarMeasures.w;
    const moveXToRight = 0;

    coordinates = {
      x: normalX,
      y: normalY,
    };

    if (hiddenTop) {
      // @ts-ignore
      coordinates.y = invertedY;
    }

    if (hiddenRight) {
      // @ts-ignore
      coordinates.x = moveXToLeft;
    }

    if (hiddenLeft) {
      // @ts-ignore
      coordinates.x = moveXToRight;
    }

    this.setState({
      toolbarCoordinates: coordinates,
    });
  };

  // @ts-ignore
  handleKeyCommand = (command) => {
    // @ts-ignore
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      // @ts-ignore
      this.onChange(newState);
      return true;
    }
    return false;
  };

  // @ts-ignore
  toggleToolbar = (inlineStyle) => {
    // @ts-ignore
    this.onChange(
      // @ts-ignore
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle),
    );
  };

  render() {
    // @ts-ignore
    const { editorState } = this.state;
    // Make sure we're not on the ssr
    if (typeof window !== "undefined") {
      // Let's stick the toolbar to the selection
      // when the window is resized
      window.addEventListener("resize", this.checkSelectedText);
    }

    const toolbarStyle = {
      // @ts-ignore
      display: this.state.showToolbar ? "block" : "none",
      backgroundColor: "black",
      color: "white",
      position: "absolute",
      // @ts-ignore
      left: this.state.toolbarCoordinates.x,
      // @ts-ignore
      top: this.state.toolbarCoordinates.y,
      zIndex: 999,
      padding: 10,
    };
    return (
      <div>
        <div
          ref={(elem) => {
            // @ts-ignore
            this.elemWidth = elem ? elem.clientWidth : 0;
            // @ts-ignore
            this.elemHeight = elem ? elem.clientHeight : 0;
          }}
          // @ts-ignore
          style={toolbarStyle}
        >
          <ToolBar editorState={editorState} onToggle={this.toggleToolbar} />
        </div>
        <div onClick={this.onClickEditor} onBlur={this.checkSelectedText}>
          {/* @ts-ignore */}
          <Editor
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            // @ts-ignore
            onChange={this.onChange}
            placeholder="Tell a story..."
            editorKey="foobar"
            spellCheck={false}
            ref={(element) => {
              // @ts-ignore
              this.editor = element;
            }}
          />
        </div>
        <div style={{ marginTop: 40 }}>
          <button
            onClick={() =>
              // @ts-ignore
              this.setState({ showRawData: !this.state.showRawData })
            }
          >
            {/* @ts-ignore */}
            {!this.state.showRawData ? "Show" : "Hide"} Raw Data
          </button>
          <br />
          {/* @ts-ignore */}
          {this.state.showRawData && JSON.stringify(convertToRaw(editorState.getCurrentContent()))}
        </div>
      </div>
    );
  }
}

// Custom overrides for each style
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 4,
  },
  BOLD: {
    color: "#395296",
    fontWeight: "bold",
  },
  ANYCUSTOMSTYLE: {
    color: "#00e400",
  },
};

class ToolbarButton extends Component {
  constructor() {
    // @ts-ignore
    super();
    // @ts-ignore
    this.onToggle = (e) => {
      e.preventDefault();
      // @ts-ignore
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    const buttonStyle = {
      padding: 10,
    };
    return (
      // @ts-ignore
      <span onMouseDown={this.onToggle} style={buttonStyle}>
        {/* @ts-ignore */}
        {this.props.label}
      </span>
    );
  }
}

var toolbarItems = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Code", style: "CODE" },
  { label: "Surprise", style: "ANYCUSTOMSTYLE" },
];

// @ts-ignore
const ToolBar = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div>
      {toolbarItems.map((toolbarItem) => (
        <ToolbarButton
          key={toolbarItem.label}
          // @ts-ignore
          active={currentStyle.has(toolbarItem.style)}
          label={toolbarItem.label}
          onToggle={props.onToggle}
          style={toolbarItem.style}
        />
      ))}
    </div>
  );
};

const initialData = {
  blocks: [
    {
      key: "16d0k",
      text: "You can edit this text.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: "BOLD" }],
      entityRanges: [],
      data: {},
    },
    {
      key: "98peq",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "ecmnc",
      text: "Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        { offset: 0, length: 14, style: "BOLD" },
        { offset: 133, length: 9, style: "BOLD" },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: "fe2gn",
      text: "",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "4481k",
      text: "With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [
        { offset: 34, length: 19, style: "BOLD" },
        { offset: 117, length: 4, style: "BOLD" },
        { offset: 68, length: 10, style: "ANYCUSTOMSTYLE" },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};
export default RichEditor;
