// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {listItem} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = listItem

  return (
    <li className="list-item">
      <div className="profile-container">
        <img src={currencyLogo} className="image" alt={currencyName} />
        <p className="header-text">{currencyName}</p>
      </div>
      <div className="value">
        <p className="header-text">{usdValue}</p>
        <p className="header-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
