import React from "react";

export default class RefComp extends React.Component {
    constructor() {
        super();
        this.state = {
            login: ''
        }
    }
    login = () => {
        if (this.refs.uname.value === "admin" && this.refs.upwd.value === 'admin') {
            this.setState({
                login: 'Success'
            })
        }
        else this.setState({
            login: 'Failed'
        })
    }
    render() {
        return (
            <div>
                <fieldset>
                    <legend>
                        Login Form
                    </legend>
                    <br />
                    <br />
                    <input type="text" ref="uname" placeholder="Enter User Name" /><br />
                    <br />
                    <br />
                    <input type="password" ref="upwd" placeholder="Enter Password" />
                    <br /> <br />
                    <button onClick={this.login}>Login </button><br />
                    <br />
                    <br />
                    <br />
                    <h1>Login Status : ={this.state.login}</h1>
                </fieldset>
            </div>
        )
    }
}