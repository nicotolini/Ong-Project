import { useEffect } from "react";

const Modal = ({ children, isOpen, setOpen }) => {
  useEffect(() => {
    setTimeout(() => {
      setOpen();
    }, 2000);
  }, [isOpen]);

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} bg-gray-800 top-0 right-0 h-screen w-full fixed z-10 bg-opacity-20`}
    >
      <div
        className={`w-[380px] h-[360px] fixed shadow-xl left-2/4 top-2/4  bg-violet-100 rounded-lg`}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
