import cn from "classnames";
import classes from "./profilePage.module.scss";

import { InfoCard, PostCard, Page } from "components";

import posts from "posts";
import { useAPIQuery } from "hooks";
import { useState, useEffect } from "react";
import router from "next/router";

const articles = ["article1"];

const followers = ["follower1"];

const ProfilePage = () => {
  const userQuery = useAPIQuery({ url: "/users/user" });
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    setUserData(userQuery.data?.data.user);
  }, [userQuery.data?.data.user]);
  console.log(userData);

  const avatar = userData ? userData.user.avatar : "";
  const username = userData ? userData.user.username : "";
  // const followers = userData ? userData.user.followers : "";
  const articles = userData ? userData.user.articles : "";
  const email = userData ? userData.user.email : "";
  console.log(userData);
  return (
    <Page>
      <div className={cn(classes["data-container"])}>
        <h2 className={cn(classes.heading)}>{"Ma'lumotlarim"}</h2>
        <InfoCard avatar={avatar} articles={articles} followers={followers} username={username} email={email} />
      </div>
      <div className={cn(classes["article-container"])}>
        <h2 className={cn(classes.heading)}>Maqolalarim</h2>
        {posts.map(({ ...postProps }, index) =>
          index < 2 ? (
            <div key={index} className="mb-20">
              <PostCard id={index} {...postProps} />
            </div>
          ) : null,
        )}
      </div>
    </Page>
  );
};

export default ProfilePage;
