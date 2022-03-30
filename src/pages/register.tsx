import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';
import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Image from 'next/image';
import Register from 'assets/Register.svg';
import { useRouter } from 'next/router';
import PageTemplate from 'templates/SinglePageTemplate';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  message: '',
};

type FormValues = typeof initialValues;

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('Pole wymagane'),
  lastName: Yup.string().required('Pole wymagane'),
  email: Yup.string()
    .email('Niepoprawny adres email')
    .required('Pole wymagane'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Hasło musi zawierać przynajmniej 8 znaków, w tym co najmniej jedną literę i cyfrę'
    )
    .required('Pole wymagane'),
  repeatPassword: Yup.string()
    .required('Hasła muszą być takie same')
    .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same'),
});

const Home: NextPage = () => {
  const router = useRouter();

  const onSubmit = async (
    values: FormValues,
    { resetForm, setFieldError }: FormikHelpers<FormValues>
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (res.user && auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: `${values.firstName} ${values.lastName}`,
        });
      }
      resetForm();
      router.push('/login');
    } catch (e) {
      setFieldError('message', 'Coś poszło nie tak');
    }
  };
  return (
    <UnauthorizedTemplate
      title="Rejestracja"
      description="Logowanie do serwisu Quization"
    >
      <PageTemplate>
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <a>
            <Register />
          </a>
        </div>
        <div className="flex flex-col items-center lg:items-center justify-center md:w-full lg:w-1/2 ">
          <h3 className="px-4 text-xl font-bold">Zarejestruj się</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, handleChange, touched, handleSubmit }) => (
              <Form className="flex flex-col">
                <Input
                  type="text"
                  value={values.firstName}
                  error={touched.firstName ? errors.firstName : ''}
                  required
                  placeholder="Imię"
                  onChange={handleChange('firstName')}
                />
                <Input
                  type="text"
                  value={values.lastName}
                  error={touched.lastName ? errors.lastName : ''}
                  required
                  placeholder="Nazwisko"
                  onChange={handleChange('lastName')}
                />
                <Input
                  type="email"
                  value={values.email}
                  error={touched.email ? errors.email : ''}
                  required
                  placeholder="Adres e-mail"
                  onChange={handleChange('email')}
                />
                <Input
                  type="password"
                  value={values.password}
                  error={touched.password ? errors.password : ''}
                  required
                  placeholder="Hasło"
                  onChange={handleChange('password')}
                />
                <Input
                  type="password"
                  value={values.repeatPassword}
                  error={touched.repeatPassword ? errors.repeatPassword : ''}
                  required
                  placeholder="Powtórz hasło"
                  onChange={handleChange('repeatPassword')}
                />
                <p className="text-red-300">{errors.message}</p>
                <Button onClick={handleSubmit}>Zarejestruj się</Button>
                <div
                  id="buttons"
                  className="flex flex-col xl:justify-between sm:flex-row xl:w-full"
                >
                  <Button onClick={() => router.push('/login')}>
                    <div className="flex items-center mr-2">
                      <Image
                        src="/Google.svg"
                        width={25}
                        height={25}
                        className="mx-5"
                      />
                    </div>
                    Google
                  </Button>
                  <Button onClick={() => router.push('/login')}>
                    <div className="flex items-center mr-2">
                      <Image
                        src="/Facebook.svg"
                        width={25}
                        height={25}
                        className="mx-5"
                      />
                    </div>
                    Facebook
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </PageTemplate>
    </UnauthorizedTemplate>
  );
};

export default Home;
