import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import cn from "classnames";

import { Button, Heading } from "components";

import classes from "./editor.module.scss";

const Editor = () => {
  const [article, setArticle] = useState<string>("");
  const [heading, setHeading] = useState("");
  const [preview, setPreview] = useState(false);

  return !preview ? (
    <form>
      <div className={cn(classes["editor-container"])}>
        <textarea
          name="heading"
          id="heading"
          placeholder="Sarlavha"
          className={cn(classes["heading-input"])}
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
        ></textarea>
        <textarea
          name="article"
          id="article"
          placeholder="Maqola Yozing"
          className={cn(classes.editor)}
          onChange={(e) => setArticle(e.target.value)}
          value={article}
        ></textarea>
      </div>
      <div className={cn(classes.buttons)}>
        <Button>{"Jo'natish"}</Button>
        <Button type="button" color="blue" onClick={() => setPreview(true)}>
          {"Prevyu"}
        </Button>
      </div>
      {/* @ts-ignore */}
    </form>
  ) : (
    <div className={cn(classes.preview)}>
      <div className={cn(classes["preview-container"])}>
        <Heading>{heading}</Heading>
        <ReactMarkdown className={cn(classes["article-body"])}>{article}</ReactMarkdown>
      </div>
      <Button
        className={cn(classes.back)}
        onClick={() => {
          console.log(article);
          setPreview(false);
        }}
      >
        Qaytish
      </Button>
    </div>
  );
};

export default Editor;
