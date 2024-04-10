import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-4 bg-neutral-800 rounded-md shadow-xl">💫💫💫💫💫💫</div>
          <div className="col-span-4 bg-neutral-800 rounded-md text-slate-100 shadow-xl">Sobre mim</div>
          <div className="col-span-4 bg-neutral-800 rounded-md shadow-xl">💫💫💫💫💫💫💫</div>
        </div>
      </div>
    </>
  );
}

export default Home;
