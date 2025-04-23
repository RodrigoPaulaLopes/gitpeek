import { IProfile } from "../../interfaces/profile"

interface IProps {
    profile: IProfile
}
const ProfileContent = ({ profile }: IProps) => {
    return (
        <div className="flex items-center bg-alert px-20 py-5 rounded-lg mt-8 gap-8">
            <div>
                <div className="avatar">
                    <div className="w-[220px] rounded-full border-4 border-title">
                        <img src={profile.avatar_url} />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-title text-xl font-semibold">{profile.name}</h1>
                <p className="text-base font-medium text-black">{profile.bio}</p>
            </div>
        </div>
    )
}

export default ProfileContent