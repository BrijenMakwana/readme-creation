import React, { useState } from "react";
import "./HomePage.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function HomePage() {
  const [text, setText] = useState("");

  return (
    <div className="main-container">
      <div className="container text">
        <textarea
          className="textarea text-font"
          onChange={(e) => setText(e.target.value)}
          value={text}
        >
          {text}
        </textarea>
      </div>
      <div className="container markdown">
        <ReactMarkdown
          className="textarea markdown-font"
          children={text}
          value={text}
          remarkPlugins={[remarkGfm]}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
