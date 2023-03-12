import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID UXygo9JsKAIPbOMeTlws4PdNxqCfDB9qaCtUzB9H7yc",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
