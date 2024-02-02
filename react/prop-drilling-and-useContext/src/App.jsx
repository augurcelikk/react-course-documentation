import './App.css'

import { Panel } from './components/Panel'

import { UserContext } from './context/UserContext';
import { useContext } from "react";

function App() {

  const theme = "dark";
  const user = useContext(UserContext);

  return (
    <div>
      <UserContext.Provider value={ user}>
        <h1>Hello World of wonders!!!</h1>
        <Panel theme={theme} />



      </UserContext.Provider>



    </div>
  )
}

export default App
