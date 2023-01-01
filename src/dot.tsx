import './dot.css'

const Dot = ({num, scrollIndex}:{num: number, scrollIndex: number}) => {

  return (
    <div
      style={{
        width: 10,
        height: 10,
        border: "1px solid black",
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "black" : "transparent",
        transitionDuration: '1s',
        transition: "background-color 0.5s",
      }}
    ></div>
  );
}

const Dots = ({scrollIndex}: {scrollIndex: number}) => {
  return (
    <div className="dots">
      <div className="dotsWrap">
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
}

export default Dots;