import React from "react";
import AnimatedRoutes from "./components/utils/AnimatedRoutes.jsx";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

function App() {

  return (
    <Provider store={store}>
    <div className="relative font-poppins">
        <ScrollToTop />
        <AnimatedRoutes />
    </div>
    </Provider>
  );
}

export default App;
