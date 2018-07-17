import React from "react";
import { Button } from "semantic-ui-react";
const Action = () => (
  <div>
    <Button animated="fade">
      <Button.Content visible>What should I do?</Button.Content>
      <Button.Content hidden>Show Me</Button.Content>
    </Button>
  </div>
);

export default Action;
