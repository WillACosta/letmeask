import React from "react";
import illustrations from "../assets/images/illustration.svg";
import Logo from "../assets/images/logo.svg";
import logoGoole from "../assets/images/google-icon.svg";
import { Button } from '../components/Button';

import "../styles/auth.scss";

export default function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrations}
          alt="Ilusração simbolizando perguntas e respostas"
        />
        <strong>Toda pergunta <br /> tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={Logo} alt="Logotipo Letmeask" />
          <button className="create-room">
            <img src={logoGoole} alt="Logo Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
