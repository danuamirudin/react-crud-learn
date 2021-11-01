import axios from "axios";

export default axios.create({
  baseURL: "http://34.101.187.18:8080/api", // change Ip based on ENV
  headers: {
    "Content-type": "application/json"
  }
});

