import React from "react";

export default class PropComp extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.data1}</p>
                <p>{this.props.data2}</p>
            </div>
        )
    }
}