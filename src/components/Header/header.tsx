import cn from "classnames";
import classes from "./header.module.scss";
import Container from "../Container/container";
import Searchbar from "../SearchbarComponent";
import Button from "../Button";
import { Logo } from "../../assets/icons";

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
