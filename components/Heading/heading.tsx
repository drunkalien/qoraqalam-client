import { ReactNode } from "react";
import cn from "classnames";
import classes from "./heading.module.scss";

type Props = {
  children: ReactNode;
};

const Heading = ({ children }: Props) => {
  return <h2 className={cn(classes.heading)}>{children}</h2>;
};

export default Heading;
