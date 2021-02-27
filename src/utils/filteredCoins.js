const filteredCoins = (coins, search) => {
    return coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
};

export default filteredCoins;
