import { SyntheticEvent, useState } from "react";
import dynamic from "next/dynamic";

import { Button } from "components";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

const Editor = () => {
  const [content, setContent] = useState("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setContent("");
  };

  function handleChange(value: string) {
    setContent(value);
  }

  return (
    <>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        onChangeSelection={(e) => {
          const selectedText = content.slice(e?.index + 3, e?.index + e?.length + 3);
          console.log(selectedText);
        }}
      />

      <Button onClick={onSubmit}>{"Jo'natish"}</Button>
    </>
  );
};

const modules = {
  tollbar: [
    [{ header: [1, 2, true] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

Editor.modules = modules;
Editor.formats = formats;

export default Editor;
