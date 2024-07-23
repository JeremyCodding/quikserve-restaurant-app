import axios from "axios";
import { Venue } from "../redux/slices/types.ts";

const api = axios.create({
  baseURL: "https://cdn-dev.preoday.com/challenge/",
});

export const fetchVenue = async (venueId: string): Promise<Venue> => {
  const response = await api.get(`venue/${venueId}`);
  return response.data;
};
