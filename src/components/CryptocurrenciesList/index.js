// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await response.json()
    const formattedData = this.formatData(responseData)
    this.setState({data: [...formattedData], isLoading: false})
  }

  formatData = data => {
    const modifiedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    return modifiedData
  }

  renderPage = () => {
    const {data} = this.state
    return (
      <>
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="list-container">
          <li className="header">
            <p className="coin-type">Coin Type</p>
            <div className="value">
              <p className="header-text">USD</p>
              <p className="header-text">EURO</p>
            </div>
          </li>
          {data.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} listItem={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="crypto-currencies-list">
        {isLoading ? (
          <div
          // testid="loader"
          >
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderPage()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
