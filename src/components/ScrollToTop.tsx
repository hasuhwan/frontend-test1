import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const showTopBtnFunc = useCallback(() => {
    if (throttle) {
      return;
    }
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        if (window.scrollY > 500) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
        setThrottle(false);
      }, 500);
    }
  }, [throttle]);
  useEffect(() => {
    window.addEventListener("scroll", () => showTopBtnFunc());
    return window.removeEventListener("scroll", () => showTopBtnFunc());
  }, []);
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full fixed bottom-28">
      <div
        className={`${
          showTopBtn === false ? "hidden" : null
        } w-[40px] h-[40px] rounded-full bg-blackColor flex justify-center items-center z-49 right-20 absolute  animate-dropDown hover:cursor-pointer`}
        onClick={scrollToTop}
      >
        <FaArrowUp size={25} className="text-whiteColor" />
      </div>
    </div>
  );
}
