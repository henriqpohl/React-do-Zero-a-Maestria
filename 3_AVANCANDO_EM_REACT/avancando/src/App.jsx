import City from "./assets/city.jpg"
import "./App.css"
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName"
import { useState } from "react"
import CarDetails from "./components/CarDetails"
import Fragments from "./components/Fragments"
import Container from "./components/container"
import ExecuteFunction from "./components/ExecuteFunction"
import Message from "./components/Message"
import ChangeMessageState from "./components/ChangeMessageState"
import Challange from "./components/Challange"
import UsersDetails from "./components/UsersDetails"

function App() {
  const name = "Henrique"

  const [userName] = useState("Maria")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "Branco", km: 7832, newCar: false },
    { id: 3, brand: "Renault", color: "Azul", km: 6754, newCar: false },
  ];

  function showMessage() {
    console.log("Evento do componente pai.")    
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    { id: 1, name: "Henrique", sex: "Masculino", age: 32 },
    { id: 2, name: "Matheus", sex: "Masculino", age: 31 }
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

        {/* Props */}
        <ShowUserName name={userName} />

        {/* Destructuring */}
        <CarDetails brand="VW" km="500" color="Preto" newCar={false} />

        {/* Reaproveitamento de componentes */}
        <CarDetails brand="Ford" km="3300" color="Branco" newCar={false} />
        <CarDetails brand="Fiat" km="0" color="Azul" newCar={true} />

        {/* LOOP em array de Objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

        {/* Fragments */}
        <Fragments propFragments="Fragments 3" />

        {/* Children Props */}
        <Container myValue="Testing">
          <h3>Este é o conteudo do container</h3>
        </Container>
        <Container myValue="Testing 2">
          <h3>Este é o conteudo do container 2</h3>
        </Container>

        {/* Execute Function */}
        <ExecuteFunction myFunction={showMessage} />

        {/* State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />

        {/* Desafio 4 */}
        <Challange />
      </div>
    </>
  )
}

export default App
