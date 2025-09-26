import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", async (req, res) => {
  //keyword send from frontend code.
  const wordToBeSearched = req.query.keyword;
  const jishoUrl = `https://jisho.org/api/v1/search/words?keyword=${wordToBeSearched}`;

  try {
    const response = await axios.get(jishoUrl, {
      // This is required when using axios, while using native fetch function it isn't. Some hosts 403 “non-browser” requests
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        Accept: "application/json",
      },
    });
    return res.json(response.data);
  } catch (error) {
    if (error.response) {
      return res.json({
        data: error.response.data,
        headers: error.response.headers,
        msg: "Page not found",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server at port ${5000} running`);
});
