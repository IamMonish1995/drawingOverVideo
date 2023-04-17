import { useContext, useState } from "react";
import { useOnDraw } from "./Hooks";
import { AppContext } from "@/pages/_app";

const Canvas = ({ width, height }) => {
  const { finalLinePoints } = useContext(AppContext);
  const { setCanvasRef, onCanvasMouseDown } =
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
      <div style={styledContainer}>
        <canvas
          width={width}
          height={height}
          onMouseDown={onCanvasMouseDown}
          style={canvasStyle}
          ref={setCanvasRef}
        />
        {/* <video
          id="int"
          autoPlay="true"
          muted="true"
          width={width}
          height={height}
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <iframe
          width={width}
          height={height}
          src="https://www.youtube.com/embed/MNn9qKG2UFI?controls=0&autoplay=1&loop=1"
          title="detection"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default Canvas;

const canvasStyle = {
  border: "1px solid black",
  background: "#ff000000",
  position: "absolute",
  zIndex: 1000,
};
const styledContainer = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  position: "relative",
};
