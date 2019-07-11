import React from "react"
import Quiz from "../json/questions"
let result = Quiz;
export default class QuizComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Q1answers: 'Thar',
            Q2answers: 'Russia',
            Q3answers: 'Cotton',
            Q4answers: 'Altimeter',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            submitted: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleClick(e) {
        let answer = e.target.value;
        this.setState({ submitted: false })
        result.Quiz.map((innerLoop, key) => {
            innerLoop.answers.map((ans, id) => {
                if (answer == ans) {
                    switch (innerLoop.question) {
                        case 'The World Largest desert is ?': {
                            if (answer == this.state.Q1answers) {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is right ");
                                this.setState({ answer1: this.state.Q1answers })
                            }
                            else {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is wrong ")
                                this.setState({ answer1: answer })
                                return;
                            }
                            return;
                        }
                        case 'Country that has the highest in Barley Production ?': {
                            if (this.state.Q2answers == answer) {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is right ")
                                this.setState({ answer2: this.state.Q2answers })
                            }
                            else {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is wrong ")
                                this.setState({ answer2: answer })
                                return
                            }

                        }
                        case 'Black soils are best suited for the cultivation of ?': {
                            console.log("indide 3")
                            if (this.state.Q3answers == answer) {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is right ")
                                this.setState({ answer3: this.state.Q3answers })
                                return
                            }
                            else {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is wrong ")
                                this.setState({ answer3: answer })
                                return
                            }
                        }
                        case 'The device used for measuring altitudes is ?': {
                            if (this.state.Q4answers == answer) {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is right ")
                                this.setState({ answer4: this.state.Q4answers })
                            }
                            else {
                                console.log("Answer for question :", innerLoop.question, "Entered by user is", answer, " and it is wrong ")
                                this.setState({ answer4: answer })
                                return
                            }
                        }
                        default:
                    }
                }
            })
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("Answers entered by user is ", this.state.answer1, this.state.answer2, this.state.answer3, this.state.answer4)
        console.log("Correct answers are ", this.state.Q1answers, this.state.Q2answers, this.state.Q3answers, this.state.Q4answers)
        this.setState({ submitted: true })
    }
    render() {

        return (

            <div className="card" style={{ margin: "10px" }}>
                <div className="card-body" style={{ backgroundColor: "lightgrey", width: "100%", padding: "10px" }}>
                    {
                        result.Quiz.map((questions, id) =>
                            <div key={id + 1}>
                                <div style={{ display: "inline" }}>
                                    <p key={id + 1}  >{questions.question}</p>
                                </div>
                                <div style={{ display: "inline" }}>
                                    <select name="userAnswers" onChange={this.handleClick} >
                                        <option style={{ color: "lightgrey", }} value="">Please Select</option>
                                        {
                                            questions.answers.map((answers, id) =>
                                                <option key={id + 1} onChange={this.handleClick} value={answers}> {answers} </option>)
                                        }
                                    </select>
                                </div>
                            </div>)
                    }
                    <button className="btn btn-primary" style={{ float: "right" }} type="submit" onClick={this.handleSubmit}>Result</button>
                </div>
                {this.state.submitted &&
                    <div className="card-body" style={{ backgroundColor: "silver" }}>
                        <p >Answers entered By User is :</p>
                        <ul >
                            <li>{this.state.answer1 ? this.state.answer1 : 'Not answered'}</li>
                            <li>{this.state.answer2 ? this.state.answer2 : 'Not answered'}</li>
                            <li>{this.state.answer3 ? this.state.answer3 : 'Not answered'}</li>
                            <li>{this.state.answer4 ? this.state.answer4 : 'Not answered'}</li>
                        </ul>
                        <p style={{ color: "green" }}>
                            Correct Answer is :</p>
                        <ul style={{ color: "green", textDecoration: "underline" }}>
                            <li >{this.state.Q1answers}</li>
                            <li >{this.state.Q2answers}</li>
                            <li >{this.state.Q3answers}</li>
                            <li >{this.state.Q4answers}</li>
                        </ul>
                    </div>
                }
            </div>



        )
    }
}
