import axios from "axios";

const KEY = "AIzaSyDcLPqCJtwOTfLDb4GErzeqKNHL2fltmEQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
    safeSearch: "strict",
  },
});
