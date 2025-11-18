const urlParams = new URLSearchParams(window.location.search);
const address = urlParams.get("address");

const eligibleImg = "assets/images/eligible.png";
const notEligibleImg = "assets/images/not-eligible.png";

const funnyReasons = [
    "Disqualified: You clicked the button too confidently.",
    "Eligible for one virtual hug 🤗",
    "Not eligible because your wallet took a nap.",
    "Eligible because you smiled today!",
    "Not eligible due to cosmic blockchain interference.",
    "Eligible: Your vibes passed the verification.",
    "Not eligible — your friend's referral stole your luck 😭",
];

const randomIndex = Math.floor(Math.random() * funnyReasons.length);
const isEligible = Math.random() < 0.5;

document.getElementById("resultImage").src = isEligible ? eligibleImg : notEligibleImg;
document.getElementById("resultTitle").innerText = isEligible ? "Eligible 🎉" : "Not Eligible 😭";
document.getElementById("resultNote").innerText = funnyReasons[randomIndex];

document.getElementById("resultImage").classList.add(isEligible ? "pop" : "shake");
