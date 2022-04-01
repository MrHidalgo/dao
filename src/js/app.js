import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const initHamburger = () => {

    const btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

    /**
     * @description
     */
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;

      elem.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");

      hideScrollContainer.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });

    });

  };

  const initTableFilterToggle = () => {
    document.querySelectorAll('.staking__toggle a').forEach((val, idx) => {
      val.addEventListener('click', (ev) => {

        document.querySelector('.staking__toggle a.is-active').classList.remove('is-active');

        if(ev.currentTarget.classList.contains('is-active')) {
          ev.currentTarget.classList.contains('is-active');
        } else {
          ev.currentTarget.classList.add('is-active');
        }

      }, false);
    });
  };

  initHamburger();
  initTableFilterToggle();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
