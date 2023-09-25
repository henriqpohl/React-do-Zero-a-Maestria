import styles from "./CarList.module.css"

function CarList({ car }) {
  return (
    <div className={styles.cardCar}>
      <h2 className={styles.title}>{car.brand}</h2>
      <p>
        <b>Modelo:</b> {car.model}
      </p>
      <p>
        <b>Cor:</b> {car.color}
      </p>
      <p>
        <b>KM:</b> {car.km}
      </p>
    </div>
  )
}

export default CarList
