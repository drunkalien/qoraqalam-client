import cn from "classnames";
import classes from "./profilePage.module.scss";
import { AnimatePresence } from "framer-motion";

import { InfoCard, PostCard, Page } from "components";
import Modal from "./_modal";

import posts from "posts";
import { useAPIQuery } from "hooks";
import { useState, useEffect } from "react";
import router from "next/router";

const articles = ["article1"];

const followers = ["follower1"];

const ProfilePage = () => {
  const userQuery = useAPIQuery({ url: "/users/user" });
  const [userData, setUserData] = useState<any>(null);
  const [modalState, setMoadlState] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    setUserData(userQuery.data?.data.user);
  }, [userQuery.data?.data.user]);
  console.log("USERDATA", userData);

  const avatar = userData ? userData.avatar : "";
  const username = userData ? userData.username : "";
  // const followers = userData ? userData.user.followers : "";
  const articles = userData ? userData.articles : "";
  const email = userData ? userData.email : "";
  console.log(userData);
  return (
    <Page>
      <div className={cn(classes["data-container"])}>
        <h2 className={cn(classes.heading)}>{"Ma'lumotlarim"}</h2>
        <InfoCard
          avatar={avatar}
          articles={articles}
          followers={followers}
          username={username}
          email={email}
          setModalState={setMoadlState}
        />
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
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalState && <Modal avatar={avatar} modalState={modalState} setModalState={setMoadlState} email={email} username={username} />}
      </AnimatePresence>
    </Page>
  );
};

export default ProfilePage;
