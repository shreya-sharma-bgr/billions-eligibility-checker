/* result.js
 - runs on result.html
 - reads address param, chooses random category and message
 - shows eligible/not-eligible image and animations
*/

(function(){
  function param(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  const address = param('address') || '';
  const showAddr = address ? (address.length > 12 ? address.slice(0,8) + '...' + address.slice(-4) : address) : 'unknown';

  const messages = {
    eligible: [
      `Congratulations ${showAddr}! You're eligible for one free hug 🤗`,
      `You passed the vibe check. Claim: emotional stability (pending)`,
      `Eligible! Reward: 0.000000001 $BILL distributed in 9000 years.`,
      `You've been selected because an AI smiled at you.`,
      `Green flag You're eligible for unlimited hope.`
    ],
    notEligible: [
      `Not eligible you clicked the button four times, calm down 😂`,
      `Denied. Reason: Your chai was too cold ☕`,
      `Not eligible. Try again after drinking water 💧`,
      `Disqualified: Your wallet is recovering from past airdrops.`,
      `Nope. Your vibes were offline when we checked.`
    ],
    weird: [
      `System glitch: Your eligibility ran away. Please chase it.`,
      `Suspicious: Your wallet has 0 USDT. Concerning.`,
      `Our AI is confused. It says maybe? Try again.`,
      `Alert: Too many airdrops detected. Slow down, king.`,
      `Random outcome: Congrats! You won absolutely nothing.`
    ]
  };

  // probability split (you can tweak)
  // eligible: 35%, notEligible: 55%, weird: 10%
  function pickCategory() {
    const r = Math.random();
    if (r < 0.35) return 'eligible';
    if (r < 0.90) return 'notEligible';
    return 'weird';
  }

  function pickMessage(cat) {
    const arr = messages[cat];
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // show logic
  document.addEventListener('DOMContentLoaded', () => {
    const resultTextEl = document.getElementById('resultText');
    const noteEl = document.getElementById('resultNote');
    const imgEl = document.getElementById('resultImage');
    const imgWrap = document.getElementById('resultImageWrap');

    const cat = pickCategory();
    const msg = pickMessage(cat);

    // friendly headline formatting based on category
    if (cat === 'eligible') {
      resultTextEl.textContent = "You're ELIGIBLE 🎉";
      noteEl.textContent = msg;
      imgEl.src = 'assets/images/eligible.png';
      imgEl.alt = 'eligible';
      // animation
      imgEl.classList.add('pop');
    } else if (cat === 'notEligible') {
      resultTextEl.textContent = "Not Eligible 😢";
      noteEl.textContent = msg;
      imgEl.src = 'assets/images/not-eligible.png';
      imgEl.alt = 'not eligible';
      imgEl.classList.add('shake');
    } else {
      resultTextEl.textContent = "Result: Strange";
      noteEl.textContent = msg;
      imgEl.src = 'assets/images/not-eligible.png';
      imgEl.alt = 'strange';
      imgEl.classList.add('shake');
    }

    // small personalization - show trimmed address below note
    const addrNote = document.createElement('p');
    addrNote.style.marginTop = '8px';
    addrNote.style.fontSize = '13px';
    addrNote.style.color = 'rgba(255,255,255,0.75)';
    addrNote.textContent = `Checked wallet: ${showAddr}`;
    noteEl.parentNode.insertBefore(addrNote, noteEl.nextSibling);

    // trigger floating/parallax init again (if not already)
    if (window.initFloatingParallax) window.initFloatingParallax();
  });
})();
