"use client";
import { NotionRenderer } from "react-notion-x";
import "./Renderer.css";

interface RendererProps {
  recordMap: any; // 임의로 any
  rootPageId: string;
}

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div className="notion__container">
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} rootPageId={rootPageId} previewImages />
    </div>
  );
};

export default Renderer;
