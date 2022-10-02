let navbar = () => {
  return `<header>
  <img
    class="logo"
    src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
    alt="logo"
  />
  <!-- <h2 class="logo">Amazon.in</h2> -->
  <nav>
    <ul class="nav__links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Donate</a></li>
      <li><a href="#">Lend</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </nav>
  <a href="#"><button class="cta">Start a fundraiser</button></a>
  <a href="#"><button class="cta">Login/Signup</button></a>
</header>`;
};

export { navbar };
