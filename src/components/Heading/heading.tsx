import { ReactNode } from "react";
import cn from "classnames";
import classes from "./heading.module.scss";

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <div className={cn(classes.heading)}>{children}</div>;
};

export default Heading;
