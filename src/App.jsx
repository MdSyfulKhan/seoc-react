import React from "react";
import AppRouter from "./routing/AppRouter";
import useTextAnimation from "./hooks/useTextAnimation";

const App = () => {
  useTextAnimation();
  return <AppRouter />;
};

export default App;
