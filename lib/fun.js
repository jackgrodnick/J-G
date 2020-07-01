'use strict';

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

      /*          document.getElementById("pageid").innerHTML = "Services";
            document.querySelector('.pageiddiv').setAttribute('id', 'blue'); */
    } else if (t1.progress() >= 0.16 && t1.progress() < 1) {
      /* document.querySelector('.pageiddiv').classList.remove('z-index0') */
      document.querySelector('.pageiddiv').style.opacity = "1";
      document.querySelector('.container').setAttribute('id', 'white');
      /*          document.getElementById("pageid").innerHTML = "About";
            document.querySelector('.pageiddiv').setAttribute('id', 'white') */
    } else if (t1.progress() == 1) {
      /*document.querySelector('.pageiddiv').classList.add('z-index0')*/
      document.querySelector('.pageiddiv').style.opacity = "0";
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

TweenMax.to('.divd', 1, {
  opacity: 1
});
TweenMax.to('#screen', 1, {
  opacity: 1
});

objectsw = {
  'run': 0
};

var fadeOut = function fadeOut() {

  TweenMax.to('.myBtn', 1, {
    y: -100,
    opacity: 0
  });
  TweenMax.to("#screen", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 2
  });
  TweenMax.from(".overlay", 2, {
    ease: Power2.easeInOut
  });
  TweenMax.to(".overlay", 2, {
    delay: 2.6,
    top: "-130%",
    ease: Expo.easeInOut
  });
  TweenMax.to(".overlay-2", 2, {
    delay: 3,
    top: "-130%",
    ease: Expo.easeInOut
  });
  TweenMax.from(".container", 2, {
    y: 300,
    delay: 3.2,
    opacity: 0,
    ease: Power2.easeInOut
  });
  TweenMax.to(".container", 2, {
    opacity: 1,
    y: 0,
    delay: 3.2,
    ease: Power2.easeInOut
  });

  document.querySelector('.allall').classList.remove('allall');
  objectsw.run = 1;
};

setTimeout(function () {
  console.log('ok');
  var cod = objectsw.run;
}, 5200);

setTimeout(function () {
  document.querySelector('.body').setAttribute('id', 'white');
}, 17000);

/* python cool code
# Write your max_num function here:
def max_num(x, y, z):
if (x >= y) and (x >= z):
if (x == y) or (x == z):
return "It's a tie!"
return x
elif (y >= x) and (y >= z):
if (y == x) or (y == z):
return "It's a tie!"
return y
elif (z >= x) and (z >= y):
if (z == x) or (z == y):
return "It's a tie!"
return z
# Uncomment these function calls to test your max_num function:
print(max_num(-10, 0, 10))
# should print 10
print(max_num(-10, 5, -30))
# should print 5
print(max_num(-5, -10, -10))
# should print -5
print(max_num(2, 3, 3))
# should print "It's a tie!"
*/