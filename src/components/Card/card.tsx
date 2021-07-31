import { ReactNode } from "react";
import cn from "classnames";
import classes from "./card.module.scss";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={cn(classes.card)}>{children}</div>;
};

export default Card;
