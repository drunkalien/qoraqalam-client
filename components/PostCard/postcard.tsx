import { useState } from "react";
import cn from "classnames";
import classes from "./postcard.module.scss";
import { Hashtag, Heading, Icon, User } from "components";
import Link from "next/link";

type User = any;
type Tag = string;

type Props = {
  title: string;
  user: User;
  tagList: Tag[];
  date: Date | string;
  views: number;
  starred: boolean;
};

const Card = ({ date, starred, tagList, title, user, views }: Props) => {
  const [activeStar, setActiveStar] = useState(starred || false);
  return (
    <div className={cn(classes.card)} title={title}>
      <div className={classes.top}>
        <User username="zieu2000" subs={55} />
        <Icon.Star
          className="pointer"
          onClick={() => setActiveStar(!activeStar)}
          active={activeStar}
        />
      </div>
      <div className={classes.middle}>
        <Link href="">
          <a style={{ color: "#000" }}>
            <Heading>{title}</Heading>
          </a>
        </Link>
      </div>
      <div className={classes.bottom}>
        <div className={classes.tagList}>
          {tagList.map((tag, index) => (
            <span key={index} className="mr-5">
              <Hashtag color="pink">{tag}</Hashtag>
            </span>
          ))}
        </div>
        <div className={classes.details}>
          <div className={classes.calendar}>
            <Icon.Calendar />
            {date}
          </div>
          <div className={classes.views}>
            <Icon.Eye />
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
