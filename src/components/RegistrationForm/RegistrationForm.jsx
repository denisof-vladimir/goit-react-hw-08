import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be min 3 chars')
      .required('This field is required'),
      email: Yup.string().email()
    .min(5, 'Must be min 5 chars')
    .required('This field is required'),
    password: Yup.string()
      .min(5, 'Must be min 3 chars')
      .required('This field is required'),
  });
  
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("RegistrationForm-",values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}