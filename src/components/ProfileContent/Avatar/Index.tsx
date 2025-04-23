interface IProps {
    avatarUrl: string
    name: string
}

const Avatar = ({avatarUrl, name}: IProps) => {
    return (
        <div>
            <div className="avatar">
                <div className="w-[220px] rounded-full border-4 border-title">
                    <img src={avatarUrl} alt={name} />
                </div>
            </div>
        </div>
    )
}

export default Avatar