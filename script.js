let pixelImage;

let section = document.querySelector('section');
let div = document.createElement('div');
let image = document.createElement('img');
image.src = `human.png`;
div.appendChild(image);
section.appendChild(div);

let canvas = document.querySelector('.human-img');
const ctx = canvas.getContext("2d");

let options = {
	rootMargin: '0px',
	threshold: 1.0
}

let callback = (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target.classList[0]);
            pixelImage.reveal();  // Use the single instance
        }
    });
});

let observer = new IntersectionObserver(callback, options);

class PixelImage {
    constructor(image, width, height) {
        this.image = image;
        this.styleWidth = width;
        this.styleHeight = height;
        this.width = width * window.devicePixelRatio;
        this.height = height * window.devicePixelRatio;
        this.percent = 0.001;
        this.applyCanvas();
        this.draw();
    }

    applyCanvas() {
        this.canvas = canvas;
        this.canvas.classList.add('pixelated-image');
        this.ctx = ctx;
        this.image.parentElement.appendChild(this.canvas);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = `${this.styleWidth}px`;
        this.canvas.style.height = `${this.styleHeight}px`;
        this.scaledWidth = this.width * this.percent;
        this.scaledHeight = this.height * this.percent;

        // Hide the original image
        this.image.style.display = 'none';

        // Disable image smoothing for pixelated effect
        this.ctx.imageSmoothingEnabled = false;

        observer.observe(this.canvas);
    }

    draw() {
        // Draw the scaled image
        this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
        this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
    }

    reveal() {
        this.canvas.classList.add('active');
        this.percent = this.percent < 0.1 ? this.percent + 0.002 : this.percent + 0.2;
        if (this.percent > 1) this.percent = 1;

        // Update scaled dimensions based on the current zoom level
        this.scaledWidth = this.width * this.percent;
        this.scaledHeight = this.height * this.percent;

        // Draw the scaled image
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Clear previous frame
        this.draw();

        // Overlay text and boxes
        this.addOverlay();

        if (this.percent < 1) requestAnimationFrame(this.reveal.bind(this));
    }

    addOverlay() {
        this.ctx.font = "900 30px Arial";
        this.ctx.fillStyle = "#000";
        this.ctx.setLineDash([3]);
        this.ctx.strokeRect(20, 70, 500, 500);
        this.ctx.fillText("TABLE OF CONTENTS", 50, 130);

        this.ctx.font = "25px Arial";
        this.ctx.fillText("I. MY COMPUTER’S EYES", 50, 180);
        this.ctx.fillText("II. MY COMPUTER’S HANDS", 50, 215);
        this.ctx.fillText("III. MY COMPUTER’S MOUTH", 50, 250);
        this.ctx.fillText("IV. MY COMPUTER’S SKIN", 50, 285);
        this.ctx.fillText("V. MY COMPUTER’S ROOTS", 50, 320);
        this.ctx.fillText("VI. BIBLIOGRAPHY", 50, 355);

        this.ctx.setLineDash([0]);
        this.ctx.strokeRect(50, 400, 250, 60);
        this.ctx.fillText("GAMES", 130, 440);
        
        this.ctx.strokeRect(50, 480, 250, 60);
        this.ctx.fillText("GADGETS", 120, 520);

        const overlayImage = new Image();
        overlayImage.src = 'audio_icon.png';
        overlayImage.onload = () => {this.ctx.drawImage(overlayImage, 350, 400, 130, 130);};

        ctx.beginPath();
        this.ctx.setLineDash([10]);
        ctx.moveTo(370, 170);
        ctx.lineTo(650, 170);
        ctx.lineTo(650, 110);
        ctx.lineTo(950, 110);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(410, 240);
        ctx.lineTo(840, 240);
        ctx.lineTo(840, 190);
        ctx.lineTo(900, 190);
        ctx.stroke();


    }
}

canvas.addEventListener('click', (e) => {
    const rectBounds = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rectBounds.left;
    const mouseY = event.clientY - rectBounds.top;
    console.log("outbounds clicked");

    // GAMES CLICKED
    if (
        mouseX >= 25 &&
        mouseX <= 150 &&
        mouseY >= 200 &&
        mouseY <= 230
    ) {
        console.log("GAMES CLICKED");
    }

    //GADGETS CLICKED
    if (
        mouseX >= 25 &&
        mouseX <= 150 &&
        mouseY >= 240 &&
        mouseY <= 270
    ) {
        console.log("GADGETS CLICKED!");
    }

    //AUDIO CLICKED
    if (
        mouseX >= 170 &&
        mouseX <= 250 &&
        mouseY >= 200 &&
        mouseY <= 270
    ) {
        console.log("AUDIO CLICKED!");
    }

 });


function generatePixelImage() {
    let image = document.querySelector('img');
    let { width, height } = image.getBoundingClientRect();
    pixelImage = new PixelImage(image, 750, 570);
}

setTimeout(() => {
    generatePixelImage();
}, 100);

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    const rectBounds = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rectBounds.left;
    const mouseY = event.clientY - rectBounds.top;
    console.log("moving!: " + mouseX + " " + mouseY);
});

//TITLE ANIMATION

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".animated-text");
    const text = textElement.textContent;
    textElement.innerHTML = ""; // Clear original text

    // Wrap each letter in a span to control individual styling
    [...text].forEach(char => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces
        textElement.appendChild(span);
    });

    // Function to animate each letter sequentially
    function animateText() {
        textElement.querySelectorAll("span").forEach((span, index) => {
            setTimeout(() => {
                span.classList.add("be-bold");

                // Remove the class after animation for reusability
                setTimeout(() => {
                    span.classList.remove("be-bold");
                }, 400); // Matches the font-weight transition duration
            }, index * 100); // Delay each letter by 100ms
        });
    }

    // Run the animation every 3 seconds
    setInterval(animateText, 3000);
});





// function sparkle() {
// 	var c;
// 	if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
// 		ox=x;
// 		oy=y;
// 		for (c=0; c<sparkles; c++) if (!starv[c]) {
// 			star[c].style.left=(starx[c]=x)+"px";
// 			star[c].style.top=(stary[c]=y+1)+"px";
// 			star[c].style.clip="rect(0px, 5px, 5px, 0px)";
// 			star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
// 			star[c].style.visibility="visible";
// 			starv[c]=50;
// 			break;
// 		}
// 	}
// 	for (c=0; c<sparkles; c++) {
// 		if (starv[c]) update_star(c);
// 		if (tinyv[c]) update_tiny(c);
// 	}
// 	setTimeout("sparkle()", 40);
// }


// document.onmousemove=mouse;
// function mouse(e) {
// 	if (e) {
// 		y=e.pageY;
// 		x=e.pageX;
// 	}
// 	else {
// 		set_scroll();
// 		y=event.y+sdown;
// 		x=event.x+sleft;
// 	}
// }




// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// const particles = [];

// const img = new Image();
// img.src = '3.jpg';

// const PARTICLE_DIAMETER = 2;

// let mouseX = Infinity;
// let mouseY = Infinity;

// let animationId;

// function clearParticles() {
// 	cancelAnimationFrame(animationId);
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	particles.length = 0; 
// 	console.log("Particles cleared");
// }

// img.addEventListener('load', () => {
// 	canvas.width = img.width;
// 	canvas.height = img.height;

// 	ctx.drawImage(img, 0, 0);
// 	const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

// 	const numRows = Math.round(img.height / PARTICLE_DIAMETER);
// 	const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

// 	for(let row = 0; row < numRows; row++){
// 		for(let column = 0; column < numColumns; column++){
// 			const pixelIndex = (row * PARTICLE_DIAMETER * img.width + column *PARTICLE_DIAMETER) * 4;

// 			const red = imageData[pixelIndex];
// 			const green = imageData[pixelIndex + 1];
// 			const blue = imageData[pixelIndex + 2];
// 			const alpha = imageData[pixelIndex + 3];

// 			particles.push({
// 				x: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
// 				y: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
// 				originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
// 				originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
// 				color: `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`,
// 			});
// 		}
// 	}

// 	drawParticles();
// });


// function drawParticles(){
// 	updateParticles();
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	particles.forEach((particle) => {
// 		ctx.beginPath();
// 		ctx.arc(particle.x, particle.y, PARTICLE_DIAMETER / 2, 0, 2 * Math.PI);
// 		ctx.fillStyle = particle.color;
// 		ctx.fill();
// 	});
// 	animationId = requestAnimationFrame(drawParticles);
// }

// canvas.addEventListener('mousemove', (event) => {
// 	mouseX = event.offsetX;
// 	mouseY = event.offsetY;
// 	console.log(getDistance(100, 100, event)); 
// })

// canvas.addEventListener('mouseleave', (event) => {
// 	mouseX = Infinity;
// 	mouseY = Infinity;
// })

// canvas.addEventListener('click', (event) => {
// 	clearParticles();
// 	img.src = 'img.jpg';
// })

// function updateParticles(){
// 	let REPEL_RADIUS = 20;
// 	const REPEL_SPEED = 0.9;
// 	const RETURN_SPEED = 1.5;
// 	particles.forEach((particle) => {
// 		const distanceFromMouseX = mouseX - particle.x;
// 		const distanceFromMouseY = mouseY - particle.y;
// 		const distanceFromMouse = Math.sqrt(distanceFromMouseX ** 2 + distanceFromMouseY ** 2);

// 		if(distanceFromMouse < REPEL_RADIUS){
// 			const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
// 			const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;
// 			const moveX = Math.cos(angle) * force * REPEL_SPEED;
// 			const moveY = Math.sin(angle) * force * REPEL_SPEED;
// 			particle.x -= moveX;
// 			particle.y -= moveY;


// 			setTimeout(() => {
// 			    const distanceFromOriginX = particle.originX - particle.x;
// 				const distanceFromOriginY = particle.originY - particle.y;
// 				const distanceFromOrigin = Math.sqrt(distanceFromOriginX ** 2 + distanceFromOriginY ** 2);
				
// 				const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
// 				const moveX = Math.cos(angle) * distanceFromOrigin * RETURN_SPEED;
// 				const moveY = Math.sin(angle) * distanceFromOrigin * RETURN_SPEED;

// 				particle.x += moveX;
// 				particle.y += moveY;
		    
// 		  	}, 250);


// 		} 
// 		else if(particle.x !== particle.originX || particle.y !== particle.originY){
// 			const distanceFromOriginX = particle.originX - particle.x;
// 			const distanceFromOriginY = particle.originY - particle.y;
// 			const distanceFromOrigin = Math.sqrt(distanceFromOriginX ** 2 + distanceFromOriginY ** 2);
			
// 			const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
// 			const moveX = Math.cos(angle) * distanceFromOrigin * RETURN_SPEED;
// 			const moveY = Math.sin(angle) * distanceFromOrigin * RETURN_SPEED;

// 			particle.x += moveX;
// 			particle.y += moveY;
// 		}
// 	});
// }


// function getCanvasRelativeMouse(event) {
//   const rect = canvas.getBoundingClientRect();
//   const mouseX = event.clientX - rect.left;
//   const mouseY = event.clientY - rect.top;
//   return { mouseX, mouseY };
// }

// function getDistance(x1, y1, event) {
//   const { mouseX, mouseY } = getCanvasRelativeMouse(event);
//   const xDiff = mouseX - x1;
//   const yDiff = mouseY - y1;
//   return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
// }

