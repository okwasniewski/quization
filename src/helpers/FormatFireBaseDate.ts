import { Timestamp } from 'firebase/firestore';

export const formatFirebaseDateWithoutHours = (date: Timestamp) =>
  date.toDate().toLocaleString('pl-PL', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
