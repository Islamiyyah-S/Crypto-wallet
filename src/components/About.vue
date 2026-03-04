<template>
  <section class="about">
    <div class="about-image">
      <img src="../assets/about-image.jpg" alt="" />
    </div>

    <div class="about-text">
      <p class="badge">About</p>
      <h2>The smarter way to <span class="highlight">manage crypto</span></h2>
      <p class="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis,
        exercitationem amet at nulla perspiciatis cumque fuga nam reprehenderit
        recusandae qui perferendis aperiam ad facilis quae consequuntur? Sunt,
        provident pariatur!
      </p>

      <div class="stats">
        <div class="stat">
          <h3>2M</h3>
          <p>Active Users</p>
        </div>
        <div class="stat">
          <h3>$10B+</h3>
          <p>Assets Managed</p>
        </div>
        <div class="stat">
          <h3>150+</h3>
          <p>Coins Supported</p>
        </div>
        <div class="stat">
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: rem 4rem;
  background: #111;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 500px;
  height: 600px;
}
.about-text {
  flex: 1;
}

.badge {
  color: #e8b84b;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #f0f0f0;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.highlight {
  color: #e8b84b;
}

.desc {
  color: #888;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stat {
  background: #161616;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.2rem;
}

.stat h3 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #e8b84b;
  margin-bottom: 0.2rem;
}

.stat p {
  color: #888;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
    padding: 4rem 1.5rem;
  }

  .about-image {
    display: none;
    width: 100%;
  }

  h2 {
    font-size: 1.8rem;
  }
}
</style>
