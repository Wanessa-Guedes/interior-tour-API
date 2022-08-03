import dotenv from "dotenv";
// eslint-disable-next-line import/extensions, import/no-unresolved
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${PORT}`);
});
