import React from "react";

type Props = {
  src: string;
};

const ProfilePic = ({ src }: Props) => {
  return <img width="40" height="40" src={src} alt="avatar" />;
};

export default ProfilePic;
