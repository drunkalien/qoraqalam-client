import { SyntheticEvent, useState } from "react";
import dynamic from "next/dynamic";
import { Editor as Draft, EditorState as DraftState } from "draft-js";

import { Button } from "components";

import "react-quill/dist/quill.snow.css";
import "draft-js/dist/Draft.css";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

// const modules = {
//   tollbar: [
//     [{ header: [1, 2, true] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
//     ["link", "image"],
//     ["code-block"],
//     ["clean"],
//     [{ align: "" }, { align: "center" }, { align: "right" }, { align: "left" }],
//   ],
// };

// const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "code-block",
// ];

// const Editor = () => {
//   const [content, setContent] = useState("");

//   const onSubmit = (e: SyntheticEvent) => {
//     e.preventDefault();

//     setContent("");
//   };

//   function handleChange(value: string) {
//     setContent(value);
//     console.log(content);
//   }

//   return (
//     <>
//       {/* <ReactQuill formats={formats} theme="snow" value={content} onChange={handleChange} /> */}

//       <Button onClick={onSubmit}>{"Jo'natish"}</Button>
//     </>
//   );
// };

// Editor.modules = modules;
// Editor.formats = formats;

const Editor = () => {
  const [editorState, setEditorState] = useState(() => DraftState.createEmpty());

  return (
    <>
      <Draft editorState={editorState} onChange={setEditorState} />
      <Button>{"Jo'natish"}</Button>
    </>
  );
};

export default Editor;
