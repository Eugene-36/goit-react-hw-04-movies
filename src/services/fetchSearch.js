import axios from "axios";

//=========================================================================
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const KEY = `0cd28c5ead78fcbe7aeeb8683bb2b504`;

async function fetchSearch(query, page) {
  const response = await axios.get(
    `/search/movie?query=${query}&page=${page}&api_key=${KEY}`
  );
  console.log(response);
  return response.data;
}
export default fetchSearch;
