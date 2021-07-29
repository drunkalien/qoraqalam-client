import { FunctionComponent } from "react";
import cs from "classnames";
import classes from "./container.module.scss";
import classNames from "classnames";

const Container: FunctionComponent = ({ children }) => {
  return <div className={classNames(classes.container)}>{children}</div>;
};

export default Container;
