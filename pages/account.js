import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getMeApi } from "../api/user";
import useAuth from "../hooks/useAuth";
import BasicLayout from "../layouts/BasicLayout";
import ChangeNameForm from "../components/Account/ChangeNameForm";
import ChangeEmailForm from "../components/Account/ChangeEmailForm/ChangeEmailForm";
import ChangePasswordForm from "../components/Account/ChangePasswordForm";

export default function Account() {
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) return null;

  if (!auth && !user) {
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout className="account">
      <Configuracion {...{ user }} {...{ logout }} {...{ setReloadUser }} />
    </BasicLayout>
  );
}

function Configuracion({ user, logout, setReloadUser }) {
  return (
    <div className="account__configuration">
      <div className="title">Configuración</div>
      <div className="data">
        <ChangeNameForm {...{ user }} {...{ logout }} {...{ setReloadUser }} />
        <ChangeEmailForm {...{ user }} {...{ logout }} {...{ setReloadUser }} />
        <ChangePasswordForm {...{ user }} {...{ logout }} />
      </div>
    </div>
  );
}
