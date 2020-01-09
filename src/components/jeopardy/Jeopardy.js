import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: { answer: "" }
    }


  }
  handleChange = (event) => {
    let formData = this.state.formData;
    formData.answer = event.target.value;
    this.setState({ formData });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true
    })

    let tempScore = this.state.score

    if (this.state.data.answer === this.state.formData.answer) {
      tempScore = tempScore + this.state.data.value
    }
    else {
      tempScore = tempScore - this.state.data.value
    }

    this.getNewQuestion()
    this.setState({
      score: tempScore,
      formData: { answer: "" }
    })
  }


  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {

    let categoryTitleElement = <div>no title</div>
    if (this.state.data.category !== undefined) {
      categoryTitleElement = <div>
        Category: {this.state.data.category.title}
      </div>
    }


    return (
      <div>
        <div>
          {/* {JSON.stringify(this.state.data)} */}
          Question: {this.state.data.question}
        </div>
        <div>
          Score: {this.state.score}
        </div>

        <div>
          Value: {this.state.data.value}
        </div>
        {categoryTitleElement}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Answer: </label>
            <input onChange={this.handleChange} type="text" name="answer"
              value={this.state.formData.answer} />
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}
export default Jeopardy;