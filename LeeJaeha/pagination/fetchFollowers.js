const url = 'https://api.github.com/users/jojoldu/followers?per_page=100';

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchFollowers;
