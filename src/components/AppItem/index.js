// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appName, imageUrl} = eachAppItem

  return (
    <li className="list-items">
      <img src={imageUrl} alt={appName} className="app" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
