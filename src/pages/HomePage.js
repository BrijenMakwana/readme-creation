import React, { useState } from "react";
import "./HomePage.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={codeStyle}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
}
