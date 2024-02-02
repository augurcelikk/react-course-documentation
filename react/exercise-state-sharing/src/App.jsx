import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div>
      <h1>Yerler</h1>
      <Accordion/>
    </div>
  )
}

function Accordion() {
  const [activeId, setActiveId] = useState(null);

  return (
    <ul>
      {DATA_PLACES.map((place) => <Panel key={place.id} title={place.name} details={place.details} id={place.id} activeId={activeId} onActiveIdChange={setActiveId} />)}
    </ul>
  )
}

function Panel({ title, details, id, activeId, onActiveIdChange }) {
  //const [showDetail, setShowDetail] = useState(false)
  return (
    <li>
      <h3>{title}</h3>
      {activeId === id && <p>{details}</p>}
      {activeId !== id && <button onClick={() => {
        //setShowDetail(true);
        onActiveIdChange(id);
      }}>detay göster</button> }
    </li>
  )
}

const DATA_PLACES = [
  { id: 0, name: "İstanbul", details: "lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum" },
  { id: 1, name: "Paris", details: "Dolres lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum" },
  { id: 2, name: "Çanakkale", details: "Min lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum" },
  { id: 3, name: "Londra", details: "Max lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum Dolres lorem ipsum Min lorem ipsum"  },
]



export default App



