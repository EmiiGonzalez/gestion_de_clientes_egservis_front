import { useEffect, useState, createRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../../assets/css/main/inicio.css";

const arrayWords = ["emiliano", "matias", "gonzalez", "nina"];
export const Inicio = () => {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState("");
  const [count2, setCount2] = useState(0);
  const nodeRef = createRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2((currentValue) =>
        currentValue + 1 === arrayWords.length ? 0 : currentValue + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <SwitchTransition>
        <CSSTransition 
          nodeRef={nodeRef}
          classNames="fade"
          key={arrayWords[count2]}
          timeout={300}
          addEndListener={(done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
        >
          <h1 ref={nodeRef}>{arrayWords[count2]}</h1>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};
