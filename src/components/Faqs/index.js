// Write your code here.

import {Component} from 'react'

class Faqs extends Component {
  state = {isplus: true}

  isrender = () => {
    this.setState(prev => ({isplus: !prev.isplus}))
  }

  render() {
    const {isplus} = this.state
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    const altval = isplus ? 'plus' : 'minus'
    const imgUrl = isplus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

    return (
      <li>
        {isplus ? (
          <div>
            <h1>{questionText}</h1>
            <img alt={altval} onClick={this.isrender} src={imgUrl} />
          </div>
        ) : (
          <div>
            <h1>{questionText}</h1>
            <img alt={altval} onClick={this.isrender} src={imgUrl} />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default Faqs
