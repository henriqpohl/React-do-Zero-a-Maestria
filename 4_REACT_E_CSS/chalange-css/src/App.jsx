import './App.css'
import CarList from './components/CarList'

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", model: "Spider", color: "vermelha", km: 1000 },
    { id: 2, brand: "Porsche", model: "911 Turbo", color: "Azul", km: 2300 },
    { id: 3, brand: "Lamborghini", model: "Avendator", color: "Preto", km: 3200 },
    { id: 4, brand: "Bugatti", model: "Chiron", color: "Cinza", km: 300 },
  ]

  return (
    <>
      <div>
        <h1 className="title">Desafio 5</h1>

        <div className="container">
          {cars.map((car) => (
            <CarList car={car} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
