import React from "react";
import PropComp from "./PropComp";
import EventWithTwoParam from "./EventWithTwoParam";


export default class StateObj extends React.Component {
    fun_one() {
        console.log("Event without parameter");
    }
    constructor() {
        super();
        this.state = {
            data: "Any Types of Data",
            num: 2,
            boolean: true,
            // object
            obj: {
                title: "Hi there",
                name: "Mainul Hasan"
            },
            // list of array
            stack: ["Mongodb", "Express", "React", "Nodejs"],
            key1: "Data Comming from StateComponent 1",
            key2: "Data Comming from StateComponent 2"

        }

    }

    render() {
        return (
            <div>
                <h1>This is State Component Example</h1>
                {/* How to Return State Data */}
                <h2>{this.state.data}</h2>
                <h3>{this.state.num}</h3>
                <h4>{this.state.boolean}</h4>
                {/* How to Print Object */}
                <p>{JSON.stringify(this.state.obj.name)}</p>
                <p>{JSON.stringify(this.state.obj.title)}</p>
                {/* How to Use Map */}
                <p>{this.state.stack}</p>
                <p>{this.state.stack.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}</p>
                {/* Props Sending */}
                <PropComp data1={this.state.key1} data2={this.state.key2} />

                <button onClick={this.fun_one}>Click Me</button>
                <hr />
                <br />
                <EventWithTwoParam />

            </div>
        )
    }
}