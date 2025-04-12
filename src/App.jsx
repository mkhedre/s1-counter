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
  };
  const handleCount = () => setCounter((c) => c + 1);

  const MemoizedButton = useMemo(
    () => <Button label={"count"} onClick={handleCount} />,
    []
  );

  return (
    <div>
      <PageHelmet title={"my counter"} description={"new disc"} />
      count: {count}
      {MemoizedButton}
    </div>
  );
}

export default App;
