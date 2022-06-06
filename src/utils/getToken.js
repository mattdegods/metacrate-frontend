import axios from "axios";
import utilConfig from "../configs/util.config";

export const getToken = async () => {
  return await axios.post(utilConfig.authTokenUrl).then(res => {return res?.data?.access_token}).catch(err => console.log("ERROR:", err))
};