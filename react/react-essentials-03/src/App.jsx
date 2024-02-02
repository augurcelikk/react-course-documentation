
import { useState } from "react";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";
import { Page03 } from "./pages/Page03";

function App() {
const [ currentPath, setCurrentPath ] = useState("/01");
  //const currentPath = "/03";
//setCurrentPath("/02")
  return (
    <>
      <header>
        <Logo />

        <Nav onCurrentPathChange={setCurrentPath}/>
      </header>
      <main>
        {currentPath === "/01" && <Page01 />}
        {currentPath === "/02" && <Page02 />}
        {currentPath === "/03" && <Page03 />}

      </main>
      <footer><p>Her hakkı saklıdır @ 2024 java-11 </p> </footer>
    </>

  )
}








export default App;
