import figure from "./assets/figure.png";
import "./App.css";

import Input from "./componets/input/Input";
import Button from "./componets/button/Button";

function App() {
  return (
    <>
      <div className="bg-branco-gelo font-inter flex justify-center items-center h-screen p-5">
        <main className="bg-branco-total sm:flex  drop-shadow-2xl lg:w-3/4 rounded-xl py-2 px-2 max-w-4xl">
          <section className="bg-blur bgbblur bg-no-repeat rounded-lg">
            <img src={figure} alt="figure" />
          </section>
          <section className="flex flex-col justify-center lg:w-1/2 text-center sm:text-start sm:ml-10 lg:ml-0 ">
            <h1 className="text-4xl font-semibold pt-4 ">
              Subscribe to our newsletter!
            </h1>
            <h3 className="text-xl font-normal text-cinza-claro pt-5 px-5 sm:text-start sm:px-0 sm:pr-16">
              Be the first to get exclusive offers ands the latest news
            </h3>
            {/* <input
              type="text"
              placeholder="Enter your email adress"
              className="mt-5 p-3 font-4 rounded-lg border-cinza-claro2 border mx-5 sm:mx-0 sm:mr-16 focus:outline-none hover:border-azul-claro hover:ring-1 hover:ring-azul-escuro focus:border-azul-escuro focus:ring-1 focus:ring-azul-escuro "
            />
            <button
              type="submit"
              className="mt-5 mb-5 font-5 text-branco-total bg-azul-button py-3 px-30 rounded-lg mx-5 sm:mx-0 sm:mr-16 hover:bg-azul-hover duration-150"
            >
              Subscribe Now
            </button> */}
            <Input text="Enter your email adress" />
            <Button />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
