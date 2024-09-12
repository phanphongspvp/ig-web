import { StateAuth } from "@/types/auth";

const accessToken = localStorage.getItem('accessToken');

export const initState = (): StateAuth => {
  return {
    accessToken: accessToken
  };
};
