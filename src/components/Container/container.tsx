import { ReactNode } from "react";
import cn from "classnames";
import classes from "./container.module.scss";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={cn(classes.container)}>{children}</div>;
};

export default Container;
