import { format } from 'date-fns';

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, 'MMMM d, yyyy, h:mm aa');
}
