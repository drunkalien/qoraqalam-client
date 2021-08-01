type Props = {
  avatar: string;
  name: string;
};

const ProfileCircle = ({ avatar, name }: Props) => {
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <p>{name}p</p>
    </div>
  );
};

export default ProfileCircle;
