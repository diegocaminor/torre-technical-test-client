const apiUrl = "http://localhost:3000/api/";
const axios = require("axios");

const getJobsBySkills = async ({ username }) => {
  try {
    let data = await axios({
      url: `${apiUrl}jobs/skills/${username}`,
      method: "GET",
    });
    console.log("retornadndo dataa de usuario que no existe");
    console.log(data);
    if (!data.data) {
      data.data = {};
      data.data.message = "User not found";
    }
    return data.data;
  } catch (err) {
    console.error("Error response:");
    console.error(err); // ***
  } finally {
    console.log("COMO  RETORNO 404 NO DEBERIA LLEGAR ACA!");
  }
};

export default {
  getJobsBySkills,
};
