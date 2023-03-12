import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID UXygo9JsKAIPbOMeTlws4PdNxqCfDB9qaCtUzB9H7yc",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
