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
        <li><a href="./index.html">Home</a></li>
        <li><a href="./donate.html">Donate</a></li>
        <li><a href="./Lend_Page/lend.html">Lend</a></li>
        <li><a href="./price.html">Pricing</a></li>
        <li><a href="./contact.html">Contact us</a></li>
      </ul>
    </nav>
    <a href="./fundraise.html"><button class="cta">Start a fundraiser</button></a>
    <div class="popup" onclick="myFunction()"><img id="reg" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="">
      <span class="popuptext" id="myPopup"><a href="./signup/login.html">Login</a> / <a href="./signup/signup.html">Signup</a></span>
    </div>
  </header>`;
};

let nvbar = () => {
  return `<header>
    <img
      class="logo"
      src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"
      alt="logo"
    />
    <!-- <h2 class="logo">Amazon.in</h2> -->
    <nav>
      <ul class="nav__links">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./donate.html">Donate</a></li>
        <li><a href="./Lend_Page/lend.html">Lend</a></li>
        <li><a href="./price.html">Pricing</a></li>
        <li><a href="./contact.html">Contact us</a></li>
      </ul>
    </nav>
    <a href="#"><button class="cta">Start a fundraiser</button></a>
    <div class="popup" onclick="myFunction()"><img id="reg" src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="">
      <span class="popuptext" id="myPopup"><a href="#">Logout</a></span>
    </div>
  </header>`;
};

export { navbar, nvbar };
