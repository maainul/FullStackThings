import React from "react";

<<<<<<< HEAD

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
=======
export default class SetStateComp extends React.Component{
    constructor(){
        super();
        this.state = {
            sub:'FrontEnd Developer'
        }
    }
changeSub = () =>{
    this.setState({
        sub:'Mern Stack Developer'
    })
}

    render(){
        return(
            <div>
                <h1>{this.state.sub}</h1>
>>>>>>> 5e2d4b905f5d7f5e51b9ed0c2dcd76c6d1080f13
                <button onClick={this.changeSub}>Change State</button>
            </div>
        )
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 5e2d4b905f5d7f5e51b9ed0c2dcd76c6d1080f13
