<template>
  <section class="hero">
    <div class="hero-text">
      <p class="badge">The #1 Crypto Wallet in the world</p>
      <h1>Buy, Sell & Trade <span class="highlight">Crypto</span> With Ease</h1>
      <p class="sub">
        Experience seamless cryptocurrency trading with real-time analytics,
        AI-powered insights, and zero commission fees.
      </p>
      <div class="buttons">
        <button class="btn-primary">Get Started</button>
        <button class="btn-ghost">Learn More</button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  padding: 6rem 4rem;
  background-image: url(../assets/hero-background.jpg);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.hero-text {
  max-width: 520px;
}

.badge {
  color: #e8b84b;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #f0f0f0;
  line-height: 1.15;
  margin-bottom: 1rem;
}

.highlight {
  color: #e8b84b;
}

.sub {
  color: #888;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background: #e8b84b;
  color: #000;
  border: none;
  padding: 0.75rem 1.8rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.95rem;
}

.btn-ghost {
  background: transparent;
  color: #f0f0f0;
  border: 1px solid #2a2a2a;
  padding: 0.75rem 1.8rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.95rem;
}

.btn-ghost:hover {
  border-color: #e8b84b;
  color: #e8b84b;
}

.hero-card {
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  padding: 2rem;
  min-width: 300px;
}

.card-label {
  color: #888;
  font-size: 0.82rem;
  margin-bottom: 0.3rem;
}

h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #f0f0f0;
}

.card-change {
  color: #4ade80;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.coin-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.coin {
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
}

.coin-name {
  color: #f0f0f0;
  flex: 1;
}

.coin-price {
  color: #aaa;
  flex: 1;
  text-align: center;
}

.coin-change {
  flex: 1;
  text-align: right;
  font-weight: 600;
}

.up {
  color: #4ade80;
}
.down {
  color: #f87171;
}

@media (max-width: 768px) {
   .hero {
    flex-direction: column;
    padding: 5rem 1.5rem 3rem;
    min-height: fit-content;
  }
  h1 {
    font-size: 2rem;
  }
  .hero-card {
    width: 100%;
  }
}
</style>
