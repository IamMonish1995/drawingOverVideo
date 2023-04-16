import { DashboardLayout } from "@/components/dashboard-layout";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import Home from ".";
export const AppContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn };
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
