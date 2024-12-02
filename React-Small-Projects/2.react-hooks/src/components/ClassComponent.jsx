import React from "react";

export default class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "techinfoyt",
    };
  }
  render() {
    const { username } = this.state;
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{username}</h1>
      </>
    );
  }
}
