import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const reachedBottom = scrolled + windowHeight >= fullHeight - 10;

      setShowButton(scrolled > windowHeight); // > 100vh
      setAtBottom(reachedBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  if (!showButton) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed left-4 bottom-4 z-50 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      title={atBottom ? "Scroll to Top" : "Scroll to Bottom"}
    >
      {atBottom ? <ArrowUp size={20} className="textOrange" /> : <ArrowDown size={20} className="textOrange" />}
    </button>
  );
};

export default ScrollButton;
