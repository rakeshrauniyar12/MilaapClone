import { headers } from "../component/Headers.js";
document.querySelector("#navbar").innerHTML = headers();
import footer from "../component/footer.js";
document.querySelector("#footer").innerHTML = footer();
let divb = document.createElement("div");
divb.setAttribute("class", "divb");
let h1tag = document.createElement("h3");
h1tag.innerText =
  "Thanks for contacting us! We will be in touch with you shortly.";
divb.append(h1tag);
document.querySelector("#secc").addEventListener("click",()=>{
  sendmessage();
})
function sendmessage() {
  let container = document.getElementById("scontainer");
  container.append(divb);
  container.addEventListener("click", closeNow);
}
function closeNow() {
  document.querySelector("#scontainer").innerHTML = null;
}
document.querySelector(".fbpage").addEventListener("click", function () {
  window.location.href = "https://www.facebook.com/milaap";
});
document.querySelector(".twitterpage").addEventListener("click", function () {
  window.location.href = "https://twitter.com/Milaapdotorg";
});
document.querySelector(".instapage").addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/milaapdotorg/";
});
document.querySelector(".ytubepage").addEventListener("click", function () {
  window.location.href = "https://www.youtube.com/c/milaap";
});
