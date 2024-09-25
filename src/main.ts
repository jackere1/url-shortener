import "module-alias/register";
import "dotenv/config";
import app from "@app";
import { connectToDB } from "@config";

app.listen(process.env.PORT || 3000, async () => {
  await connectToDB();
  console.log("Server is running on " + (process.env.PORT || 3000));
});
