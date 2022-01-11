import { NextPage } from 'next';
import React from 'react';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';

const AuthorizedPage: NextPage = () => (
  <AuthorizedTemplate
    title="Authorized page"
    description="Strona tylko dla zalogowanych"
  >
    <div
      style={{
        height: '200vh',
      }}
    >
      <h1>Authorized page</h1>
    </div>
  </AuthorizedTemplate>
);

export default AuthorizedPage;
