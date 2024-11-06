let konvaContainer = document.querySelector('.konva');
konvaContainer.id = 'konvaContainer';

const stage = new Konva.Stage({
  container: 'konvaContainer',
  width: 770,
  height: 570
});

const layer = new Konva.Layer();
stage.add(layer);

const border = new Konva.Rect({
  x: 0,
  y: 0,
  width: stage.width(),
  height: stage.height(),
  // stroke: '#000',
  // strokeWidth: 1, 
  listening: false
});
layer.add(border);


// PIXELATED IMAGE ------------------
var imageObj = new Image();
imageObj.onload = function () {
    var human = new Konva.Image({
        x: 250,
        y: 30,
        image: imageObj,
        width: 500,
        height: 520,
        listening: false
    });

    // Apply the pixelate filter and cache the image
    human.cache();
    human.filters([Konva.Filters.Pixelate]);
    human.pixelSize(50); // Start with a clear image

    layer.add(human);
    layer.draw();

    const animationDuration = 1500; // Duration for pixelation effect in and out (2 seconds)
    const holdClearDuration = 5000; // Duration to hold clear (5 seconds)
    const holdPixelatedDuration = 100; // Duration to hold pixelated (2 seconds)

    // Function to animate pixelation in or out
    function animatePixelation(increasing) {
        return new Promise((resolve) => {
            const startPixelSize = increasing ? 1 : 50;
            const endPixelSize = increasing ? 50 : 1;

            const animation = new Konva.Animation((frame) => {
                if (!frame) return;

                const progress = frame.time / animationDuration;
                const pixelSize = startPixelSize + (endPixelSize - startPixelSize) * progress;

                human.pixelSize(pixelSize);
                layer.batchDraw();

                // Stop the animation once the target pixel size is reached
                if (progress >= 1) {
                    animation.stop();
                    resolve();
                }
            }, layer);

            animation.start();
        });
    }

    // Main function to manage the pixelation cycle
    async function startPixelationCycle() {
        // Initial step: Start pixelated, then depixelate
        await animatePixelation(false); // Gradually clear

        while (true) {
            // Hold clear state for 5 seconds
            await new Promise((resolve) => setTimeout(resolve, holdClearDuration));

            // Gradually pixelate
            await animatePixelation(true);

            // Hold in the pixelated state for 2 seconds
            await new Promise((resolve) => setTimeout(resolve, holdPixelatedDuration));

            // Gradually depixelate
            await animatePixelation(false);
        }
    }

    // Start the pixelation cycle
    startPixelationCycle();
};
imageObj.src = 'human.png';


// TABLE OF CONTENTS CHAPTERS ------------------

var rectangleGroup = new Konva.Group({
    x: 25,
    y: 45,
});

rectangleGroup.add(new Konva.Rect({
    width: 220,
    height: 240,
    stroke: '#000',
    strokeWidth: 1,
    dash: [5, 3],
}));

rectangleGroup.add(new Konva.Text({
    text: 'TABLE OF CONTENTS',
    fontSize: 17,
    fontFamily: 'Arial',
    fontStyle: 'bold',
    fill: '#000',
    width: 250,
    padding: 5,
    align: 'left',
    x: 10,
    y: 10
}));


//C1 ---------------

var c1 = new Konva.Text({
    text: 'I. MY COMPUTER’S EYES',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 210,
    padding: 5,
    align: 'left',
    x: 10,
    y: 45
});
rectangleGroup.add(c1);

c1.on('mouseenter', () => {
    c1.fill('#555');          // Change text color on hover
    c1.fontStyle('bold');      // Make text bold on hover
    layer.batchDraw();           // Redraw layer to apply changes
});

c1.on('mouseleave', () => {
    c1.fill('#000');           // Reset text color
    c1.fontStyle('normal');    // Reset font style
    layer.batchDraw();           // Redraw layer to apply changes
});


//C2 ---------------

var c2 = new Konva.Text({
    text: 'II. MY COMPUTER’S HANDS',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 210,
    padding: 5,
    align: 'left',
    x: 10,
    y: 63
});
rectangleGroup.add(c2);

c2.on('mouseenter', () => {
    c2.fill('#555');          // Change text color on hover
    c2.fontStyle('bold');      // Make text bold on hover
    layer.batchDraw();           // Redraw layer to apply changes
});

c2.on('mouseleave', () => {
    c2.fill('#000');           // Reset text color
    c2.fontStyle('normal');    // Reset font style
    layer.batchDraw();           // Redraw layer to apply changes
});


//C3 ---------------

var c3 = new Konva.Text({
    text: 'III. MY COMPUTERS MOUTH',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 210,
    padding: 5,
    align: 'left',
    x: 10,
    y: 81
});
rectangleGroup.add(c3);

c3.on('mouseenter', () => {
    c3.fill('#555');          // Change text color on hover
    c3.fontStyle('bold');      // Make text bold on hover
    layer.batchDraw();           // Redraw layer to apply changes
});

c3.on('mouseleave', () => {
    c3.fill('#000');           // Reset text color
    c3.fontStyle('normal');    // Reset font style
    layer.batchDraw();           // Redraw layer to apply changes
});


//C4 ---------------

var c4 = new Konva.Text({
    text: 'IV. MY COMPUTER’S SKIN',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 210,
    padding: 5,
    align: 'left',
    x: 10,
    y: 98
});
rectangleGroup.add(c4);

c4.on('mouseenter', () => {
    c4.fill('#555');          // Change text color on hover
    c4.fontStyle('bold');      // Make text bold on hover
    layer.batchDraw();           // Redraw layer to apply changes
});

c4.on('mouseleave', () => {
    c4.fill('#000');           // Reset text color
    c4.fontStyle('normal');    // Reset font style
    layer.batchDraw();           // Redraw layer to apply changes
});


//C5 ---------------

var c5 = new Konva.Text({
    text: 'V. MY COMPUTER’S ROOTS',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 210,
    padding: 5,
    align: 'left',
    x: 10,
    y: 115
});
rectangleGroup.add(c5);

c5.on('mouseenter', () => {
    c5.fill('#555');          // Change text color on hover
    c5.fontStyle('bold');      // Make text bold on hover
    layer.batchDraw();           // Redraw layer to apply changes
});

c5.on('mouseleave', () => {
    c5.fill('#000');           // Reset text color
    c5.fontStyle('normal');    // Reset font style
    layer.batchDraw();           // Redraw layer to apply changes
});


//C6 ---------------

var c6 = new Konva.Text({
    text: 'VI. BIBLIOGRAPHY',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 210,
    padding: 5,
    align: 'left',
    x: 10,
    y: 133
});
rectangleGroup.add(c6);

c6.on('mouseenter', () => {
    c6.fill('#555');          // Change text color on hover
    c6.fontStyle('bold');      // Make text bold on hover
    layer.batchDraw();           // Redraw layer to apply changes
});

c6.on('mouseleave', () => {
    c6.fill('#000');           // Reset text color
    c6.fontStyle('normal');    // Reset font style
    layer.batchDraw();           // Redraw layer to apply changes
});

// TABLE OF CONTENTS BUTTONS ------------------

let games = new Konva.Rect({
    width: 100,
    height: 25,
    stroke: '#000',
    strokeWidth: 1,
    x: 15,
    y: 165
});

var games_t = new Konva.Text({
    text: 'GAMES',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 330,
    padding: 5,
    align: 'left',
    x: 36,
    y: 167
});
rectangleGroup.add(games_t);
rectangleGroup.add(games);

let gadgets = new Konva.Rect({
    width: 100,
    height: 25,
    stroke: '#000',
    strokeWidth: 1,
    x: 15,
    y: 195
});
var gadgets_t = new Konva.Text({
    text: 'GADGETS',
    fontSize: 13,
    fontFamily: 'Arial',
    fill: '#000',
    width: 330,
    padding: 5,
    align: 'left',
    x: 30,
    y: 197
});
rectangleGroup.add(gadgets);
rectangleGroup.add(gadgets_t);


//AUDIO BUTTON -----------------

var audioIcon = new Image();
audioIcon.onload = function () {
    var yoda = new Konva.Image({
        x: 195,
        y: 235,
        image: audioIcon,
        width: 65,
        height: 65,
        offsetX: 32.5,
        offsetY: 32.5
    });

    layer.add(yoda);
    stage.add(layer);

    const rotationAnimation = new Konva.Animation((frame) => {
        if (frame) {yoda.rotation((yoda.rotation() + 3) % 360);}
    }, layer);

    yoda.on('mouseenter', () => {rotationAnimation.start();});
    yoda.on('mouseleave', () => {rotationAnimation.stop();});
};
audioIcon.src = 'audio_icon.png';


// SVG PATHS --------------------

// DIAGRAM LINES ------------ 

const paths = {
  eyes: new Konva.Path({
    x: 205,
    y: 85,
    data: 'M 0,9.75 L 97.84,9.75 L 97.84,0.25 L 159.45,0.25',  // Sample line data, modify as needed
    stroke: 'black',
    strokeWidth: 0.5,
    dash: [1, 2],
    scaleX: 2,
    scaleY: 1.7,
    visible: false,  // Start hidden
  }),
  hands: new Konva.Path({
    x: 220,
    y: 117,
    data: 'M 0,0.25 L 64.7,0.25 L 64.7,105.25 L 91.33,105.25',
    stroke: 'black',
    strokeWidth: 0.5,
    dash: [1, 2],
    scaleX: 1.7,
    scaleY: 1.7,
    visible: false,
  }),
  mouth: new Konva.Path({
    x: 220,
    y: 115,
    data: 'M 0,9.25 L 107,9.25 L 107,0.25 L 127,0.25',
    stroke: 'black',
    strokeWidth: 0.3,
    dash: [1, 2],
    scaleX: 2,
    scaleY: 2.3,
    visible: false,
  }),
  skin: new Konva.Path({
    x: 210,
    y: 153,
    data: 'M 0,0.25 L 101,0.25 L 101,35.75 L 126,35.75',
    stroke: 'black',
    strokeWidth: 0.5,
    dash: [1, 2],
    scaleX: 1.7,
    scaleY: 1.7,
    visible: false,
  }),
  roots: new Konva.Path({
    x: 220,
    y: 170,
    data: 'M 0,0.25 L 42,0.25 L 42,175.14',
    stroke: 'black',
    strokeWidth: 0.5,
    dash: [1, 2],
    scaleX: 2,
    scaleY: 2,
    visible: false,
  }),
};

Object.values(paths).forEach(path => layer.add(path));
layer.draw();

// Function to show or hide a line based on parameters
function toggleLine(lineName, action) {
  const path = paths[lineName];
  
  if (!path) {
    console.error(`Line "${lineName}" does not exist.`);
    return;
  }

  if (action === 'show') {
    path.show();  // Set visibility to true
  } else if (action === 'hide') {
    path.hide();  // Set visibility to false
  } else {
    console.error("Invalid action. Use 'show' or 'hide'.");
  }

  layer.batchDraw();  // Redraw the layer to apply changes
}

// EYES -------
var eyes_path = new Konva.Path({
    x: 508,
    y: 47,
    data: 'M 0.5,28.55 L 0.5,41.03 L 30.5,40.55 L 35.5,66.55 L 43.5,69.55 L 51.5,58.55 L 51.5,40.22 L 67.5,26.55 L 60.5,9.55 L 44.5,0.55 L 20.5,9.55 L 12.5,24.55 L 0.5,28.55 Z', 
    // fill: 'green',  // Original fill color
    scaleX: 1,
    scaleY: 1,
    hitStrokeWidth: 10 // Ensure the path has a wide area for detection
});

eyes_path.on('mouseenter', () => {
    eyes_path.moveToTop(); // Move path to top of stack
    // eyes_path.fill('#555'); // Change fill on hover
    layer.batchDraw(); // Redraw layer

    c1.align('right');

    toggleLine('eyes', 'show');  // Shows line1
    toggleLine('hands', 'hide');  // Shows line1
    toggleLine('mouth', 'hide');  // Shows line1
    toggleLine('skin', 'hide');  // Shows line5
    toggleLine('roots', 'hide');  // Shows line5

});

eyes_path.on('mouseleave', () => {
    // eyes_path.fill('green'); // Reset fill on mouse leave
    layer.batchDraw(); // Redraw layer
});
layer.add(eyes_path);
layer.batchDraw();

// HAND 1 ------
var hand1_path = new Konva.Path({
    x: 380,
    y: 275,
    data: 'M 27.96,0.61 L 54.68,13.11 L 44.96,60.61 L 21.96,63.61 L 0.63,32.11 L 27.96,0.61 Z',
    // fill: 'green',  // Original fill color
    scaleX: 1,
    scaleY: 1,
    hitStrokeWidth: 10 // Ensure the path has a wide area for detection
});

hand1_path.on('mouseenter', () => {
    hand1_path.moveToTop(); // Move path to top of stack
    // hand1_path.fill('#555'); // Change fill on hover
    layer.batchDraw(); // Redraw layer

    toggleLine('eyes', 'hide');  // Shows line1
    toggleLine('hands', 'show');  // Shows line1
    toggleLine('mouth', 'hide');  // Shows line1
    toggleLine('skin', 'hide');  // Shows line5
    toggleLine('roots', 'hide');  // Shows line5
});

hand1_path.on('mouseleave', () => {
    // hand1_path.fill('green'); // Reset fill on mouse leave
    layer.batchDraw(); // Redraw layer
});
layer.add(hand1_path);
layer.batchDraw();

// HAND 2 ------
var hand2_path = new Konva.Path({
    x: 590,
    y: 275,
    data: 'M 1.52,19.59 L 33.52,0.59 L 47.12,10.09 L 84.63,19.59 L 84.63,69.09 L 60.52,98.59 L 9.52,80.59 L 18.52,58.59 L 11.52,41.59 L 0.52,39.59 L 1.52,19.59 Z',
    // fill: 'green',  // Original fill color
    scaleX: 1,
    scaleY: 1,
    hitStrokeWidth: 10 // Ensure the path has a wide area for detection
});

hand2_path.on('mouseenter', () => {
    hand2_path.moveToTop(); // Move path to top of stack
    // hand2_path.fill('#555'); // Change fill on hover
    layer.batchDraw(); // Redraw layer
    toggleLine('eyes', 'hide');  // Shows line1
    toggleLine('hands', 'show');  // Shows line1
    toggleLine('mouth', 'hide');  // Shows line1
    toggleLine('skin', 'hide');  // Shows line5
    toggleLine('roots', 'hide');  // Shows line5
});

hand2_path.on('mouseleave', () => {
    // hand2_path.fill('green'); // Reset fill on mouse leave
    layer.batchDraw(); // Redraw layer
});
layer.add(hand2_path);
layer.batchDraw();


// MOUTH ------
var mouth_path = new Konva.Path({
    x: 460,
    y: 90,
    data: 'M 16.5,0.66 L 0.5,13.66 L 0.5,25.06 L 9.5,38.66 L 16.5,36 L 30.5,24.66 L 45.5,39.66 L 44.5,101.66 L 27.5,119.66 L 23,128.23 L 23,150.73 L 27.5,159.66 L 48.5,165.66 L 67.5,167.66 L 83.5,165.66 L 81.5,146.66 L 70.5,138.66 L 67.5,143.66 L 58.5,145.66 L 42,136.95 L 43.5,125.66 L 56.5,117.66 L 61.5,108.66 L 63.5,91.66 L 60.5,64.66 L 57.5,43.66 L 61.5,33.66 L 56.5,19.66 L 33.5,16.66 L 16.5,0.66 Z',
    // fill: 'green',  // Original fill color
    scaleX: 1.1,
    scaleY: 1.1,
    hitStrokeWidth: 10 // Ensure the path has a wide area for detection
});

mouth_path.on('mouseenter', () => {
    mouth_path.moveToTop(); // Move path to top of stack
    // mouth_path.fill('#555'); // Change fill on hover
    layer.batchDraw(); // Redraw layer
    toggleLine('eyes', 'hide');  // Shows line1
    toggleLine('hands', 'hide');  // Shows line1
    toggleLine('mouth', 'show');  // Shows line1
    toggleLine('skin', 'hide');  // Shows line5
    toggleLine('roots', 'hide');  // Shows line5
});

mouth_path.on('mouseleave', () => {
    // mouth_path.fill('green'); // Reset fill on mouse leave
    layer.batchDraw(); // Redraw layer
});
layer.add(mouth_path);
layer.batchDraw();


// SKIN ------
var skin_path = new Konva.Path({
    x: 420,
    y: 40,
    data: 'M 22.13,152.02 L 0.63,211.52 L 16.63,218.52 L 25.63,221.52 L 47.63,175.52 L 34.63,248.52 L 53.63,316.52 L 48.63,369.52 L 119.41,369.52 L 116.63,322.52 L 135.63,237.52 L 130.63,200.52 L 145.82,227.02 L 175.63,209.52 L 159.63,159.52 L 157.23,152.02 L 157.63,127.52 L 157.63,93.52 L 130.63,71.52 L 121.63,81.52 L 110.63,79.52 L 109.42,71.52 L 107.63,62.52 L 107.63,54.52 L 74.88,54.52 L 74.88,36.45 L 87.63,32.52 L 95.63,18.52 L 116.63,10.52 L 93.63,0.52 L 67.63,6.52 L 59.63,22.52 L 59.63,37.52 L 59.63,52.52 L 73.58,64.99 L 95.63,66.52 L 100.63,84.52 L 96.63,96.52 L 100.63,118.52 L 102.63,142.52 L 101.63,158.52 L 95.63,169.52 L 83.63,177.52 L 82.31,185.02 L 94.63,193.52 L 102.63,191.52 L 106.57,185.02 L 120.63,194.52 L 122.63,217.52 L 108.63,220.52 L 83.63,218.52 L 62.63,213.52 L 57.63,201.52 L 56.63,176.52 L 67.63,161.52 L 78.63,151.52 L 80.63,130.52 L 80.63,91.52 L 74.88,84.26 L 68.63,77.52 L 53.63,89.52 L 44.63,91.52 L 36.63,78.52 L 25.63,86.52 L 22.63,110.52 L 22.13,152.02 Z',
    // fill: 'green',  // Original fill color
    scaleX: 1.1,
    scaleY: 1.1,
    hitStrokeWidth: 10 // Ensure the path has a wide area for detection
});

skin_path.on('mouseenter', () => {
    skin_path.moveToTop(); // Move path to top of stack
    // skin_path.fill('#555'); // Change fill on hover
    layer.batchDraw(); // Redraw layer
    toggleLine('eyes', 'hide');  // Shows line1
    toggleLine('hands', 'hide');  // Shows line1
    toggleLine('mouth', 'hide');  // Shows line1
    toggleLine('skin', 'show');  // Shows line5
    toggleLine('roots', 'hide');  // Shows line5
});

skin_path.on('mouseleave', () => {
    // skin_path.fill('green'); // Reset fill on mouse leave
    layer.batchDraw(); // Redraw layer
});
layer.add(skin_path);
layer.batchDraw();


// ROOTS ------
var roots_path = new Konva.Path({
    x: 280,
    y: 450,
    data:'M 1.4,80.15 L 98.9,0.5 L 350.84,0.5 L 418.31,80.15 L 1.4,80.15 Z',
    // fill: 'green',  // Original fill color
    scaleX: 1.1,
    scaleY: 1.1,
    hitStrokeWidth: 10 // Ensure the path has a wide area for detection
});

roots_path.on('mouseenter', () => {
    roots_path.moveToTop(); // Move path to top of stack
    // roots_path.fill('#555'); // Change fill on hover
    layer.batchDraw(); // Redraw layer
    toggleLine('eyes', 'hide');  // Shows line1
    toggleLine('hands', 'hide');  // Shows line1
    toggleLine('mouth', 'hide');  // Shows line1
    toggleLine('skin', 'hide');  // Shows line5
    toggleLine('roots', 'show');  // Shows line5
});

roots_path.on('mouseleave', () => {
    // roots_path.fill('green'); // Reset fill on mouse leave
    layer.batchDraw(); // Redraw layer
});
layer.add(roots_path);
layer.batchDraw();

// ADD IT ALL
layer.add(rectangleGroup);
stage.add(layer);
stage.add(layer);
layer.draw();
// END KONVA ELEMENTS --------------------------


