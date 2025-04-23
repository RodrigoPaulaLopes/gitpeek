import { FormEvent, useState } from "react"
import { api } from "./api/Api"

function App() {
  
  const [username, setUsername] = useState<string>('')


  const findUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.get(`/${username}`)
      const { avatar_url, name, bio } = response.data
      console.log("Nome:", name);
      console.log("Bio:", bio);
      console.log("Foto de perfil:", avatar_url)
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
            <input type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="submit" value={"enviar"}/>
        </form>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
