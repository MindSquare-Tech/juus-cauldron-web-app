import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setIsOpen } from "../../redux/isOpenSlice";

const ScrollToTop = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    dispatch(setIsOpen(false));
    window.scrollTo(0, 0);
    if (pathname === "/") document.body.style.overflow = "hidden";
  }, [pathname]);

  return null;
};

export default ScrollToTop;
