import axios from "axios";

const instance = axios.create({
    headers: {
        contentType: "application/json",
    },
    baseURL: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
});

export const getCoinApi = () => {
    return instance
        .get()
        .then(function (response) {
            return response.data;
        })
        // .catch((error) => {
        //     console.log("error");
        //     console.log(error);
        // });
};
