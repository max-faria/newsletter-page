import { useState } from "react";

export default function Button(props) {
  const [buttonText, setButtonText] = useState("Subscribe Now");
  const [buttonColor, setButtonColor] = useState("bg-azul-button");
  const [hoverColor, setHoverColor] = useState("hover:bg-azul-hover");

  const changeButton = () => {
    if (buttonText === "Subscribe Now") {
      setButtonText("Subscribed");
    }

    if (buttonColor === "bg-azul-button") {
      setButtonColor("bg-verde-success");
    }

    if (hoverColor === "hover:bg-azul-hover") {
      setHoverColor("hover:bg-verde-hover");
    }
  };
  return (
    <div>
      <button
        type="submit"
        onClick={changeButton}
        className={`mt-5
        mb-5 
        font-5 
        text-branco-total 
        ${buttonColor}
        py-3 
        px-20 
        rounded-lg 
        mx-5 
        sm:mx-0 
        sm:mr-16 
        ${hoverColor} 
        duration-150
        sm:w-3/4`}
      >
        {buttonText}
      </button>
    </div>
  );
}
