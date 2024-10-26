document.addEventListener('DOMContentLoaded', function () {
    VANTA.NET({
        el: "#particles-js",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x29d465, // Bright green color for particles
        backgroundColor: 0x1a222c, // Dark background color
        points: 15.00, // Adjusts the number of nodes (particles)
        maxDistance: 20.00, // Adjusts the distance between particles
        spacing: 15.00 // Adjusts the spacing between particles
    });
});
