"use client";
import { useTheme } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeBlock } from "notion-types";
import "./CustomCode.css";

interface CustomCodeProps {
  block: CodeBlock;
}

export default function CustomCode({ block }: CustomCodeProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark" ? oneDark : oneLight;

  const code = block.properties?.title?.[0]?.[0] || "";
  const language = block.properties?.language?.[0]?.[0].toLowerCase() || "typescript";

  return (
    <SyntaxHighlighter
      language={language}
      style={isDark}
      className={`notion-custom-code ${theme.palette.mode}`}
      customStyle={{
        maxWidth: "100%",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
