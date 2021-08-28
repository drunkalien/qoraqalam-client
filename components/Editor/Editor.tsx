import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

const Editor = () => {
  const [state, setState] = useState("");

  function handleChange(value: string) {
    setState(value);
  }

  return <ReactQuill theme="snow" value={state} onChange={handleChange} />;
};

const modules = {
  tollbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

Editor.modules = modules;
Editor.formats = formats;

export default Editor;
