interface IProps {
    name: string
    bio: string
}

const Description = ({ name, bio }: IProps) => {
    return (
        <div className="lg:px-0 px-10">
            <h1 className="text-title lg:text-start text-center text-xl font-semibold">{name}</h1>
            <p className="text-base lg:text-start text-center  font-medium text-black">{bio}</p>
        </div>
    )
}
export default Description