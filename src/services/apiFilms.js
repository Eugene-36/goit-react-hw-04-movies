import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "da01c4e54a8d5b285bda18b1e0590cea";

const getRating = () => {
  const path = `${baseUrl}trending/all/day?api_key=${apiKey}`;
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

const getReviews = (id) => {
  const path = `${baseUrl}movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`;
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

const api = { getRating, getDetails, getCast, getReviews };
export default api;
