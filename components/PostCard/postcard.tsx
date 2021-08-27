import { useState } from "react";
import cn from "classnames";
import classes from "./postcard.module.scss";
import { Hashtag, Heading, Icon, User } from "components";
import Link from "next/link";
import Text from "components/Text";
import { tPost, tTag } from "types";

type User = any;
type Tag = string;

type Props = tPost & { id: number };

const Card = ({ date, starred, tagList, title, user, views, id }: Props) => {
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
        <Link href={`/posts/${id}`}>
          <a style={{ color: "#000" }}>
            <Heading>{title}</Heading>
          </a>
        </Link>
      </div>
      <div className={classes.bottom}>
        <div className={classes.tagList}>
          {tagList.map(({ children, variant, color }, index) => (
            <span key={index} className="mr-5">
              <Hashtag color={color} variant={variant}>
                {children}
              </Hashtag>
            </span>
          ))}
        </div>
        <div className={classes.details}>
          <div className={classes.calendar}>
            <Icon.Calendar />
            <Text color="gray" size="14">
              {date}
            </Text>
          </div>
          <div className={classes.views}>
            <Icon.Eye />
            <Text color="gray" size="14">
              {views}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
