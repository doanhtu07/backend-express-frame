import * as http from "http";

declare global {
  var server: http.Server | null | undefined;
}
