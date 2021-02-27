import React from "react";
import "./App.css";

import { getCoinApi } from "./api/api";

function App() {
    const [coin, setCoin] = React.useState({});

    React.useEffect(() => {
        async function fetchCoin() {
            const response = await getCoinApi();
            console.log(response);
            setCoin((prev) => (prev = response));
        }

        fetchCoin();
    }, []);

    console.log(coin);

    return (
        <div>
            <ul>
                {coin.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
