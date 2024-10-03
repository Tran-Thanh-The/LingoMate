import dayjs, { Dayjs } from 'dayjs';

export const formatDate = (date: Dayjs | null): string => {
  return date ? dayjs(date).format('YYYY-MM-DD') : '';
};
