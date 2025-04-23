import { FormEvent, useState } from "react"
import { api } from "./api/Api"
import { IProfile } from "./interfaces/profile"

import { Search } from "lucide-react"
import Container from "./components/Container/Index"
import Content from "./components/Content/Index"
import GitHubImg from "./components/GitImage/Index"
import Title from "./components/Title/Index"
import Form from "./components/Form/Index"
import InputSearch from "./components/InputSearch/Index"
import ProfileContent from "./components/ProfileContent/Index"

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
      console.log(name);
      
      setProfile({ name, avatar_url, bio })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Content>
        <GitHubImg />
        <Title text="Perfil GitHub" />
      </Content>
      <Form submit={findUser} >
        <InputSearch value={username} change={(e) => setUsername(e.target.value)}/> 
      </Form>

      <ProfileContent profile={profile} />
      <div className="bg-alert px-10 py-5 rounded-lg mt-8">
        <p className="text-error text-center">Nenhum perfil foi encontrado com esse nome de usuário.
          Tente novamente</p>
      </div>
    </Container>
  )
}

export default App
