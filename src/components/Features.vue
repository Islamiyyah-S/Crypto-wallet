<script></script>
<template>
  <section class="Features">
    <h3 class="title">Powerful Features</h3>
    <p class="title-p">
      MCrypto gives you the edge with advanced tools designed for both beginners
      and professional traders.
    </p>
    <div class="features-grid">
      <div class="feature">
      <Icon icon="mdi:chart-line"/>
        <h3>Real-time Analytics</h3>
        <p>
          Monitor market movements with advanced charts and indicators updated
          in real-time.
        </p>
      </div>
      <div class="feature">
      <Icon icon="mdi:shield-lock"/>

        <h3>Bank-level Security</h3>
        <p>
          Your assets are protected with military-grade encryption and
          multi-factor authentication.
        </p>
      </div>
      <div class="feature">
      <Icon icon="mdi:lightning-bolt"/>

        <h3>Instant Execution</h3>
        <p>
          Execute trades in milliseconds with our high-performance trading
          engine.
        </p>
      </div>
      <div class="feature">
      <Icon icon="mdi:creation"/>

        <h3>Smart Portfolio</h3>
        <p>
          Optimize your crypto holdings with AI-powered portfolio suggestions.
        </p>
      </div>
      <div class="feature">
      <Icon icon="mdi:chart-box"/>

        <h3>Price Alerts</h3>
        <p>
          Never miss an opportunity with customizable price alerts and
          notifications.
        </p>
      </div>
      <div class="feature">
      <Icon icon="mdi:cloud-upload"/>

        <h3>Cold Storage</h3>
        <p>
          Majority of assets stored in offline cold wallets for maximum
          security.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.Features{
    color: white;
    padding: 4em 5em;
}
.title{
  color: #e8b84b;
  font-size: 1.8em;
    font-weight: 800;
  margin-bottom: 0.2rem;
  text-align: center;
}
.title-p{
      color: #b0afaf;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  text-align: center;

}
.features-grid{
      display: grid;
  grid-template-columns:repeat(3, 1fr) ;
  gap: 1.5rem;
  color: white;
}
.feature{
      background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.2rem;
    position: relative;
  transition: border-color 0.3s;
}
.feature:hover{
    border-color: #e8b84b;
}
.feature svg{
   width: 50px;
  height: 50px;
  color: #e8b84b;
  background-color: #e8b94b28;
  padding: 10px;
  border-radius: 8px;
}
.feature h3{
      font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
}
.feature p{
     color: #b0afaf;
  font-size: 0.85rem;
}


@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .Features {
    padding: 3em 1.5em;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 1.4em;
  }

  .title-p {
    font-size: 1rem;
  }
}
</style>

