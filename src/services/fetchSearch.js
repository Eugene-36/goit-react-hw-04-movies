import axios from "axios";

//=========================================================================
// axios.defaults.baseURL = `https://api.themoviedb.org/3/search/search-movies`;
// // let s = "https://developers.themoviedb.org/3/search/search-movies ";
// const KEY = `0cd28c5ead78fcbe7aeeb8683bb2b504`;

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "da01c4e54a8d5b285bda18b1e0590cea";

const getDetails = (id) => {
  const path = `${baseUrl}movie/${id}?api_key=${apiKey}&language=en-US`;
  return axios.get(path).then((response) => {
    console.log(response.data);
  });
};

export default getDetails;
