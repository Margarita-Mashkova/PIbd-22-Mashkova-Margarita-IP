import React from "react"; // Подключение react.
import { useState } from "react"; // Подключаем ссылку на useState.
import Button from "./Button"; //Подключим Button.tsx
interface CounterProps {
  start: number;
  step: number;
}
var Counter = (props: CounterProps) => {
  var [count, setCount] = useState(props.start); // И используем. Значение по умолчанию - 0.
  var handleReset = () => {
    setCount(props.start);
  };
  var handleIncrease = () => {
    setCount(count + props.step);
  };
  return (
    <div>
      <div>Значение счётчика: {count}.</div>
      <Button text={"Прибавить " + props.step} onClick={handleIncrease} />
      <Button text={"Сбросить счетчик"} onClick={handleReset} />
    </div>
  );
};
export default Counter;
