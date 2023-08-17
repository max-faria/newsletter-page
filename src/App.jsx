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
            <Input text="Enter your email adress" />
            <Button />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
