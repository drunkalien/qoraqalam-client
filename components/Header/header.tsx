import cn from "classnames";
import classes from "./header.module.scss";
import { Logo } from "../../assets/icons";
import { Searchbar, Button } from "components";
import Link from "next/link";

const Header = () => {
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
    </div>
  );
};

export default Header;
