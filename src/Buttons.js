import React from "react"
import "./index.css"

class Buttons extends React.Component{
    constructor(){
        super();
        this.state = {
            operandOne: "",
            operatorTwo: "",
            operator: "",
            result: ""
        }
        this.onClickHandlerNumbers = this.onClickHandlerNumbers.bind(this)
        this.onClickHandlerOperator = this.onClickHandlerOperator.bind(this)
        this.onClickResultHandler = this.onClickResultHandler.bind(this)
        this.onClickHandlerClear = this.onClickHandlerClear.bind(this)
        this.onClickChangeSign = this.onClickChangeSign.bind(this)
        this.onCickdecimal = this.onCickdecimal.bind(this)
    }
    onClickHandlerNumbers(event){
        const {name} = event.target
        this.setState(prevState => {
            return {result: prevState.result + name}
        })
    }

    onClickHandlerOperator(event){
        const {name} = event.target
        console.log(name);
        
        this.setState(prevState => {
            return{
                operandOne: prevState.result,
                operator: name,
                result: ""
            }
        })
        
    }
    Cal(a , x , y){
        let matchItUp = {
            '+': (x,y) => x + y,
            '-': (x,y) => x - y,
            '*': (x,y) => x * y,
            '/': (x,y) => x / y,
        }
        return matchItUp[a](x,y)
    }
      
    onClickResultHandler(event){
        if (this.state.operandOne === "" || this.state.result === ""){
            return ;
        }
        let x = this.Cal(
            this.state.operator, 
            parseFloat(this.state.operandOne), 
            parseFloat(this.state.result)
            )
        this.setState({
            result: x,
        })
    }

    onClickChangeSign(event){
        if (this.state.result === ""){
            return ;
        }
        this.setState(prevState =>
            {
                return {result: -(parseFloat(this.state.result))}
            }
        )
    }

    onCickdecimal(event){
        if (this.state.result === ""){
            return;
        }
        this.setState(prevState =>{
            return{
                result: parseFloat(prevState.result) * 0.01
            } 
        })
    }

    onClickHandlerClear(){
        this.setState({
            operandOne: "",
            operatorTwo: "",
            operator: "",
            result: ""
        })
    }

    render(){
        return(
            <div>
                {/* Input Field */}
                <input className="input-field" 
                name="InputField" 
                value={this.state.result}
                />
                <div className="btn-horizontal-line">
                <button 
                        className="btn" 
                        name="C" 
                        onClick={this.onClickHandlerClear} 
                        type="button"
                    >
                        C
                    </button>
                    <button 
                        className="btn" 
                        name="+/-" 
                        onClick={this.onClickChangeSign} 
                        type="button"
                    >
                        +/-
                    </button>
                    <button 
                        className="btn" 
                        name="%" 
                        onClick={this.onCickdecimal} 
                        type="button"
                    >
                        %
                    </button>
                    <button 
                        className="btn btn-side" 
                        name="/" 
                        onClick={this.onClickHandlerOperator} 
                        type="button"
                    >
                        /
                    </button>
                </div>

                <div className="btn-horizontal-line">
                    <button 
                        className="btn" 
                        name="1" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        1
                    </button>

                    <button 
                        className="btn" 
                        name="2" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        2
                    </button>
                    <button 
                        className="btn" 
                        name="3" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        3
                    </button>
                    <button 
                        className="btn btn-side" 
                        name="*" 
                        type="button"
                        onClick={this.onClickHandlerOperator}
                    >
                        *
                    </button>
                </div>

                <div className="btn-horizontal-line">
                    <button 
                        className="btn" 
                        name="4" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        4
                    </button>
                    <button 
                        className="btn" 
                        name="5" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        5
                    </button>
                    <button 
                        className="btn" 
                        name="6" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        6
                    </button>
                    <button 
                        className="btn btn-side" 
                        name="-" 
                        onClick={this.onClickHandlerOperator} 
                        type="button"
                    >
                        -
                    </button>
                </div>

                <div className="btn-horizontal-line">
                    <button 
                        className="btn" 
                        name="7" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        7
                    </button>
                    <button 
                        className="btn" 
                        name="8" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        8
                    </button>
                    <button 
                        className="btn" 
                        name="9" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        9
                    </button>
                    <button 
                        className="btn btn-side" 
                        name="+" 
                        type="button"
                        onClick={this.onClickHandlerOperator}
                    >
                        +
                    </button>
                </div>
                <div className="btn-horizontal-line">
                    <button 
                        className="btn btn-zero" 
                        name="0" 
                        onClick={this.onClickHandlerNumbers} 
                        type="button"
                    >
                        0
                    </button>
                    <button 
                        className="btn" 
                        name="." 
                        onClick={this.onClickHandlerNumbers}
                        type="button"
                    >
                        .
                    </button>
                    <button 
                        className="btn btn-side" 
                        name="=" 
                        onClick={this.onClickResultHandler}
                        type="button"
                    >
                        =
                    </button>

                </div>

            </div>
        )
    }
}

export default Buttons