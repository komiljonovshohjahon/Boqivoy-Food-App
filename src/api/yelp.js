import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer k5V1Syre3xN5bUas5ktSDyvaf9lvK1ZaQY9rvzHn1MC5RU-BJ7ZLY5-FaL5FHp_lo_CdUQ2q9yPNYGmwiZWoCqQNitpN3OAt4M6oxH3S3LX4ML81r9lD-DWbbaj1X3Yx",
  },
});
