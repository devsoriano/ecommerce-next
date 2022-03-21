import { useState } from "react";
import {
  Container,
  Menu as MenuWeb,
  Grid,
  Icon,
  Label,
  GridColumn,
} from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal/BasicModal";

export default function Menu() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <GridColumn className="menu__right" width={10}>
            <MenuOptions onShowModal={onShowModal} />
          </GridColumn>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title="Inicia sesión"
        size="small"
      >
        Contenido del Modal
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

function MenuOptions({ onShowModal }) {
  return (
    <MenuWeb>
      <MenuWeb.Item onClick={onShowModal}>
        <Icon name="user outline" />
        Mi cuenta
      </MenuWeb.Item>
    </MenuWeb>
  );
}
