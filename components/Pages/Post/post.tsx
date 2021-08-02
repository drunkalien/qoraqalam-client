import { Page, Heading, Hashtag } from "components";
import classes from "./post.module.scss";

const Post = () => {
  const tags = ["corona", "virus"];

  return (
    <Page>
      <Heading>
        Karantinga to’g’ri va samarali rioya qilish bo’yicha ko’rsatma
      </Heading>
      <div className={classes["hashtag-container"]}>
        {tags.map((tag, index) => (
          <Hashtag key={index} color="pink" variant="filled">
            {tag}
          </Hashtag>
        ))}
      </div>
    </Page>
  );
};

export default Post;
