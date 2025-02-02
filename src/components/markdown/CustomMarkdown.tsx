"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./CustomMarkdown.css";
import { useTheme } from "@mui/material";

interface CustomMarkdownProps {
  mdFilePath: string;
}

export default function CustomMarkdown({ mdFilePath }: CustomMarkdownProps) {
  const [markdown, setMarkdown] = useState("");
  const theme = useTheme();

  useEffect(() => {
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [mdFilePath]);

  return (
    <div>
      <div>
        <ReactMarkdown
          components={{
            code({ children }) {
              return <code className={`custom-code-block ${theme.palette.mode}`}>{children}</code>;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
