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

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log('words: ', storyWords.length);

let betterWords = storyWords.filter(val => {
    if (unnecessaryWords.includes(val)) {
      return;
    } else {
      return (val);
    };
});

let over = {
  'really': 0,
  'very': 0,
  'basically': 0,
};

storyWords.forEach((val) => {
  if (overusedWords.includes(val)) {
    over[val]++
  } else {
    return;
  }
});

console.log('really: ', over.really);
console.log('very: ', over.very);
console.log('basically: ', over.basically);

let sentences = {
  sentencess: 0,
};

storyWords.forEach(val => {
  let vall = val.length - 1;
  if (val[vall] === ('.' || '!')) {
    sentences.sentencess++;
  } else {
    return;
  }
});

console.log('sentences: ', sentences.sentencess);

console.log(betterWords.join(' '))
