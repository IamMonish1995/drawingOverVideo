import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
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
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};
export default MyApp;
