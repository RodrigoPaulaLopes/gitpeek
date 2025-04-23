import { IProfile } from "../../interfaces/profile"
import Avatar from "./Avatar/Index";
import Content from "./Content/Index";
import Description from "./Description/Index";

interface IProps {
  profile: IProfile
}

const ProfileContent = ({ profile }: IProps) => {
  const avatarUrl = profile.avatar_url || "https://ui-avatars.com/api/?name=Profile";
  const name = profile.name || "Lorem Ipsum";
  const bio = profile.bio || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis laudantium iure suscipit voluptatum, dolorem, excepturi accusamus animi, vero quasi blanditiis earum! Beatae aut laboriosam incidunt reprehenderit quae sit harum.";

  return (
    <Content>
      <Avatar avatarUrl={avatarUrl} name={name}/> 
      <Description name={name} bio={bio} />
    </Content>
  );
};

export default ProfileContent;
