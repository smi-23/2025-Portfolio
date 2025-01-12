"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./CustomMarkdown.css";

interface CustomMarkdownProps {
  mdFilePath: string;
}

export default function CustomMarkdown({ mdFilePath }: CustomMarkdownProps) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
