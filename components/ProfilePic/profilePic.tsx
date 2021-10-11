import cn from "classnames";
import classes from "./profilePic.module.scss";

type Props = {
  src: string;
};

const ProfilePic = ({ src, ...otherProps }: Props) => {
  return <img width="48" height="48" className={cn(classes.avatar)} src={src} alt="avatar" {...otherProps} />;
};

export default ProfilePic;
