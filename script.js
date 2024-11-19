
// $(document).ready(function() {
//     const canvas = document.getElementById('trailCanvas');
//     const ctx = canvas.getContext('2d');

//     function resizeCanvas() {
//         canvas.width = document.documentElement.scrollWidth;
//         canvas.height = document.documentElement.scrollHeight;
//     }
//     resizeCanvas();

//     let lastX = -1;
//     let lastY = -1;

//     function drawStar(x, y, size) {
//         ctx.beginPath();
//         ctx.arc(x, y, size, 0, Math.PI * 2, false);
//         ctx.fillStyle = 'rgba(241, 243, 255, 0.9)'; 
//         ctx.shadowColor = 'rgba(255, 255, 255, 0.6)'; 
//         ctx.shadowBlur = size * 2; 
//         ctx.fill();
//     }

//     $(document).mousemove(function(event) {
//         const x = event.clientX + window.scrollX;
//         const y = event.clientY + window.scrollY;

//         if (lastX !== -1 && lastY !== -1) {
//             const dx = x - lastX;
//             const dy = y - lastY;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             const numStars = Math.min(Math.ceil(distance / 250), 5);

//             for (let i = 0; i < numStars; i++) {
//                 const size = Math.random() * 3 + 1; 
//                 const offsetX = (Math.random() - 0.5) * size * 2; 
//                 const offsetY = (Math.random() - 0.5) * size * 2;
//                 drawStar(lastX + offsetX, lastY + offsetY, size); 
//             }
//         }

//         lastX = x;
//         lastY = y;

//         const scrollSpeed = 0.8; // Adjust scroll speed as needed
//         if (event.clientX < 500) window.scrollBy(-scrollSpeed, 0); // Scroll left
//         if (event.clientX > window.innerWidth - 500) window.scrollBy(scrollSpeed, 0); // Scroll right
//         if (event.clientY < 500) window.scrollBy(0, -scrollSpeed); // Scroll up
//         if (event.clientY > window.innerHeight - 500) window.scrollBy(0, scrollSpeed); // Scroll down
//     });

//     // Reset lastX and lastY when the mouse leaves the window
//     $(window).mouseleave(function() {
//         lastX = -1;
//         lastY = -1;
//     });

//     // Resize canvas if the window is resized to keep up with document size
//     $(window).resize(function() {
//         resizeCanvas();
//     });
// });

$(document).ready(function() {
    const canvas = document.getElementById('trailCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = document.documentElement.scrollWidth;
        canvas.height = document.documentElement.scrollHeight;
    }
    resizeCanvas();

    let lastX = -1;
    let lastY = -1;

    function drawOval(x, y, size) {
        const width = size * (Math.random() * 0.5 + 1); // Randomize oval width
        const height = size * (Math.random() * 0.3 + 0.7); // Randomize oval height
        
        ctx.beginPath();
        ctx.ellipse(x, y, width, height, Math.PI / 4, 0, Math.PI * 2); // Oval shape with slight rotation
        ctx.fillStyle = 'rgba(200, 220, 255, 0.9)'; // Whitish-baby blue color
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = size * 2;
        ctx.fill();
    }

    $(document).mousemove(function(event) {
        const x = event.clientX + window.scrollX;
        const y = event.clientY + window.scrollY;

        if (lastX !== -1 && lastY !== -1) {
            const dx = x - lastX;
            const dy = y - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const numOvals = Math.min(Math.ceil(distance / 250), 5);

            for (let i = 0; i < numOvals; i++) {
                const size = Math.random() * 3 + 1;
                const offsetX = (Math.random() - 0.5) * size * 2;
                const offsetY = (Math.random() - 0.5) * size * 2;
                drawOval(lastX + offsetX, lastY + offsetY, size);
            }
        }

        lastX = x;
        lastY = y;

        const scrollSpeed = 0.8; // Adjust scroll speed as needed
        if (event.clientX < 500) window.scrollBy(-scrollSpeed, 0); // Scroll left
        if (event.clientX > window.innerWidth - 500) window.scrollBy(scrollSpeed, 0); // Scroll right
        if (event.clientY < 500) window.scrollBy(0, -scrollSpeed); // Scroll up
        if (event.clientY > window.innerHeight - 500) window.scrollBy(0, scrollSpeed); // Scroll down
    });

    $(window).mouseleave(function() {
        lastX = -1;
        lastY = -1;
    });

    $(window).resize(function() {
        resizeCanvas();
    });
});

$(document).ready(function() {
    $('.title, .info1, .info2, .info3, .info4, .info5, .info6').hover(function() {
        // On hover, add the corresponding '-hovered' class
        $(this).addClass($(this).attr('class') + '-hovered');
    });
});

