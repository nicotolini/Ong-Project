import { useState, useEffect } from "react";

const BtnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollTop}
      className={`fixed  bottom-[1.5rem] right-[1.5rem] z-10 ${
        isVisible ? `block` : `hidden`
      }`}
    >
      <img
        src="https://icongr.am/entypo/chevron-with-circle-up.svg?size=50&color=currentColor"
        alt=""
      />
    </button>
  );
};

export default BtnScroll;
