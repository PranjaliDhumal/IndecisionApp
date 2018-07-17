import React from "react";
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  handleAddOption = option => {
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };
  render() {
    return (
      <div>
        <Header subtitle="Your To do List" />

        <Action />
        <Options options={this.state.options} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}
export default IndecisionApp;
