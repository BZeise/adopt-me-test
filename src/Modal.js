import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  const x = {};
  const y = {};
  x !== y; // is true

  const z = x;
  z === x; // is true

  if (!elRef.current) {
    elRef.current = document.createElement("div");
    //elRef.lol = 'wat'; // can't assign to elRef
    // elRef is a frozen object
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // this function will get invoked whenever this gets... what, removed?
    return () => modalRoot.removeChild(elRef.current);
    // return function is functionally equivalent to componentDidUnmount (name?)
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
