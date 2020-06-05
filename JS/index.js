<script type="text/javascript">
  var t1 = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();

  t1.from('.pageiddiv', .5, {opacity: 0});
  t1.to('.pageiddiv', .5, {opacity: 1});
  t1.to('.pageiddiv', .5, {opacity: 0});
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  const scene = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t1)
    .addTo(controller);

  function updatePercentage() {
    t1.progress();
    console.log(t1.progress());
    if (t1.progress() == 1) {
      document.getElementById("pageid").innerHTML = "Services";
      document.querySelector('.pageiddiv').setAttribute('id', 'blue');
    } else if (t1.progress() != 1) {
      document.getElementById("pageid").innerHTML = "About";
      document.querySelector('.pageiddiv').setAttribute('id', 'white')

    }
  }


  var t2 = new TimelineMax({onUpdate:updatePercentage2});
  const controller2 = new ScrollMagic.Controller();

  t2.to('.transitionarea0', .5, {opacity: 0});

  const scene2 = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '40%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t2)
    .addTo(controller2);

  function updatePercentage2() {
    t2.progress();
    console.log(t2.progress());
  }

  var t3 = new TimelineMax({onUpdate:updatePercentage3});
  const controller3 = new ScrollMagic.Controller();

  t3.to('.backer0', .5, {opacity: 0});

  const scene3 = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '40%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t3)
    .addTo(controller3);

  function updatePercentage3() {
    t3.progress();
    console.log(t3.progress());
  }

  /* aboutpage */
  var t4 = new TimelineMax({onUpdate:updatePercentage4});
  const controller4 = new ScrollMagic.Controller();

  t4.from('.pageiddiv', .5, {opacity: 0});
  t4.to('.pageiddiv', .5, {opacity: 1});
  t4.to('.pageiddiv', .5, {opacity: 0});
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  const scene4 = new ScrollMagic.Scene({
    triggerElement: '.aboutpage',
    triggerHook: 'onLeave',
    duration: '120%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t4)
    .addTo(controller4);

  function updatePercentage4() {
    t4.progress();
    console.log(t4.progress());
    if (t4.progress() == 1) {
      document.getElementById("pageid").innerHTML = "Work";
      document.querySelector('.pageiddiv').setAttribute('id', 'black');
    } else if (t4.progress() != 1) {
      document.getElementById("pageid").innerHTML = "Services";
      document.querySelector('.pageiddiv').setAttribute('id', 'blue')

    }
  }

  var t5 = new TimelineMax({onUpdate:updatePercentage5});
  const controller5 = new ScrollMagic.Controller();

  t5.to('.transitionarea1', .5, {opacity: 1});

  const scene5 = new ScrollMagic.Scene({
    triggerElement: '.aboutpage',
    triggerHook: 'onLeave',
    duration: '40%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t5)
    .addTo(controller5);

  function updatePercentage5() {
    t5.progress();
    console.log(t5.progress());
  }

</script>

<script type="text/javascript">
  var t1 = new TimelineMax({onUpdate:updatePercentage});
  const controller = new ScrollMagic.Controller();

  t1.from('.pageiddiv', .5, {opacity: 0});
  t1.to('.pageiddiv', .5, {opacity: 1});
  t1.to('.pageiddiv', .5, {opacity: 0});
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  const scene = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t1)
    .addTo(controller);

  function updatePercentage() {
    t1.progress();
    console.log(t1.progress());
    if (t1.progress() == 1) {
      document.getElementById("pageid").innerHTML = "Services";
      document.querySelector('.pageiddiv').setAttribute('id', 'blue');
    } else if (t1.progress() != 1) {
      document.getElementById("pageid").innerHTML = "About";
      document.querySelector('.pageiddiv').setAttribute('id', 'white')

    }
  }


  var t2 = new TimelineMax({onUpdate:updatePercentage2});
  const controller2 = new ScrollMagic.Controller();

  t2.to('.transitionarea0', .5, {opacity: 0});

  const scene2 = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t2)
    .addTo(controller2);

  function updatePercentage2() {
    t2.progress();
    console.log(t2.progress());
  }

  var t3 = new TimelineMax({onUpdate:updatePercentage3});
  const controller3 = new ScrollMagic.Controller();

  t3.to('.backer0', .5, {opacity: 0});

  const scene3 = new ScrollMagic.Scene({
    triggerElement: '.homepage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t3)
    .addTo(controller3);

  function updatePercentage3() {
    t3.progress();
    console.log(t3.progress());
  }

  /* aboutpage */
  var t4 = new TimelineMax({onUpdate:updatePercentage4});
  const controller4 = new ScrollMagic.Controller();

  t4.from('.pageiddiv', .5, {opacity: 0});
  t4.to('.pageiddiv', .5, {opacity: 1});
  t4.to('.pageiddiv', .5, {opacity: 0});
  /* t1.to('.transitionarea0', .5, {opacity: 0}); */

  const scene4 = new ScrollMagic.Scene({
    triggerElement: '.aboutpage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t4)
    .addTo(controller4);

  function updatePercentage4() {
    t4.progress();
    console.log(t4.progress());
    if (t4.progress() == 1) {
      document.getElementById("pageid").innerHTML = "Work";
      document.querySelector('.pageiddiv').setAttribute('id', 'black');
    } else if (t4.progress() != 1) {
      document.getElementById("pageid").innerHTML = "Services";
      document.querySelector('.pageiddiv').setAttribute('id', 'blue')

    }
  }

  var t5 = new TimelineMax({onUpdate:updatePercentage5});
  const controller5 = new ScrollMagic.Controller();

  t5.to('.transitionarea1', .5, {opacity: 1});

  const scene5 = new ScrollMagic.Scene({
    triggerElement: '.aboutpage',
    triggerHook: 'onLeave',
    duration: '100%'
  })

  /* .setPin('.pageiddiv')*/
  .setTween(t5)
    .addTo(controller5);

  function updatePercentage5() {
    t5.progress();
    console.log(t5.progress());
  }

</script>
