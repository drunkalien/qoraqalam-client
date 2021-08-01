import classes from "./user.module.scss";
import Link from "next/link";
import Text from "components/Text";

type Props = {
  avatar?: any;
  username?: string;
  subs?: number;
  // thumb?: string;
};

const cat_img_url =
  "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80";

const User = ({ avatar = cat_img_url, username, subs = 0 }: Props) => {
  const image = (
    <img
      className={classes.avatar}
      src={avatar}
      width={50}
      height={50}
      alt="avatar"
    />
  );

  if (!username && !avatar) return image;

  return (
    <Link href="/">
      <a>
        <div className={classes.user}>
          {image}
          <div className={classes["user-details"]}>
            <p>
              <Text size="16">{username}</Text>
            </p>
            <Text color="gray" size="14">
              {subs} ta obunachi
            </Text>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default User;
