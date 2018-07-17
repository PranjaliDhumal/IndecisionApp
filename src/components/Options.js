import React from "react";
import { Button } from "semantic-ui-react";

const Options = (props) => (
 <div> 
    <div>
      <h3>Your Options </h3>
      <Button>Remove All</Button>
    </div>
    {props.options.length === 0 && <p> Please add a Option</p>}
</div>
);


export default Options;
