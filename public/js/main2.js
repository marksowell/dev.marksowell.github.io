document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});
    tsParticles.load("particles-js", {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: true,
                    value_area: 500,
                },
            },
            color: {
                value: "#29d465",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                },
            },
            links: {
                enable: true,
                distance: 150,
                color: "#29d465",
                opacity: 0.25,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onHover: {
                    enable: false,
                },
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3,
                },
                repulse: {
                    distance: 400,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
            },
        },
        detectRetina: true,
    });
});