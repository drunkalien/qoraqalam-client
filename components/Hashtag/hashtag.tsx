import cn from "classnames";
import classes from "./hashtag.module.scss";

type Props = {
  color: "pink" | "blue" | "gray";
  variant: "filled" | "transparent";
  tagText: string;
};

const Hashtag = ({ color, variant, tagText }: Props) => {
  return (
    <div className={cn(classes.hashtagContainer, classes[variant])}>
      <p className={cn(classes.hashtag, classes[color])}>#{tagText}</p>
    </div>
  );
};

export default Hashtag;
