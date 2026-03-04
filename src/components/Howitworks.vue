<template>
  <section class="how">
    <div class="section-header">
      <h2>How it works</h2>
      <p class="sub">
        Getting started with MCrypto is easy. Follow these simple steps to begin
        your crypto journey.
      </p>
    </div>

    <div class="steps">
      <div class="step">
      <div class="step-number">1</div>
        <Icon icon="mdi:user" />
        <h3>Create Your Account</h3>
        <p>
          Sign up in minutes with our streamlined onboarding process. No
          complicated forms or lengthy verification.
        </p>
      </div>
      <div class="step">
      <div class="step-number">2</div>
        <Icon icon="mdi:wallet" />
        <h3>Fund Your Wallet</h3>
        <p>
          Sign up in minutes with our streamlined onboarding process. No
          complicated forms or lengthy verification.
        </p>
      </div>
      <div class="step">
      <div class="step-number">3</div>
        <Icon icon="mdi:chart-box" />
        <h3>Start Trading</h3>
        <p>
          Access 50+ cryptocurrencies and start trading immediately with
          intuitive tools and real-time data.
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.how {
  padding: 4em 5em;
  background-color: #161616;
  /* background: #0e0e0e; */
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.4rem;
  font-weight: 800;
  color:  #e8b84b;
  margin-bottom: 0.8rem;
}


.sub {
  color: #b0afaf;
  font-size: 1.2em;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.step {
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  transition: border-color 0.3s;
}

.step:hover {
  border-color: #e8b84b;
}

.step-number {
  font-size: 3.5rem;
  font-weight: 800;
  color:#e8b94b12;
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  line-height: 1;
}

.step svg{
  width: 50px;
  height: 50px;
  color: #e8b84b;
  background-color: #e8b94b28;
  padding: 10px;
  border-radius: 8px;
}

h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f0f0f0;
  margin-bottom: 0.6rem;
}

p {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.7;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .how {
    padding: 4rem 1.5rem;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
