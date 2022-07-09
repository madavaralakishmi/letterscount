import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}

  inputSearch = event => {
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState({searchInput: event.target.value})
    // console.log(searchInput)
    // console.log(count)
  }

  render() {
    const {searchInput} = this.state
    const {count} = this.state
    return (
      <div className="bg-color">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="text">Enter the phrase</label>
          <br />
          <input
            id="text"
            type="text"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.inputSearch}
          />
          <br />
          <div className="button">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img1"
        />
      </div>
    )
  }
}

export default LettersCalculator
