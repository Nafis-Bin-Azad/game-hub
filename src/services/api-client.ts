import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "91a44161897e4d1490428ca097b9caee",
  },
});
