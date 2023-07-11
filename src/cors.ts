import cors from "cors";
import { ErrorWrap } from "./utils/Error";

const whitelist = [process.env.FRONTEND_HOST];

export const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    if (process.env.NODE_ENV === "development") {
      callback(null, true);
      return;
    }

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
      return;
    }

    callback(ErrorWrap({ err: "Not allowed by CORS", origin, whitelist }));
  },
  credentials: true,
};
