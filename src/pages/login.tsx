import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';
import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Image from 'next/image';
import LoginSVG from 'assets/Login.svg';
import { useRouter } from 'next/router';
import PageTemplate from 'templates/SinglePageTemplate';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleLogin, FacebookLogin, auth } from '../firebase';

const initialValues = {
  email: '',
  password: '',
  message: '',
};

type FormValues = typeof initialValues;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Niepoprawny adres email')
    .required('Pole wymagane'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Hasło musi zawierać przynajmniej 8 znaków, w tym co najmniej jedną literę i cyfrę'
    )
    .required('Pole wymagane'),
});

const Home: NextPage = () => {
  const router = useRouter();

  const handleFacebookLogin = () => {
    FacebookLogin(() => router.push('/profile'));
  };
  const handleGoogleLogin = () => {
    GoogleLogin(() => router.push('/profile'));
  };

  const onSubmit = async (
    values: FormValues,
    { resetForm, setFieldError }: FormikHelpers<FormValues>
  ) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      resetForm();
      router.push('/profile');
    } catch (e) {
      setFieldError('message', 'Coś poszło nie tak');
    }
  };
  return (
    <UnauthorizedTemplate
      title="Logowanie"
      description="Logowanie do serwisu Quization"
    >
      <PageTemplate>
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <a>
            <LoginSVG />
          </a>
        </div>
        <div className="flex flex-col items-center lg:items-center justify-center md:w-full lg:w-1/2 ">
          <h3 className="px-4 text-xl font-bold">Zaloguj się</h3>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={LoginSchema}
          >
            {({ values, errors, handleChange, handleSubmit, touched }) => (
              <Form className="flex flex-col">
                <Input
                  type="text"
                  value={values.email}
                  required
                  error={touched.email ? errors.email : undefined}
                  placeholder="Adres e-mail"
                  onChange={handleChange('email')}
                />
                <Input
                  type="password"
                  value={values.password}
                  error={touched.password ? errors.password : undefined}
                  required
                  placeholder="Hasło"
                  onChange={handleChange('password')}
                />
                <p className="text-red-300">{errors.message}</p>
                <Button onClick={handleSubmit}>Zaloguj się</Button>
                <div
                  id="buttons"
                  className="flex flex-col xl:justify-between sm:flex-row xl:w-full"
                >
                  <Button onClick={handleGoogleLogin}>
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
                  <Button onClick={handleFacebookLogin}>
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
