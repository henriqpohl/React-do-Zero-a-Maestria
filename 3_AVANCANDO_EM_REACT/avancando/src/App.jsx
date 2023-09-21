import City from "./assets/city.jpg"
import "./App.css"
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName"
import { useState } from "react"
import CarDetails from "./components/CarDetails"

function App() {
  const name = "Henrique"

  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "Branco", km: 7832, newCar: false },
    { id: 3, brand: "Renault", color: "Azul", km: 6754, newCar: false },
  ]

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

        {/* Conditional Render */}
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand="VW" km="500" color="Preto" newCar={false} />
        {/* Reaproveitamento de componentes */}
        <CarDetails brand="Ford" km="3300" color="Branco" newCar={false} />
        <CarDetails brand="Fiat" km="0" color="Azul" newCar={true} />
        {/* LOOP em array de Objetos */}
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
    </>
  )
}

export default App
