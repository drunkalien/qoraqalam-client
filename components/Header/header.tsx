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
      <Button color="black" variant="filled">
        Maqola yozish
      </Button>
    </div>
  );
};

export default Header;
