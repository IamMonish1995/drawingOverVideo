import { DashboardLayout } from "@/components/dashboard-layout";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Home from ".";
import { useRef } from "react";
export const AppContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [finalLinePoints, setFinalLinePoints] = useState([]);
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    finalLinePoints,
    setFinalLinePoints,
    canvasRef,
    clearCanvas
  };
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/");
    }
  }, [isLoggedIn]);
  return (
    <AppContext.Provider value={value}>
      {isLoggedIn ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Home />
      )}
    </AppContext.Provider>
  );
};
export default MyApp;
