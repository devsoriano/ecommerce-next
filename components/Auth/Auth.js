import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

export default function Auth({ onCloseModal, setTitleModal }) {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Iniciar Sesión");
    setShowLogin(true);
  };

  const showRegisterForm = () => {
    setTitleModal("Crear nuevo usuario");
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForm {...{ showRegisterForm }} {...{ onCloseModal }} />
  ) : (
    <RegisterForm {...{ showLoginForm }} />
  );
}
