import axios from "axios";

export default axios.create({
  baseURL: "http://34.101.181.197:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
