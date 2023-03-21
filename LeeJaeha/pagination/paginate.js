const paginate = (followers) => {
  const itemsPerPage = 10;
  // numberOfPages = 100 / 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    console.log('numberOfPages', numberOfPages);
    console.log('length', length);
    const start = index * itemsPerPage;
    console.log('start', start);
    console.log(`${start}+${itemsPerPage}`);
    return followers.slice(start, start + itemsPerPage);
  });
  console.log('newFollowers', newFollowers);
  return newFollowers;
};

export default paginate;
