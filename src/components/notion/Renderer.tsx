"use client";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import "./Renderer.css";
import { useTheme } from "@mui/material";

interface RendererProps {
  recordMap: any;
  rootPageId: string;
}

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  const theme = useTheme();
  return (
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false} // true일 경우 해당 페이지의 타이틀과 커버까지 전부 다 가져오게 됨
        darkMode={theme.palette.mode === "dark" ? true : false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  );
};

export default Renderer;
