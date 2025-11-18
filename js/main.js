/* main.js
 - used on index.html and result.html for floating/parallax init
 - also handles redirect from index to result
*/

(function(){
  // Redirect logic (index page)
  const checkBtn = document.getElementById('checkBtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      const wallet = document.getElementById('wallet').value.trim();
      if (!wallet) {
        // small friendly shake
        const w = document.getElementById('wallet');
        w.style.transition = 'transform .08s';
        w.style.transform = 'translateX(-6px)';
        setTimeout(()=> w.style.transform = 'translateX(6px)', 80);
        setTimeout(()=> w.style.transform = '', 220);
        return;
      }
      // encode and redirect
      const encoded = encodeURIComponent(wallet);
      window.location.href = `result.html?address=${encoded}`;
    });
  }

  // Floating/parallax init (runs on both pages)
  function initFloatingParallax() {
    const tokens = document.querySelectorAll('#floating-layer .floating');
    if (!tokens.length) return;

    // subtle random initial offsets
    tokens.forEach((el, i) => {
      const rX = (Math.random() * 20) - 10;
      const rY = (Math.random() * 12) - 6;
      el.style.transform += ` translate(${rX}px, ${rY}px)`;
    });

    // parallax scroll effect
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      tokens.forEach((el, idx) => {
        const speed = 0.02 + (idx * 0.01);
        const offsetY = Math.round(s * speed);
        el.style.transform = el.style.transform.replace(/translateY\(-?\d+px\)/g, ''); // clear any previous translateY if direct
        el.style.transform += ` translateY(${offsetY}px)`;
      });
    }, {passive: true});
  }

  // expose to global so result.js can call it too
  window.initFloatingParallax = initFloatingParallax;

  // init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initFloatingParallax();
  });
})();
