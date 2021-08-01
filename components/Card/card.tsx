import { ReactNode } from "react";
import cn from "classnames";
import classes from "./card.module.scss";
import { Hashtag, Heading } from "components";

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
  return (
    <div className={cn(classes.card)}>
      <Heading>{title}</Heading>
      <div>
        <Hashtag color="pink" variant="transparent" tagText="karantin" />
        <Hashtag color="gray" variant="transparent" tagText="karantin" />
        <p>date</p>
        <p>views</p>
      </div>
    </div>
  );
};

export default Card;
