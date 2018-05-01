import axios from "axios";

export default {
  // Gets articles from the beerlabels db
  getSplashLabels: function() {
    return axios.get("/api/splashlabel");
  }
};
