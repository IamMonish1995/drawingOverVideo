import { useContext, useState } from "react";
import { useOnDraw } from "./Hooks";
import { AppContext } from "@/pages/_app";

const Canvas = ({ width, height }) => {
  const { finalLinePoints } = useContext(AppContext);
  const { setCanvasRef, onCanvasMouseDown, clear,canvasRef } =
    useOnDraw(onDraw);
  const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, colors[0], 5);
  }

  function drawLine(start, end, ctx, color, width) {
      start = start ?? end;
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
  }
  return (
    <>
      <canvas
        width={width}
        height={height}
        onMouseDown={onCanvasMouseDown}
        style={canvasStyle}
        ref={setCanvasRef}
      />
    </>
  );
};

export default Canvas;

const canvasStyle = {
  border: "1px solid black",
};
