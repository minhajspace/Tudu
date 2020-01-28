import React from 'react';
import InputTodo from './InputTodo'


class App extends React.Component {
  state = {
    list: [],
    currentItem: {
      key: "",
      text: ""
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        key: Date.now(),
        text: e.target.value
      }
    })
    console.log(
      // this.state.currentItem.text,
      // this.state.currentItem.key
    )
  }

  addInput = (e) => {
    e.preventDefault()
    const userInput = this.state.currentItem
    if (this.state.currentItem.text !== "") {
      const input = [...this.state.list, userInput]
      console.log(input)
      this.setState({
        list: this.state.list.push(input),
        userInput: {
          text: "",
          key: ""
        }
      })
      console.log(this.state.list)
    }
  }


  render() {
    return (
      <>
        <form onSubmit={this.addInput}>
          <div className="ui segment">
            <div className="ui fluid icon input transparent ">

              <input className=""
                type="text"
                placeholder="Enter your Todo task"
                value={this.state.text}
                onChange={this.handleInput}

              />
            </div>
          </div>
          <div className="ui buttons fluid">

            <button className="ui positive button " >Save</button>
          </div>

        </form>
        <InputTodo listData={this.state.list} />
      </>

    )
  }
}
export default App