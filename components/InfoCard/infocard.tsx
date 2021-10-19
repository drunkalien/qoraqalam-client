import { Dispatch, SetStateAction } from "react";
import cn from "classnames";
import { useRouter } from "next/router";

import classes from "./infocard.module.scss";
import { Button } from "..";

type Props = {
  avatar: string;
  username: string;
  followers: string[];
  articles: string[];
  email: string;
  setModalState: Dispatch<SetStateAction<boolean>>;
};

const InfoCard = ({ avatar, username, followers, articles, email, setModalState }: Props) => {
  const router = useRouter();
  return (
    <div className={cn(classes.card)}>
      <div className={cn(classes.container)}>
        <div className={cn(classes["card-container"])}>
          <img className={cn(classes.avatar)} src={avatar} alt="avatar" />
          <div className={cn(classes["info-container"])}>
            <h3 className={cn(classes.username)}>{username}</h3>
            <p className={cn(classes.email)}>{email}</p>
            <div className={cn(classes["data-container"])}>
              <div>
                <p className={cn(classes["data-label"])}>Obunachilar soni:</p>
                <p className={cn(classes["data-label"])}>Maqolalar soni:</p>
              </div>
              <div className={cn(classes.data)}>
                <p className={cn(classes.stats)}>{followers.length} ta</p>
                <p className={cn(classes.stats)}>{articles.length} ta</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(classes["button-container"])}>
          <Button onClick={() => setModalState(true)}>{"O'zgartirish kiritish"}</Button>
          <Button
            color="pink"
            onClick={() => {
              router.push("/");
              localStorage.removeItem("token");
            }}
          >
            Chiqish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
