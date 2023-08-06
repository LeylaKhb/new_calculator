import React from "react";
import "../styles/display-view.css"

interface DisplayViewProps {
    content: string;
}

interface DisplayViewState {
    content: string

}
export default class DisplayView extends React.Component<DisplayViewProps, DisplayViewState> {
    constructor(props: DisplayViewProps) {
        super(props);

        this.state = {
            content: props.content
        }
    }

    render() {
        let me = this;
        return (
            <div className={"display-view"}>
                <p>{me.state.content}</p>
            </div>
        )
    }

}