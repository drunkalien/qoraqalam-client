import cn from "classnames";
import classes from "./header.module.scss";
import { Logo } from "../../assets/icons";
import { Searchbar, Button } from "components";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={cn(classes.logoContainer)}>
        <Logo />
        <span className={classes["logo-text"]}>
          qoraqalam<span className={cn(classes.dot)}>.</span>
        </span>
      </div>
      <Searchbar />
      <Button color="black" variant="filled">
        Maqola yozish
      </Button>
    </div>
  );
};

export default Header;
