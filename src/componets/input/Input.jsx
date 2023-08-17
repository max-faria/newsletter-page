import { useState } from "react";

export default function Input(props) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);

    try {
      validateEmail(ev.target.value);
      document.querySelector("#email").classList.add("success");
      document.querySelector("#email").classList.remove("border-red-500");
      document.querySelector("#email").classList.remove("focus:ring-red-500");
      document.querySelector("#email").classList.remove("focus:border-red-500");
      document.querySelector("#email").classList.add("border-verde-success");
      document
        .querySelector("#email")
        .classList.add("focus:ring-verde-success");
      document
        .querySelector("#email")
        .classList.add("focus:border-verde-success");
    } catch (err) {
      document.querySelector("#email").classList.remove("success");
      document.querySelector("#email").classList.add("border-red-500");
      document.querySelector("#email").classList.add("focus:ring-red-500");
      document.querySelector("#email").classList.add("focus:border-red-500");
      document.querySelector("#email").classList.remove("border-verde-success");
      document
        .querySelector("#email")
        .classList.remove("focus:ring-verde-success");
      document
        .querySelector("#email")
        .classList.remove("focus:border-verde-success");
    }
  };

  const validateEmail = (email) => {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
      const err = new Error("Email is not valid");
      err.input = "email";
      throw err;
    }
  };

  return (
    <div>
      <input
        type="text"
        id="email"
        placeholder={props.text}
        onChange={handleEmailChange}
        className="mt-5 
        p-3 
        font-4 
        rounded-lg 
        border-cinza-claro2 
        border 
        mx-5 
        sm:mx-0 
        sm:mr-16 
        focus:outline-none 
        hover:border-azul-claro 
        hover:ring-1 
        hover:ring-azul-escuro 
        focus:border-azul-escuro 
        focus:ring-1 
        focus:ring-azul-escuro
        sm:w-3/4 "
      />
      <span id="email-error"></span>
    </div>
  );
}
