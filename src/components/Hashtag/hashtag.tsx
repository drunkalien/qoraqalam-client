import cn from "classnames";
import classes from "./hashtag.module.scss";

type HashtagProps = {
  color: "pink" | "blue" | "gray";
  variant: "filled" | "not-filled";
  tagText: string;
};

const Hashtag = ({ color, variant, tagText }: HashtagProps) => {
  return (
    <div className={cn(classes.hashtagContainer, classes[variant])}>
      <p className={cn(classes.hashtag, classes[color])}>#{tagText}</p>
    </div>
  );
};

export default Hashtag;
