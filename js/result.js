const urlParams = new URLSearchParams(window.location.search);
const address = urlParams.get("address");

const eligibleImg = "assets/images/eligible.png";
const notEligibleImg = "assets/images/not-eligible.png";

/* Separate funny reasons based on status */
const eligibleReasons = [
    "Congratulations! You're eligible for one virtual hug 🤗",
    "You're eligible! The blockchain gods approve your vibes ✨",
    "Lucky day! Eligibility granted 🎉",
    "You passed the secret billionaires aura test 😎",
    "Eligible! Your wallet radiates pure positivity 🌟",
];

const notEligibleReasons = [
    "Not eligible your wallet took a nap 😭",
    "Disqualified: You clicked the button too confidently 😂",
    "Not eligible cosmic blockchain interference detected 👽",
    "Your friend’s did not used your refferal😭",
    "Not eligible try again after 8000 years ⏳",
];

/* Random eligibility */
const isEligible = Math.random() < 0.5;
const reason = isEligible
    ? eligibleReasons[Math.floor(Math.random() * eligibleReasons.length)]
    : notEligibleReasons[Math.floor(Math.random() * notEligibleReasons.length)];

document.getElementById("resultImage").src = isEligible ? eligibleImg : notEligibleImg;
document.getElementById("resultTitle").innerText = isEligible ? "Eligible 🎉" : "Not Eligible 😭";
document.getElementById("resultNote").innerText = reason;

document.getElementById("resultImage").classList.add(isEligible ? "pop" : "shake");
