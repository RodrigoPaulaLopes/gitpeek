import { IProfile } from "../../interfaces/profile"

interface IProps {
  profile: IProfile
}

const ProfileContent = ({ profile }: IProps) => {
  const avatarUrl = profile.avatar_url || "https://ui-avatars.com/api/?name=Profile";
  const name = profile.name || "Lorem Ipsum";
  const bio = profile.bio || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis laudantium iure suscipit voluptatum, dolorem, excepturi accusamus animi, vero quasi blanditiis earum! Beatae aut laboriosam incidunt reprehenderit quae sit harum.";

  return (
    <div className="flex items-center bg-alert px-20 py-5 rounded-lg mt-8 gap-8">
      <div>
        <div className="avatar">
          <div className="w-[220px] rounded-full border-4 border-title">
            <img src={avatarUrl} alt={name} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-title text-xl font-semibold">{name}</h1>
        <p className="text-base font-medium text-black">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileContent;
