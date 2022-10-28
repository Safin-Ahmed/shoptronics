export const calculateAverageRating = (reviews) => {
  const totalRating = reviews.reduce((acc, cur) => {
    return (acc += cur.attributes.rating);
  }, 0);

  return totalRating / reviews.length;
};
