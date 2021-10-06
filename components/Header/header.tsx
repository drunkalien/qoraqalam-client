import cn from "classnames";
import classes from "./header.module.scss";
import { Logo } from "../../assets/icons";
import { Searchbar, Button, ProfilePic } from "components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAPIQuery } from "../../hooks";

const Header = () => {
  let token;
  if (typeof window !== "undefined") {
    token = window.localStorage.getItem("token");
  }
  const [logout, setLogout] = useState(false);
  const [userData, setUserData] = useState<any>();
  const userQuery = useAPIQuery({ url: "/users/user" });

  // useEffect(() => {}, [logout]);

  useEffect(() => {
    setUserData(userQuery.data?.data.user);
  }, [userQuery.data?.data.user]);

  return (
    <div className={classes.container}>
      <Link href="/">
        <a>
          <div className={cn(classes.logoContainer)}>
            <Logo />
            <span className={classes["logo-text"]}>
              <span className={classes.text}>qoraqalam</span>
              <span className={cn(classes.dot)}>.</span>
            </span>
          </div>
        </a>
      </Link>
      <Searchbar />
      {userData ? (
        <div className={classes.buttons}>
          <Link href="/editor">
            <a>
              <Button>Maqola yozish</Button>
            </a>
          </Link>
          <Button
            onClick={() => {
              window.localStorage.removeItem("token");
              setUserData(null);
            }}
          >
            Chiqish
          </Button>
          <div className={classes.avatar}>
            <ProfilePic src={userData?.user.avatar} />
          </div>
        </div>
      ) : (
        <div className={classes.buttons}>
          <Link href="/login">
            <a>
              <Button color="white" variant="outline">
                Kirish
              </Button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <Button color="black" variant="filled">
                Roʻyxatdan oʻtish
              </Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
