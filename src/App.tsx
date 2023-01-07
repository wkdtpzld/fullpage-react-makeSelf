import React, { useEffect, useRef, useState } from "react";
import "./app.css";
import Dots from "./dot";

function App() {
  const outerRef = useRef<any>();
  const pageHeight = window.innerHeight;
  const [scrollIndex, setScrollIndex] = useState(1);
  
  const removeEvent = () => {
    const outerDivRefCurrent = outerRef.current;

    outerDivRefCurrent.removeEventListener("wheel", wheelHandler);

    setTimeout(
      () => {
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
      },1000);
  };

  const outerToScroll = (height: number, DIVIDER: number, index: number) => {
    outerRef.current.scrollTo({
      top: height + DIVIDER,
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(index);
  };

  const wheelHandler = (e: any) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = outerRef.current;
    const DIVIDER_HEIGHT = 5;

    if (deltaY > 0) {
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        outerToScroll(pageHeight, DIVIDER_HEIGHT, 2);
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        outerToScroll(pageHeight * 2, DIVIDER_HEIGHT * 2, 3);
      }
    } else {
      if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
        outerToScroll(0, 0, 1);
      } else if (scrollTop >= 0 && scrollTop < pageHeight * 3) {
        outerToScroll(pageHeight, DIVIDER_HEIGHT, 2);
      }
    }

    removeEvent();
  };

  useEffect(() => {
    const outerDivRefCurrent = outerRef.current;
    if (outerDivRefCurrent === null) {
      return;
    }
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={outerRef} className="outer">
      <Dots scrollIndex={scrollIndex} />
      <div className="inner bg-yellow">1</div>
      <div className="divider"></div>
      <div className="inner bg-blue">2</div>
      <div className="divider"></div>
      <div className="inner bg-pink">3</div>
    </div>
  );
}

export default App;
