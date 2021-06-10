import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    // key: "AIzaSyBd8RyfCR1e3mhmUWiRfgUpkwdES-xM06M",
    key: process.env.REACT_APP_YOUTUBEDATAAPI_KEY,
  },
});

export default request;
