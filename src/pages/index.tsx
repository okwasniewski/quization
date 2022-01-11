import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';

const Home: NextPage = () => (
  <UnauthorizedTemplate
    title="Strona główna"
    description="Strona główna Quizaiton"
  >
    <h1>Test</h1>
  </UnauthorizedTemplate>
);

export default Home;
