import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";

// 1. Create context
const ModalContext = createContext();

// 2. Create parent component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. Create child components
function Open({ children, windowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(windowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== name) return null;

  return createPortal(
    // Wrapper
    <div
      id="wrapper"
      onClick={(e) => (e.target.id === "wrapper" ? close() : "")}
      className="fixed inset-0 z-40 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
    >
      {/* Modal window */}
      <div className="relative">
        <Button
          onClick={close}
          variation="secondary"
          className="absolute right-3 top-3 rounded-full p-1"
        >
          <HiMiniXMark size={22} />
        </Button>
        <div> {cloneElement(children, { onClose: close })} </div>
      </div>
    </div>,
    document.body,
  );
}

//4. Add child components as properties to parent component
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
