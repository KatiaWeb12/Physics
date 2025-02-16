import axios from "axios";

//хранение базовой ссылки
export const agent = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://physics-server-jade.vercel.app"
      : "http://localhost:3001",
});
