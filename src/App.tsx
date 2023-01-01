import React, { useEffect, useRef, useState } from "react";
import "./app.css";
import Dots from "./dot";

function App() {
  const outerRef = useRef<any>();

  const wheelHandler = (e: any) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = outerRef.current;
    const pageHeight = window.innerHeight;
    const DiVIDER_HEIGHT = 5;

    if (deltaY > 0) {
      if (scrollTop >= 0 && scrollTop < pageHeight && state) {
        if (state.current) {
          outerRef.current.scrollTo({
            top: pageHeight + DiVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
        state.current = false;
        setTimeout(() => {
          if (!state.current) {
            state.current = true;
          }
        }, 2000);
      } else if (
        scrollTop >= pageHeight &&
        scrollTop < pageHeight * 2 &&
        state
      ) {
        if (state.current) {
          outerRef.current.scrollTo({
            top: pageHeight * 2 + DiVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
        state.current = false;
        setTimeout(() => {
          if (!state.current) {
            state.current = true;
          }
        }, 2000);
      } else if (
        scrollTop >= pageHeight &&
        scrollTop < pageHeight * 3 &&
        state
      ) {
        if (state.current) {
          outerRef.current.scrollTo({
            top: pageHeight * 2 + DiVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
        state.current = false;
        setTimeout(() => {
          if (!state.current) {
            state.current = true;
          }
        }, 2000);
      }
    } else {
      if (scrollTop >= 0 && scrollTop < pageHeight && state) {
        if (state.current) {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
        state.current = false;
        setTimeout(() => {
          if (!state.current) {
            state.current = true;
          }
        }, 2000);
      } else if (scrollTop >= 0 && scrollTop < pageHeight * 2 && state) {
        if (state.current) {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
        state.current = false;
        setTimeout(() => {
          if (!state.current) {
            state.current = true;
          }
        }, 2000);
      } else if (scrollTop >= 0 && scrollTop < pageHeight * 3 && state) {
        if (state.current) {
          console.log(state.current);
          
          outerRef.current.scrollTo({
            top: pageHeight + DiVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
        state.current = false;
        setTimeout(() => {
          if (!state.current) {
            state.current = true;
          }
        }, 2000);
      }
    }
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

  const [scrollIndex, setScrollIndex] = useState(1);
  const state = useRef(true);

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
