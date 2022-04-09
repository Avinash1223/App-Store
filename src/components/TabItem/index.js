// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabList, setActiveTabId, isActive} = props
  const {displayText, tabId} = eachTabList

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-items">
      <button
        type="button"
        onClick={onClickTab}
        className={`button ${tabBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
