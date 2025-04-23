import { FormEvent, useState } from "react"
import { api } from "./api/Api"
import { IProfile } from "./interfaces/profile"

import { Search } from "lucide-react"
import Container from "./components/Container/Index"
import Content from "./components/Content/Index"
import GitHubImg from "./components/GitImage/Index"
import Title from "./components/Title/Index"
import Form from "./components/Form/Index"

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
    <Container>
      <Content>
        <GitHubImg />
        <Title text="Perfil GitHub" />
      </Content>
      <Form submit={findUser} >
        <div className="flex w-full h-[62px]  rounded-lg bg-black rounded-lg border border-gray-300 bg-white ">
          <input
            type="text"
            className="h-search rounded-lg w-full flex-1 bg-white border-none px-4 text-base placeholder:text-black text-black outline-none"
            placeholder="Digite um usuário do Github"
          />
          <button className="flex justify-center items-center bg-button w-[62px] text-white px-4 py-2 rounded h-full">
            <Search size={24} color="white" />
          </button>
        </div>
      </Form>

      <div className="flex items-center bg-alert px-20 py-5 rounded-lg mt-8 gap-8">
        <div>
          <div className="avatar">
            <div className="w-[220px] rounded-full border-4 border-title">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-title text-xl font-semibold">Lucas Mendes</h1>
          <p className="text-base font-medium text-black">Desenvolvedor front-end apaixonado por criar
            interfaces intuitivas e acessíveis.
            Especialista em UX/UI e e-commerces,
            transformando design em código eficiente.
            Sempre explorando novas tecnologias
            para melhorar a experiência do usuário. 🚀</p>
        </div>
      </div>
      <div className="bg-alert px-10 py-5 rounded-lg mt-8">
        <p className="text-error text-center">Nenhum perfil foi encontrado com esse nome de usuário.
          Tente novamente</p>
      </div>
    </Container>
  )
}

export default App
