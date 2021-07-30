import Search from "../../assets/icons/search";
import cn from "classnames";
import classes from "./searchbar.module.scss";

const Searchbar = ({ ...props }) => {
  return (
    <div className={cn(classes.searchbarContainer)}>
      <input
        className={cn(classes.searchbar)}
        {...props}
        placeholder="Istalgan maqolani izlang..."
      />
      <Search />
    </div>
  );
};

export default Searchbar;
