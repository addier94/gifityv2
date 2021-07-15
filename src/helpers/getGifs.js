import { API_KEY } from "../helpers/settings";

export const getGifs = async (category) => {
  console.log("object ", API_KEY);
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data?.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
      user: img.user?.display_name,
      avatar_url: img.user?.avatar_url,
      slug: img.slug,
      original_still: img.images?.original.url,
    };
  });
  return gifs;
};
