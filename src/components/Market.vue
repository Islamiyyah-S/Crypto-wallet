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
      <tr v-for="coin in paginatedCoins" :key="coin.rank">
        <td>{{ coin.rank }}</td>
        <td>{{ coin.name }}</td>
        <td>{{ coin.quotes.USD.price }}</td>
        <td>{{ coin.total_supply }}</td>
        <td>{{ coin.max_supply }}</td>
        <td>{{ coin.quotes.USD.market_cap }}</td>
      </tr>
    </table>
    </div>
    

 <div class="flex flex-col items-center mt-6">
      <span class="text-sm text-gray-400">
        Showing 
        <span class="font-semibold text-white">{{ (currentPage - 1) * perPage + 1 }}</span> 
        to 
        <span class="font-semibold text-white">{{ Math.min(currentPage * perPage, coins.length) }}</span> 
        of 
        <span class="font-semibold text-white">{{ coins.length }}</span> 
        Entries
      </span>

      <div class="inline-flex mt-4 -space-x-px">
        <button 
          type="button" 
          @click="currentPage--" 
          :disabled="currentPage === 1"
          class="inline-flex items-center text-white bg-[#161616] border border-[#2a2a2a] hover:bg-[#1e1e1e] hover:text-[#e8b84b] font-medium text-sm px-4 py-2 rounded-l-lg focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed">
          <svg class="w-4 h-4 me-1.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
          </svg>
          Previous
        </button>

        <button 
          type="button" 
          @click="currentPage++" 
          :disabled="currentPage === totalPages"
          class="inline-flex items-center text-white bg-[#161616] border border-[#2a2a2a] hover:bg-[#1e1e1e] hover:text-[#e8b84b] font-medium text-sm px-4 py-2 rounded-r-lg focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed">
          Next
          <svg class="w-4 h-4 ms-1.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
        </button>
      </div>
    </div>

  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      coins: [],
       currentPage: 1,
      perPage: 20
    };
  },
  mounted() {
    this.fetchCoins();
  },
   computed: {
    paginatedCoins() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.coins.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.coins.length / this.perPage)
    }
  },
  methods: {
    async fetchCoins() {
      const response = await axios.get(
        "https://api.coinpaprika.com/v1/tickers/",
      );
      this.coins = response.data;
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
