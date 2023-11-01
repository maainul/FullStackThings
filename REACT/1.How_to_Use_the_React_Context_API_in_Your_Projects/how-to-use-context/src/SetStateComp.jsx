import React from "react";


export default class SetStateComp extends React.Component {
    constructor() {
        super();
        this.state = {
            subject: 'FrontEnd Developer'
        }
    }

    changeSub = () => {
        this.setState(
            {
                subject: 'Mern Stack Developer'
            });
    }
    render() {
        return (
            <div>
                <h1>{this.state.subject}</h1>
                <button onClick={this.changeSub}>Change State</button>
            </div>
        )
    }
}
