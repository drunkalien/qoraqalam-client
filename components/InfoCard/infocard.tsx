import cn from "classnames";

import classes from "./infocard.module.scss";
import { Button } from "..";

type Props = {
  avatar: string;
  username: string;
  followers: string[];
  articles: string[];
};

const InfoCard = ({ avatar, username, followers, articles }: Props) => {
  return (
    <div className={cn(classes.card)}>
      <div className={cn(classes.container)}>
        <div className={cn(classes["data-container"])}>
          <img className={cn(classes.avatar)} src={avatar} alt="avatar" />
          <div className={cn(classes["info-container"])}>
            <h3 className={cn(classes.username)}>{username}</h3>
            <p className={cn(classes.data)}>
              Obunachilar soni: <strong>{followers.length}ta</strong>
            </p>
            <p className={cn(classes.data)}>
              Maqolalar soni: <strong>{articles.length}ta</strong>
            </p>
          </div>
        </div>
        <Button>{"O'zgartirish kiritish"}</Button>
      </div>
    </div>
  );
};

export default InfoCard;
