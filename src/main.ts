import "module-alias/register";
import app from "@app";
import { connectToDB } from "@config";

app.listen(3000, async () => {
  await connectToDB();
  console.log("Server is running on 3000");
});
