import cn from "classnames";
import classes from "./header.module.scss";
import { Logo } from "../../assets/icons";
import { Container, Searchbar, Button } from "components";

const Header = () => {
  return (
    <Container>
      <div className={cn(classes.logoContainer)}>
        <Logo />
        <span className={classes["logo-text"]}>qoraqalam<span className={cn(classes.dot)}>.</span></span>
      </div>
      <Searchbar />
      <Button color="black" variant="filled">
        Maqola yozish
      </Button>
    </Container>
  );
};

export default Header;
