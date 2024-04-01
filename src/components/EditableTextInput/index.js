import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {isSaved: false, inputValue: ''}

  getInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  saveButton = () => {
    this.setState({isSaved: true})
  }

  editButton = () => {
    this.setState({isSaved: false})
  }

  render() {
    const {isSaved, inputValue} = this.state

    return (
      <div className="editable-text-container">
        <div className="input-container">
          <h1 className="heading">Editable Text Input</h1>

          <div className="container">
            {!isSaved ? (
              <input
                type="text"
                onChange={this.getInputValue}
                value={inputValue}
              />
            ) : (
              <p>{inputValue}</p>
            )}

            {isSaved ? (
              <button type="button" onClick={this.editButton}>
                Edit
              </button>
            ) : (
              <button type="button" onClick={this.saveButton}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
