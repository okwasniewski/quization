import GridItem from 'components/GridItem/GridItem';
import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';

const Home: NextPage = () => (
  <UnauthorizedTemplate
    title="Strona główna"
    description="Strona główna Quizaiton"
  >
    <div className="grid grid-auto gap-7">
      <GridItem
        image="/information.svg"
        imageAlt="Security"
        heading="Informacja i dane"
        content="identyfikacja, lokalizacja, pobieranie, przechowywanie, organizacja i analiza informacji cyfrowych, zdolność oceny ich wartości, znaczenia i celu"
      />
      <GridItem
        image="/security.svg"
        imageAlt="Security"
        heading="Informacja i dane"
        content="identyfikacja, lokalizacja, pobieranie, przechowywanie, organizacja i analiza informacji cyfrowych, zdolność oceny ich wartości, znaczenia i celu"
      />
      <GridItem
        image="/security.svg"
        imageAlt="Security"
        heading="Informacja i dane"
        content="identyfikacja, lokalizacja, pobieranie, przechowywanie, organizacja i analiza informacji cyfrowych, zdolność oceny ich wartości, znaczenia i celu"
      />
    </div>
  </UnauthorizedTemplate>
);

export default Home;
