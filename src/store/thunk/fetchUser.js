import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk("user/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //ONLY DEV
  await pause(1000);

  return response.data;
});

//ONLY DEV

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { fetchUser };
