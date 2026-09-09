import { assetsURL } from "@/src/http-client/axios";

export const appendBaseUrl = (url: string): string => {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;

  return assetsURL + url;
};