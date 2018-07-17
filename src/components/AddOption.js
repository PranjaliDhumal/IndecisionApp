import React from "react";
import { Form, Button, Input } from "semantic-ui-react";
class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    console.log(e.target.elements.option.value);
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleAddOption}>
          <Input
            placeholder="Enter Your Option Here"
            type="text"
            name="option"
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddOption;
