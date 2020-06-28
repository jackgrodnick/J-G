'use strict';

/* import test from './introductionfade.js';

console.log(test); */

setTimeout(function () {
  var t1 = new TimelineMax({ onUpdate: updatePercentage });
  var controller = new ScrollMagic.Controller();

  /*      t1.from('.pageiddiv', .5, {opacity: 0});
    t1.to('.pageiddiv', .5, {opacity: 1}); */
  t1.to('.nothing', 1, { opacity: 0 });
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  var scene = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t1).addTo(controller);

  function updatePercentage() {
    t1.progress();
    /* console.log(t1.progress()); */
    if (t1.progress() < 0.16) {
      /* document.querySelector('.pageiddiv').classList.add('z-index0') */
      document.querySelector('.pageiddiv').style.opacity = "0";
      document.querySelector('.container').setAttribute('id', 'black');
      /*  document.querySelector('.pageiddiv').classList.remove('z'); most recent */

      /*          document.getElementById("pageid").innerHTML = "Services";
            document.querySelector('.pageiddiv').setAttribute('id', 'blue'); */
    } else if (t1.progress() >= 0.16 && t1.progress() < 1) {
      /* document.querySelector('.pageiddiv').classList.remove('z-index0') */
      document.querySelector('.pageiddiv').style.opacity = "1";
      document.querySelector('.container').setAttribute('id', 'white');
      /*  document.querySelector('.pageiddiv').classList.add('z'); most recent */
      /*          document.getElementById("pageid").innerHTML = "About";
            document.querySelector('.pageiddiv').setAttribute('id', 'white') */
    } else if (t1.progress() == 1) {
      /*document.querySelector('.pageiddiv').classList.add('z-index0')*/
      document.querySelector('.pageiddiv').style.opacity = "0";
      /* document.querySelector('.pageiddiv').classList.remove('z'); most recent */
    } else {
        /* document.querySelector('.pageiddiv').classList.add('z-index0') */
      }
  }
}, 5200);

setTimeout(function () {
  var t2 = new TimelineMax({ onUpdate: updatePercentage2 });
  var controller2 = new ScrollMagic.Controller();

  /*      t1.from('.pageiddiv', .5, {opacity: 0});
    t1.to('.pageiddiv', .5, {opacity: 1}); */
  t2.to('.nothing', 1, { opacity: 0 });
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.aboutpage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t2).addTo(controller2);

  function updatePercentage2() {
    t2.progress();
    /* console.log(t2.progress()); */
    if (t2.progress() < 0.16) {
      document.querySelector('.pageiddiv1').style.opacity = "0";
      document.querySelector('.container').setAttribute('id', 'white');
    } else if (t2.progress() >= 0.16 && t2.progress() < 1) {
      document.querySelector('.pageiddiv1').style.opacity = "1";
      document.querySelector('.container').setAttribute('id', 'blue');

      /*          document.getElementById("pageid").innerHTML = "Services";
            document.querySelector('.pageiddiv').setAttribute('id', 'blue'); */
    } else if (t2.progress() == 1) {
      document.querySelector('.pageiddiv1').style.opacity = "0";
    }
  }
}, 5200);

setTimeout(function () {
  var t3 = new TimelineMax({ onUpdate: updatePercentage3 });
  var controller3 = new ScrollMagic.Controller();

  /*      t1.from('.pageiddiv', .5, {opacity: 0});
    t1.to('.pageiddiv', .5, {opacity: 1}); */
  t3.to('.nothing', 1, { opacity: 0 });
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.servicespage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t3).addTo(controller3);

  function updatePercentage3() {
    t3.progress();
    /* console.log(t3.progress()); */
    if (t3.progress() < 0.16) {
      document.querySelector('.pageiddiv2').style.opacity = "0";
      document.querySelector('.container').setAttribute('id', 'blue');
    } else if (t3.progress() >= 0.16 && t3.progress() < 1) {
      document.querySelector('.pageiddiv2').style.opacity = "1";
      document.querySelector('.container').setAttribute('id', 'black');

      /*          document.getElementById("pageid").innerHTML = "Services";
            document.querySelector('.pageiddiv').setAttribute('id', 'blue'); */
    } else if (t3.progress() == 1) {
      document.querySelector('.pageiddiv2').style.opacity = "0";
    }
  }
}, 5200);

setTimeout(function () {
  var t4 = new TimelineMax({ onUpdate: updatePercentage4 });
  var controller4 = new ScrollMagic.Controller();

  /*      t1.from('.pageiddiv', .5, {opacity: 0});
    t1.to('.pageiddiv', .5, {opacity: 1}); */
  t4.to('.nothing', 1, { opacity: 0 });
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.workpage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t4).addTo(controller4);

  function updatePercentage4() {
    t4.progress();
    /* console.log(t4.progress()); */
    if (t4.progress() < 0.16) {
      document.querySelector('.pageiddiv3').style.opacity = "0";
      document.querySelector('.container').setAttribute('id', 'black');
    } else if (t4.progress() >= 0.16 && t4.progress() < 1) {
      document.querySelector('.pageiddiv3').style.opacity = "1";
      document.querySelector('.container').setAttribute('id', 'white');

      /*          document.getElementById("pageid").innerHTML = "Services";
            document.querySelector('.pageiddiv').setAttribute('id', 'blue'); */
    } else if (t4.progress() == 1) {
      document.querySelector('.pageiddiv3').style.opacity = "0";
    }
  }
}, 5200);