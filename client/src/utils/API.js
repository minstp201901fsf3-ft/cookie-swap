import axios from "axios";

// ***********
//defaults still need to be updated with correct info and function names
// ***********

export default {
  // Gets all saved books
  getInventory: function() {
    return axios.get("/api/tcms");
  },

  getTCM: function(){
    return axios.get("/api/tcms/1");
  },
  validateSUMLogin : function()
  {
    return axios.get("/api/SUM/login");
  },
  validateTCMLogin : function()
  {
    return axios.get("/api/TCM/login");

  }

};
