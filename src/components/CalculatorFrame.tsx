import React from 'react';
import DisplayView from "./DisplayView";
import Calculator from "../models/Calculator";
import ButtonsView from "./ButtonsView";
import "../styles/calculator-frame.scss"


interface CalculatorFrameProps {
    calculator: Calculator;
}
interface CalculatorFrameState {
    cont: string;
}

export default class CalculatorFrame extends React.Component<CalculatorFrameProps, CalculatorFrameState> {
    constructor(props: CalculatorFrameProps) {
        super(props);
        this.state = {
            cont: props.calculator.firstOperand.toString()
        }
    }
    render() {
        let me = this;
        this.setState({cont: me.props.calculator.content.toString()})
        return (
            <div className={"calculator-frame"}>
                <DisplayView key={me.props.calculator.content} content={me.props.calculator.content.toString()}></DisplayView>
                <ButtonsView buttonsStructure={me.props.calculator.buttonsStructure}></ButtonsView>
            </div>
        )
    }
}