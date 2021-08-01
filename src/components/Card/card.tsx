import { ReactNode } from "react";
import cn from "classnames";
import classes from "./card.module.scss";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className={cn(classes.card)}>{children}</div>;
};

export default Card;
