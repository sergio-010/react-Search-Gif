export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=UNtwju0AaUHEIr6I3B7p70YrO7X8Svm0&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
