import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Page01 } from "./pages/Page01";
import { Page02 } from "./pages/Page02";
import { Page03 } from "./pages/Page03";
import { Page04 } from "./pages/Page04";
import { Fragment } from "react";


export default function App() {

  const currentPath = "/04";

 

  return (
    <Fragment>
      <header>
        <Logo />
        <Nav />
      </header>
      <main>

        {currentPath == "/01" && <Page01/>}
        {currentPath == "/02" && <Page02/>}
        {currentPath == "/03" && <Page03/>}
        {currentPath == "/04" && <Page04/>}



      </main>
      <footer>
        <p> Her hakkı saklıdır </p>
      </footer>
    </Fragment>
  );


}




