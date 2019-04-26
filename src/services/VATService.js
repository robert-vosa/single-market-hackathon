import axios from "axios";

const VATService = {
    fetchVAT: function() {
        return axios.get("/data/standard_vat.json");
    },
    fetchGoodsAndServices: function() {
        return axios.get("/data/goods_services.json");
    },
};

export default VATService;