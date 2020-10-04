function splitScroll() {
    var w = window.innerWidth;

    if (w < 769) {
        return;
    }

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '600%',
        triggerElement: '.skills-title',
        triggerHook: 0,
    })
        .setPin('.skills-title')
        .addTo(controller);
}

splitScroll();