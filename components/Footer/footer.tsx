import Link from "next/link";
import cn from "classnames";
import classes from "./footer.module.scss";
import { Button } from "components";
import * as Icons from "../Icons";

const Footer = () => {
  return (
    <footer className={cn(classes.footer)}>
      <div className={cn(classes.container)}>
        <Link href="/">
          <a>
            <div className={cn(classes["first-child"])}>
              <Link href="/">
                <a className={classes.logo}>
                  <Icons.LogoWhite />
                  <span className={classes["logo-text"]}>
                    <span className={classes.text}>qoraqalam</span>
                    <span className={cn(classes.dot)}>.</span>
                  </span>
                </a>
              </Link>
            </div>
          </a>
        </Link>
        <div className={cn(classes["second-child"])}>
          <ul className={cn(classes["footer-list"])}>
            <li>{<Icons.Telegram />}</li>
            <li>{<Icons.Phone />}</li>
            <li>{<Icons.Facebook />}</li>
            <li>{<Icons.Instagram />}</li>
          </ul>
          <Button variant="filled" color="white">
            Maqola Yozish
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
