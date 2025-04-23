import { FormEvent, useState } from "react"
import { api } from "./api/Api"
import { IProfile } from "./interfaces/profile"
import GitImage from "./assets/github.png"
import { Search } from "lucide-react"
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
      <div className="mx-auto max-w-7xl h-screen flex flex-col justify-center items-center">
        <div className="w-6xl">
          <div className="flex justify-center items-center gap-2">
            <img src={GitImage} alt="image_profile" />
            <h1 className="text-80">Perfil <span className="font-bold">GitHub</span></h1>
          </div>
          <form action="" className="bg-black" onSubmit={e => findUser(e)}>
            <div className="flex h-search rounded-lg bg-black rounded-lg border border-gray-300 bg-white">
              <input
                type="text"
                className="h-search rounded-lg w-full flex-1 bg-white border-none px-4 text-base placeholder:text-black text-black outline-none"
                placeholder="Digite um usuário do Github"
              />
              <button className="bg-button text-white px-4 py-2 rounded h-full">

                <Search size={24} color="white" />
              </button>
            </div>
          </form>
        </div>

      </div>

    </>
  )
}

export default App
