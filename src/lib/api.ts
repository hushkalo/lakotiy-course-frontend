import ky from "ky";

const defaultUrl = import.meta.env.VITE_API_URL;

export const api = ky.extend({
  prefixUrl: defaultUrl,
});
