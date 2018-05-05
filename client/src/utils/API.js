import axios from "axios";

export default {
  // Gets icon labels from the beerlabels db
  getSplashLabels: function() {
    return axios.get("/api/splashlabel");
  },
  // Gets labels from the dbbrewery API
  getLabels: function(query) {
    return axios.get('/api/labels', { params: { searchTerm: query } });
  },
  // Gets all saved labels
  getSavedLabels: function() {
    return axios.get('/api/labels');
  },
  // Deletes the saved label with the given id
  deleteLabel: function(id) {
    return axios.delete('/api/labels/' + id);
  },
  // Saves a label to the database
  saveLabel: function(labelData) {
    return axios.post('/api/labels', labelData)
  }
};
