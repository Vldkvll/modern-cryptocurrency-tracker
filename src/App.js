import React from "react";
import "./App.css";

import { getCoinApi } from "./api/api";
import filteredCoins from "./utils/filteredCoins";
import Coin from "./Components/Coin";

function App() {
    const [coins, setCoins] = React.useState([]);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        async function fetchCoin() {
            try {
                const response = await getCoinApi();
                console.log(response);
                setCoins((prev) => (prev = response));
            } catch (error) {
                console.log("error");
                console.log(error);
            }
        }

        fetchCoin();
    }, []);

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    console.log(search);

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        className="coin-input"
                        onChange={handleChangeSearch}
                    ></input>
                </form>
            </div>
            {filteredCoins(coins, search).map( coin => (
                <Coin key={coin.id} coin={coin} />
            ))}
        </div>
    );
}

export default App;
