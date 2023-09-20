import City from './assets/city.jpg';
import './App.css'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em Public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem"></img>
        </div>
        {/* Imagem em Asset */}
        <div>
          <img src={City} alt="Cidade"></img>
        </div>

        <ManageData />
        <ListRender />

      </div>
    </>
  )
}

export default App
