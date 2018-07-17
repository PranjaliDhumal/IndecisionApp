import React from "react";
import { button } from "semantic-ui-react";
const Header = props => {
  return (
    <div>
      {props.title && <h1>{props.title}</h1>}
      {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
};
Header.defaultProps = {
  title: "IndecisionApp",
  subtitle: "Something needs to be added here"
};
export default Header;
