TweenMax.to('.divd', 1, {
  opacity: 1,
});
TweenMax.to('#screen', 1, {
  opacity: 1,
});

let objectsw = {
  'run': 0,
}

const fadeOut = () => {

  TweenMax.to('.myBtn', 1, {
    y: -100,
    opacity: 0,
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

  document.querySelector('.allall').classList.remove('allall')
  objectsw.run = 1;
}

setTimeout(() => {
    console.log('ok');
    let cod = objectsw.run;
  }, 5200);

  setTimeout(() => {
      document.querySelector('.body').setAttribute('id', 'white');
    }, 17000);

    /* let arrr = ['test1', 'test2', 'test3']

    for (let i = 0; i < arrr.length; i++) {
      let
    } */

    /* let test = 'test';

    export {test}; */
