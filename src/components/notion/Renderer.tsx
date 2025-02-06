"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material";

import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
import "./Renderer.css";

import dynamic from "next/dynamic";
const CustomCode = dynamic(() => import("../code/CustomCode"), { ssr: false });

interface RendererProps {
  recordMap: any;
}

export const Renderer = ({ recordMap }: RendererProps) => {
  const theme = useTheme();
  return (
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false} // true일 경우 해당 페이지의 타이틀과 커버까지 전부 다 가져오게 됨
        darkMode={theme.palette.mode === "dark" ? true : false}
        components={{
          Collection: () => null,
          nextImage: Image, // 지금은 로딩화면이 있어서 사실상 무의미
          nextLink: Link,
          Code: CustomCode,
        }}
        previewImages={true}
      />
    </div>
  );
};

export default Renderer;
