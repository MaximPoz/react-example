import React from "react";
import Greeting from "../components/Greeting/Greeting";

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <Greeting name={'Переданный пропс для проверки'}/>
    </section>
  );
}

export default Home;
