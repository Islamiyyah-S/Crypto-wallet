<template>
  <section class="market">
    <div class="section-header">
      <h2>Crypto Market</h2>
      <p class="sub">Real-time data from the top coins</p>
    </div>
    <div class="table-wrapper">
    <table style="width: 100%">
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Price</th>
        <th>Total Supply</th>
        <th>Max supply</th>
        <th>Market Cap</th>
      </tr>
      <tr v-for="coin in coins" :key="coin.rank">
        <td>{{ coin.rank }}</td>
        <td>{{ coin.name }}</td>
        <td>{{ coin.quotes.USD.price }}</td>
        <td>{{ coin.total_supply }}</td>
        <td>{{ coin.max_supply }}</td>
        <td>{{ coin.quotes.USD.market_cap }}</td>
      </tr>
    </table>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      coins: [],
    };
  },
  mounted() {
    this.fetchCoins();
  },
  methods: {
    async fetchCoins() {
      const response = await axios.get(
        "https://api.coinpaprika.com/v1/tickers/",
      );
      this.coins = response.data.splice(0, 30);
    },
  },
};
</script>
<style scoped>
.market {
  padding: 2rem 4rem;
  background: #0e0e0e;
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.4rem;
  font-weight: 800;
  color: #e8b84b;
  margin-bottom: 0.8rem;
}

.sub {
  color: #b0afaf;
  font-size: 1rem;
}

tr {
  border-bottom: 1px solid #2a2a2a;
  transition: background 0.2s;
}

th {
  text-align: left;
  padding: 1rem;
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  background-color: #e8b84b;
}

tr:hover {
  background: #161616;
}

td {
  padding: 1.1rem 1rem;
  color: #f0f0f0;
  font-size: 0.92rem;
}

.table-wrapper {
  overflow-x: auto;
}

@media (max-width: 600px) {
  .market {
    padding: 2rem 1rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  td, th {
    padding: 0.8rem 0.6rem;
    font-size: 0.78rem;
  }
}
</style>
