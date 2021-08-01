import cn from "classnames";
import classes from "./hashtag.module.scss";

type Props = {
  color?: "pink" | "blue" | "gray";
  variant?: "filled" | "transparent";
  children: string;
};

const Hashtag = ({
  color = "gray",
  variant = "transparent",
  children,
}: Props) => {
  return (
    <div className={cn(classes.hashtagContainer, classes[variant])}>
      <p className={cn(classes.hashtag, classes[color])}>#{children}</p>
    </div>
  );
};

export default Hashtag;
