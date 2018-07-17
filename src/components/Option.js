import React from "react";
import {Button} from 'semantic-ui-react';
const Option = (props) => {
  <div>
    <p>{props.option.count} .</p>
    <Button>remove</Button>
  </div>
};

export default Option;
