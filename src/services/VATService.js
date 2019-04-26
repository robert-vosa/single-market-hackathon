import axios from "axios";

const ValidationService = {
    fetchVAT: function() {
        return axios.get("https://cors-anywhere.herokuapp.com/http://ec.europa.eu/taxation_customs/tedb/api/search/6a352304-b230-4e1d-948d-1337bf68ed2d.json");
    },
};

export default ValidationService;