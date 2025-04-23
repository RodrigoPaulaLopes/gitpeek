import { FormEvent, useState } from "react"
import { api } from "./api/Api"
import { IProfile } from "./interfaces/profile"

const initialValue: IProfile = {
  name: '',
  avatar_url: '',
  bio: ''
}
function App() {
  const [profile, setProfile] = useState<IProfile>(initialValue)
  const [username, setUsername] = useState<string>('')


  const findUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.get(`/${username}`)
      const { avatar_url, name, bio } = response.data
      setProfile({ name, avatar_url, bio })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div>
        <form action="" onSubmit={e => findUser(e)}>
          <label htmlFor="">USERNAME</label>
          <input type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="submit" value={"enviar"} />
        </form>
      </div>
      {profile && (
        <div>
          <img src={profile.avatar_url} alt="profile_image" />
          <span>Name: {profile.name}</span>

          <span>Bio: {profile.bio}</span>

        </div>
      )}
    </>
  )
}

export default App
