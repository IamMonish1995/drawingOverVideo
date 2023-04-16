import { AppContext } from "@/pages/_app";
import { useContext, useEffect, useRef, useState } from "react";

export function useOnDraw(onDraw) {
  const [linePoints, setLinePoints] = useState([]);
  const { finalLinePoints, setFinalLinePoints } = useContext(AppContext);
 
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const prevPointRef = useRef(null);

  const mouseMoveListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  function setCanvasRef(ref) {
    canvasRef.current = ref;
  }
  function clear() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  function onCanvasMouseDown() {
    isDrawingRef.current = true;
  }

  useEffect(() => {
    function computePointInCanvas(clientX, clientY) {
      if (canvasRef.current) {
        const boundingRect = canvasRef.current.getBoundingClientRect();
        return {
          x: clientX - boundingRect.left,
          y: clientY - boundingRect.top,
        };
      } else {
        return null;
      }
    }
    function initMouseMoveListener() {
      const mouseMoveListener = (e) => {
        if (isDrawingRef.current && canvasRef.current) {
          const point = computePointInCanvas(e.clientX, e.clientY);
          const ctx = canvasRef.current.getContext("2d");
          if (onDraw) onDraw(ctx, point, prevPointRef.current);
          prevPointRef.current = point;
          setLinePoints((linePoints) => [...linePoints, point]);
        }
      };
      mouseMoveListenerRef.current = mouseMoveListener;
      window.addEventListener("mousemove", mouseMoveListener);
    }

    function initMouseUpListener() {
      const listener = () => {
        isDrawingRef.current = false;
        prevPointRef.current = null;
        if (linePoints.length != 0) {
          let lineObj = {
            name: `Line ${finalLinePoints.length + 1}`,
            start: linePoints[0],
            end: linePoints[linePoints.length - 1],
          };
          //   finalLinePoints.push(lineObj);
          setFinalLinePoints((finalLinePoints) => [
            ...finalLinePoints,
            lineObj,
          ]);
          setLinePoints([]);
        }
      };
      mouseUpListenerRef.current = listener;
      window.addEventListener("mouseup", listener);
    }

    function cleanup() {
      if (mouseMoveListenerRef.current) {
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
      }
    }

    initMouseMoveListener();
    initMouseUpListener();
    return () => cleanup();
  }, [onDraw]);

  return {
    setCanvasRef,
    onCanvasMouseDown,
    clear,canvasRef
  };
}
