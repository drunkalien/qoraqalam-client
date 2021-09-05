import cn from "classnames";
import { tTag } from "types";
import classes from "./hashtag.module.scss";

type Props = tTag & {};

const Hashtag = ({ color = "gray", variant = "transparent", children }: Props) => {
  return (
    <div className={cn(classes.hashtagContainer, classes[variant])}>
      <p className={cn(classes.hashtag, classes[color])}>#{children}</p>
    </div>
  );
};

export default Hashtag;
