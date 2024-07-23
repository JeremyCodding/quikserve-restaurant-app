import axios from "axios";
import { Menu } from "../redux/slices/types.ts";

const api = axios.create({
  baseURL: "https://cdn-dev.preoday.com/challenge/",
});

export const fetchMenu = async (): Promise<Menu> => {
  const response = await api.get("menu");
  return response.data;
};
