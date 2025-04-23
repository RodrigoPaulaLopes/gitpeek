import { FormEvent, useState } from "react";
import { api } from "./api/Api";
import { IProfile } from "./interfaces/profile";

import Container from "./components/Container/Index";
import Content from "./components/Content/Index";
import GitHubImg from "./components/GitImage/Index";
import Title from "./components/Title/Index";
import Form from "./components/Form/Index";
import InputSearch from "./components/InputSearch/Index";
import ProfileContent from "./components/ProfileContent/Index";
import AlertError from "./components/AlertError/Index";

const initialValue: IProfile = {
  name: "",
  avatar_url: "",
  bio: "",
};

function App() {
  const [profile, setProfile] = useState<IProfile>(initialValue);
  const [username, setUsername] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false); // 👈

  const findUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.get(`/${username}`);
      const { avatar_url, name, bio } = response.data;

      setProfile({ name, avatar_url, bio });
      setHasError(false);
    } catch (error) {
      console.log("Usuário não encontrado:", error);
      setHasError(true); 
      setProfile(initialValue); 
    }
  };

  return (
    <Container>
      <Content>
        <GitHubImg />
        <Title text="Perfil GitHub" />
      </Content>

      <Form submit={findUser}>
        <InputSearch
          value={username}
          change={(e) => setUsername(e.target.value)}
        />
      </Form>

      {!hasError && profile.name && <ProfileContent profile={profile} />}

      {hasError && <AlertError />}
    </Container>
  );
}

export default App;
