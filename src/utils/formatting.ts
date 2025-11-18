export const formatDistance = (kilometres: number): string => {
  return `${kilometres.toFixed(1)} km`;
};

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hrs} h` : `${hrs} h ${mins} min`;
};

export const formatDateNl = (isoDate: string): string => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('nl-NL', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};
