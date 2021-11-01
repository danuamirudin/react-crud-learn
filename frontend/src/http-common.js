import axios from "axios";

export default axios.create({
  baseURL: "http://34.101.181.197:8080/api", //change base on ENV IP
  headers: {
    "Content-type": "application/json"
  }
});
