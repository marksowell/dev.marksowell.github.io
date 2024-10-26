
        // Get the particles-js element
        const container = document.getElementById('particles-js');

        // Setup scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement); // Append the canvas to the #particles-js element

        // Create particle geometry and material
        const particleCount = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3); // x, y, z for each particle
        const colors = new Float32Array(particleCount * 3); // r, g, b for each particle

        // Raycaster for detecting clicks
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        for (let i = 0; i < particleCount * 3; i += 3) {
            // Randomize particle positions
            positions[i] = (Math.random() - 0.5) * 1000; // x
            positions[i + 1] = (Math.random() - 0.5) * 1000; // y
            positions[i + 2] = (Math.random() - 0.5) * 1000; // z

            // Set initial particle color (greenish)
            colors[i] = 0.16; // r
            colors[i + 1] = 0.83; // g
            colors[i + 2] = 0.39; // b
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Create particle material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true, // Use vertex colors
            transparent: true,
            opacity: 0.8
        });

        // Create particle system
        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleSystem);

        // Position the camera
        camera.position.z = 500;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            // Rotate particle system for visual effect
            particleSystem.rotation.x += 0.001;
            particleSystem.rotation.y += 0.001;

            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        window.addEventListener('resize', function() {
            const width = container.clientWidth;
            const height = container.clientHeight;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        // Handle mouse click / touch interaction
        window.addEventListener('click', onClick, false); // For desktop
        window.addEventListener('touchstart', onClick, false); // For mobile

        function onClick(event) {
            // Update mouse coordinates
            mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;

            // Raycasting
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(particleSystem);

            if (intersects.length > 0) {
                // Change particle color on click
                const intersect = intersects[0];
                const faceIndex = intersect.index; // Index of the clicked particle
                colors[faceIndex * 3] = Math.random(); // Randomize r
                colors[faceIndex * 3 + 1] = Math.random(); // Randomize g
                colors[faceIndex * 3 + 2] = Math.random(); // Randomize b

                particlesGeometry.attributes.color.needsUpdate = true; // Update colors
            }
        }