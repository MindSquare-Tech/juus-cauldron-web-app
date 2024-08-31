import React from "react";
import AnimatedRoutes from "./components/utils/AnimatedRoutes.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { useLocation } from "react-router-dom";

function App() {
  const {pathname} = useLocation();
  return (
    <Provider store={store}>
      <div className={`${pathname === "/" && "overflow-hidden max-h-screen"} relative font-jost`}>
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
    </Provider>
  );
}

export default App;
