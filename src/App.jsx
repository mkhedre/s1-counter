import React, { useMemo, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import PageHelmet from "./components/PageHelmet";
const MemoizedObj = {};

function App() {
  const [sum, setSum] = useState(0);
  const [count, setCounter] = useState(0);
  const num1 = useRef();
  const num2 = useRef();

  const sumFn = (x, y) => {
    console.log(MemoizedObj);

    return new Promise((resolve) => {
      if (MemoizedObj[x + "+" + y]) resolve(MemoizedObj[x + "+" + y]);
      setTimeout(() => {
        const res = x + y;
        MemoizedObj[x + "+" + y] = res;
        resolve(res);
      }, 1000);
    });
  };

  const handleSum = () => {
    sumFn(+num1.current.value, +num2.current.value).then((res) => {
      setSum(res);
    });
    // setSum(+num1.current.value + +num2.current.value);
  };
  const handleCount = () => setCounter((c) => c + 1);

  const MemoizedButton = useMemo(
    () => <Button label={"count"} onClick={handleCount} />,
    []
  );

  // const LazyComponent = React.lazy(()=> import("./login"))

  return (
    <div>
      <PageHelmet title={"my counter"} description={"new disc"} />
      count: {count}
      {/* <input type="number" ref={num1} />
      <input type="number" ref={num2} /> */}
      {MemoizedButton}
    </div>
  );
}

export default App;
