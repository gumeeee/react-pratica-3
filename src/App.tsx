import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <div className="container mx-auto mt-8 shadow-xl rounded-3xl border-slate-800">
        <h1 className="text-3xl font-bold mb-4 ">Sobre Mim</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4">
            <img
              src="https://avatars.githubusercontent.com/u/124413755?s=400&u=0d7979d619b22205558f637c85cfb3996918f815&v=4"
              alt="Minha Foto"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-xl font-bold mb-2">Guilherme Moura</h2>
            <p className="mb-4">
              Olá me chamo Guilherme, totalmente apaixonado por tecnologia de
              programação até hardware, atualmente aprendendo e aplicando Spring
              Boot, React e MySql no intuito de me desenvolver como um fullstack
              e praticando minhas soft skills, tenho um aprendizado rápido e
              eficiente, adaptabilidade e proatividade são habilidades que estou
              sempre exercendo, sempre me comunicando de forma clara e certeira.
              Tive experiência breve de freelancer como Desenvolvedor Front end
              em dois projetos, onde eu desenvolvia o Front end, fornecia e
              recebia feedback com o cliente durante esse desenvolvimento.
            </p>
            <p>Me siga nas redes sociais:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://github.com/gumeeee"
                className="text-pink-500 hover:underline"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-moura-13a991259/"
                className="text-blue-400 hover:underline"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
