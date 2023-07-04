export const connectClassnames = (...classnames: any[]) => {
  const formattedClassnames = classnames.filter(Boolean);
  return formattedClassnames.join(' ');
};
