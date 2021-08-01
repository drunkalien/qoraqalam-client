import { ReactNode } from "react";
import cn from "classnames";
import classes from "./heading.module.scss";

type Props = {
  children: ReactNode;
};

const Heading = ({ children }: Props) => {
  return <div className={cn(classes.heading)}>{children}</div>;
};

export default Heading;
