const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        <li>{newCar && "Este carro é novo"}</li>
      </ul>
    </div>
  )
}

export default CarDetails
