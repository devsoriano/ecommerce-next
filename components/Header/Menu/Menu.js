import React, { useState, useEffect } from "react";
import {
  Container,
  Menu as MenuWeb,
  Grid,
  Icon,
  GridColumn,
} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Iniciar sesión");
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <GridColumn className="menu__right" width={10}>
            {user !== undefined && (
              <MenuOptions
                onShowModal={onShowModal}
                user={user}
                logout={logout}
              />
            )}
          </GridColumn>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size="small"
      >
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </BasicModal>
    </div>
  );
}

function MenuPlatforms() {
  return (
    <MenuWeb>
      <Link href="/play-station">
        <MenuWeb.Item as="a">PlayStantion</MenuWeb.Item>
      </Link>
      <Link href="/xbox">
        <MenuWeb.Item as="a">Xbox</MenuWeb.Item>
      </Link>
      <Link href="/switch">
        <MenuWeb.Item as="a">Switch</MenuWeb.Item>
      </Link>
    </MenuWeb>
  );
}

function MenuOptions({ onShowModal, user, logout }) {
  return (
    <MenuWeb>
      {user ? (
        <>
          <Link href="/orders">
            <MenuWeb.Item as="a">
              <Icon name="game" />
              Mis pedidos
            </MenuWeb.Item>
          </Link>
          <Link href="/wishlist">
            <MenuWeb.Item as="a">
              <Icon name="heart outline" />
              Wishlist
            </MenuWeb.Item>
          </Link>
          <Link href="/account">
            <MenuWeb.Item as="a">
              <Icon name="user outline" />
              {user.name} {user.lastname}
            </MenuWeb.Item>
          </Link>
          <Link href="/cart">
            <MenuWeb.Item as="a" className="m-0">
              <Icon name="cart" />
            </MenuWeb.Item>
          </Link>
          <MenuWeb.Item onClick={logout} className="m-0">
            <Icon name="power off" />
          </MenuWeb.Item>
        </>
      ) : (
        <MenuWeb.Item onClick={onShowModal}>
          <Icon name="user outline" />
          Mi cuenta
        </MenuWeb.Item>
      )}
    </MenuWeb>
  );
}
