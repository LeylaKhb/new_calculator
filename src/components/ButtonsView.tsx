import React from "react";
import ButtonsStructure from "../models/ButtonsStructure";
import "../styles/buttons-view.scss"
import "../styles/button.scss"


interface ButtonsViewProps {
    buttonsStructure: ButtonsStructure;
}
interface ButtonsViewState {
}

export default class ButtonsView extends React.Component<ButtonsViewProps, ButtonsViewState> {
    constructor(props: ButtonsViewProps) {
        super(props);
    }

    render() {
        let me = this;
        let buttonsView = [];
        for (let button of me.props.buttonsStructure.buttons) {
            buttonsView.push(<button className={"button"} onClick={button.onClick}>{button.title}</button>)
        }
        return (
            <div className={"buttons-view"}>
                {buttonsView}
            </div>
        )
    }
}