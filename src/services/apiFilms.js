import axios from "axios";

//=========================================================================
// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
// const KEY = `0cd28c5ead78fcbe7aeeb8683bb2b504`;
// //const page = 5;
// async function fetchTrending() {
//   const response = await axios.get(`/trending/movie/day?&api_key=${KEY}`);
//   return response.data;
// }
//export default fetchTrending;

// import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "da01c4e54a8d5b285bda18b1e0590cea";

const getRating = () => {
  const path = `${baseUrl}trending/all/day?api_key=${apiKey}`;
  return axios.get(path).then((response) => {
    return response.data;
  });
};

const getDetails = (id) => {
  const path = `${baseUrl}movie/${id}?api_key=${apiKey}&language=en-US`;
  return axios
    .get(path)
    .then((response) => {
      if (response.data.length === 0) {
        Promise.reject("Error");
      }
      return response.data;
    })
    .catch((error) => ({ error }));
};

const getCast = (id) => {
  const path = `${baseUrl}movie/${id}/credits?api_key=${apiKey}&language=en-US`;
  return axios.get(path).then((response) => {
    return response.data;
  });
};

const getReviews = (id) => {
  const path = `${baseUrl}movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`;
  return axios.get(path).then((response) => {
    return response.data;
  });
};

const api = { getRating, getDetails, getCast, getReviews };
export default api;
