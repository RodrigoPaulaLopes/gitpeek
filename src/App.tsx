import { FormEvent, useState } from "react"
import { api } from "./api/Api"
import { IProfile } from "./interfaces/profile"
import GitImage from "./assets/github.png"
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
          <div className="flex justify-center items-center gap-8">
            <img src={GitImage} alt="image_profile" />
            <h1 className="text-80">Perfil GitHub</h1>
          </div>
          <form action="" onSubmit={e => findUser(e)}>
            <label className="input">
              
              <input type="search" required placeholder="Search" />
              <button>
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
              </button>
            </label>
          </form>
        </div>

      </div>

    </>
  )
}

export default App
