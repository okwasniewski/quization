import GridItem from './GridItem';

export default {
  title: 'Components/GridItem',
  component: GridItem,
  argTypes: {
    numOfItems: {
      control: 'number',
    },
  },
};

export const GridItemStory = ({ numOfItems = 5 }: { numOfItems: number }) => (
  <div className="grid grid-auto gap-7">
    {Array.from({ length: numOfItems }).map((_, index) => (
      <GridItem
        key={index}
        image="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        imageAlt="Opis obrazka"
        heading="Informacja i dane"
        content="identyfikacja, lokalizacja, pobieranie, przechowywanie, organizacja i analiza informacji cyfrowych, zdolność oceny ich wartości, znaczenia i celu"
      />
    ))}
  </div>
);
