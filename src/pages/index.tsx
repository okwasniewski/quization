import Hero from 'components/Hero/Hero';
import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';

const Home: NextPage = () => (
  <UnauthorizedTemplate
    title="Strona główna"
    description="Strona główna Quizaiton"
  >
    <Hero
      backgroundImage="Hero.png"
      title="Europejskie ramy kompetencji cyfrowych"
      subtitle={`Kompetencje cyfrowe, obok czytania, pisania, umiejętności matematycznych
        i językowych, stanowią zespół fundamentalnych umiejętności
        współczesnego człowieka.`}
    />
  </UnauthorizedTemplate>
);

export default Home;
