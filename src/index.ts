import auth from "./api/auth";
import feeling from "./api/feeling";
import recommandation from "./api/recommandation";
import { createDb } from "./db/db";

const tinderApi = {
  auth,
  feeling,
  recommandation,
};

createDb()

export default tinderApi;
