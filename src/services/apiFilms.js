import axios from "axios";

// const key = "0cd28c5ead78fcbe7aeeb8683bb2b504";

// export const getFilms = (page) => {
//   const path = `https://api.themoviedb.org/3/trending/movie/day?page=${page}&api_key=${key}`;
//   return axios.get(path);
// };

// // export const someFetch = () => {};
// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
// const KEY = `0cd28c5ead78fcbe7aeeb8683bb2b504`;

// async function fetchTrending(page) {
//   const response = await axios.get(
//     `/trending/movie/day?page=${page}&api_key=${KEY}`
//   );
//   return response.data;
// }
// console.log("ok ");

// export const fetchDriver = (page) => {
//   const key = "0cd28c5ead78fcbe7aeeb8683bb2b504";

//   axios
//     .get(
//       `/trending/movie/day?page=${page}&api_key=${key}`
//     )
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export default { fetchDriver };

//=========================================================
// async function getFetch() {
//   // let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
//   // let key = `563492ad6f917000010000013bbd01457a39431887d74f69015c0d48`;
//   let key = `0cd28c5ead78fcbe7aeeb8683bb2b504`;

//   axios.defaults.baseURL = `https://api.themoviedb.org/3`;
//   axios.defaults.headers.common["Authorization"] = key;
//   let url = `/trending/movie/day?&api_key=${key}`;

//   const response = await axios.get(url);
//   const data = await response.data.results;
//   // console.log(data);
//   // const film = await data.result;
//   return data;
// }

// export default { getFetch };
//=========================================================================
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const KEY = `0cd28c5ead78fcbe7aeeb8683bb2b504`;
//const page = 5;
async function fetchTrending() {
  const response = await axios.get(`/trending/movie/day?&api_key=${KEY}`);
  return response.data;
}
export default fetchTrending;

async function fetchSearch(query, page) {
  const response = await axios.get(
    `/search/movie?query=${query}&page=${page}&api_key=${KEY}`
  );
  console.log(response);
  return response.data;
}

async function fetchDetails(movie_id) {
  const response = await axios.get(`/movie/${movie_id}?api_key=${KEY}`);
  console.log(response);
  return response;
}
async function fetchCast(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/credits?api_key=${KEY}`);
  console.log(response);
  return response;
}
async function fetchReviews(movie_id) {
  const response = await axios.get(`/movie/${movie_id}/reviews?api_key=${KEY}`);
  console.log(response);
  return response;
}
// export default {
//   fetchTrending,
//   fetchSearch,
//   fetchDetails,
//   fetchCast,
//   fetchReviews,
// };
