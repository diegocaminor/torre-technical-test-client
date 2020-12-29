const apiUrl = "http://localhost:3000/api/";
const axios = require("axios");

const getBioByUsername = async ({ username }) => {
  try {
    let data = await axios({
      url: `${apiUrl}bios/${username}`,
      method: "GET",
    });
    if (!data.data) {
      data.data = {};
      data.data.message = "User not found";
    }
    return data.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err); // ***
  }
};

const getJobsBySkills = async ({ username }) => {
  try {
    let data = await axios({
      url: `${apiUrl}jobs/skills/${username}`,
      method: "GET",
    });
    if (!data.data) {
      data.data = {};
      data.data.message = "User not found";
    }
    return data.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err); // ***
  }
};

export default {
  getBioByUsername,
  getJobsBySkills,
};
