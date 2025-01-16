"use client";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";
import "./Renderer.css";

interface RendererProps {
  recordMap: any;
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
