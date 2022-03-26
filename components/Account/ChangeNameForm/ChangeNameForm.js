import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateNameApi } from "../../../api/user";

export default function ChangeNameForm({
  user: { id, name, lastname },
  logout,
  setReloadUser,
}) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(name, lastname),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateNameApi(id, formData, logout);
      if (!response) {
        toast.error("Error al actualizar nombre y apellidos");
      } else {
        setReloadUser(true);
        toast.success("Nombre y apellidos actualizados");
      }
      setLoading(false);
    },
  });

  return (
    <div className="change-name-form">
      <h4>Cambia tu nombre y apellidos</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="name"
            placeholder="Tu nuevo nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Form.Input
            name="lastname"
            placeholder="Tus nuevos apellidos"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.errors.lastname}
          />
        </Form.Group>
        <Button className="submit" loading={loading} type="submit">
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValues(name, lastname) {
  return {
    name,
    lastname,
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
  };
}
