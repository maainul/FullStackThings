import React from "react";

export default class EventWithTwoParam extends React.Component {
    //function with arguments
    func_two(arg1, arg2) {
        if (arg1 === 'admin' && arg2 === 'admin') {
            alert('Login sucessfull')
        } else {
            alert('Login failed');
        }
    }

    render() {
        return (
            <div>
                <h1>Function with parameters</h1>
                <button onClick={() => { this.func_two("admin", "admin") }}>Click Me 2</button>
            </div>
        )
    }
}