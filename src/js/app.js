import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  const initHamburger = () => {

    if(!document.querySelector("[hamburger-js]")) return;

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
    if(!document.querySelector('.staking__toggle a')) return;
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

  const donationCB = () => {
    if(!document.querySelector('[donation-input-js]')) return;

    document.querySelector('[donation-input-js]').addEventListener('keyup', (ev) => {
      const elVal = Number(ev.currentTarget.value),
        donationVal = Number(document.querySelector('[donation-val-js]').getAttribute('data-donation-val')),
        donationSubval = document.querySelector('[donation-val-js]').getAttribute('data-donation-subval'),
        resultNode = document.querySelector('[donation-result-js]'),
        btnNode = document.querySelectorAll('.donation__btn .c-btn');

      if(elVal === 0) {
        resultNode.innerText = '-';
        $(btnNode[0]).show().css('display', 'flex');
        $(btnNode[1]).hide();
      } else {
        resultNode.innerText = (elVal * donationVal) + ' ' + donationSubval;
        $(btnNode[0]).hide();
        $(btnNode[1]).show().css('display', 'flex');
      }
    });
  };

  const initPopups = () => {
    $('[popup-js]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'is-show',
      callbacks: {
        beforeOpen: function() {
          this.st.mainClass = this.st.el.attr('data-effect');
          $('#fundraisingOverlay').show();
        },
        close: function() {
          $('#fundraisingOverlay').hide();
        }
      }
    });
  };

  initHamburger();
  initTableFilterToggle();
  donationCB();
  initPopups();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
