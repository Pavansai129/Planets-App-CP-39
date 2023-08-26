import './index.css'
// Write your code here
const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails
  return (
    <li className="planet-details">
      <img src={imageUrl} alt={`planet ${name}`} className="planet" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default PlanetItem
