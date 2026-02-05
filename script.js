// ==============================
// Countdown Timer 30min
// ==============================
let time = 30 * 60;
setInterval(() => {
  let m = Math.floor(time / 60);
  let s = time % 60;
  document.getElementById("time").textContent = `${m}:${s<10?'0'+s:s}`;
  if(time>0) time--;
}, 1000);

// ==============================
// Social Proof Popups
// ==============================
const messages = [
  "👨‍🎓 Aman (Final Year, Delhi) just enrolled",
  "🔥 3 students purchased in last 10 minutes",
  "👀 24 engineering students viewing this page",
  "🎯 Rohit (Pre-Final Year) unlocked the bundle"
];
setInterval(() => {
  const popup = document.getElementById("popup");
  popup.textContent = messages[Math.floor(Math.random()*messages.length)];
  popup.style.display = "block";
  setTimeout(()=>popup.style.display="none",4000);
},9000);

// ==============================
// Scroll Fade-Up Animations
// ==============================
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform="translateY(0)";
    }
  });
},{threshold:0.15});
document.querySelectorAll(".fade-up").forEach(el=>observer.observe(el));

// ==============================
// Timer Urgency Mode Last 5 min
// ==============================
const timerBox = document.querySelector(".timer");
setInterval(()=>{
  const parts = document.getElementById("time").textContent.split(":");
  const remaining = parseInt(parts[0])*60 + parseInt(parts[1]);
  if(remaining<=300){
    timerBox.style.borderColor="#ef4444";
    timerBox.style.color="#ef4444";
    timerBox.style.animation="pulse 1s infinite";
  }
},1000);

// ==============================
// Exit Intent Detection
// ==============================
let exitShown=false;
document.addEventListener("mouseout",e=>{
  if(e.clientY<10 && !exitShown){
    exitShown=true;
    document.querySelector(".lead").innerText="⚠️ Wait! This placement offer expires soon. Bonuses will be removed if you leave!";
  }
});

// ==============================
// Page Focus Awareness
// ==============================
document.addEventListener("visibilitychange",()=>{
  document.title = document.hidden?"⏳ Offer running… don’t miss this":"Ultimate Placement Bundle | Limited-Time Offer";
});

// ==============================
// Razorpay Payment
// ==============================
function payNow(){
  var options = {
    key: "RAZORPAY_KEY_ID",
    amount: 49900,
    currency: "INR",
    name: "Ultimate Placement Bundle",
    description: "DSA, SQL & Interview Prep",
    handler: function () {
      document.getElementById("downloadModal").style.display = "block";
      window.scrollTo({top:0, behavior:"smooth"});
    },
    theme: { color: "#22c55e" }
  };
  new Razorpay(options).open();
}
