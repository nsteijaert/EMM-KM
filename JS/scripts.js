//@author NJK
//This script contains custom functions used for utility purposes.

//This variable is used to control debug settings. The default value is 0 (false), this disables debug output to the JavaSCript console. Enable by changing the value to 1 (true)
var debug = 0;

//Global variables
var camera;
var vueScene;
var vueRenderer;
var controls;

//Initialize the visualization
//init();
//animate();

//This function initializes the visualization by calling the essential functions
function init() {
	initCamera();
	initRenderer();
	initControls();
	render();
}

//This function adds a camera to the 3D visualization in order to facilitate navigation
function initCamera() {
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 50000);

	//The position of the cameria
	camera.position.z = 0;
	camera.position.x = 0;
	camera.position.y = 0;

	//Creates a scene
	scene = new THREE.Scene();
}

//This function adds interactivity to the visualization by allowing it to be moved and zoomed in
function initControls() {
	controls = new THREE.TrackballControls(camera, renderer.domElement);
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;
	controls.noRotate = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.1;
	controls.target.set(550, -600, 0);

	controls.addEventListener('change', render);
	window.addEventListener('resize', onWindowResize, false);
}

//This function intializes the renderer, so it can draw scenes.
function initRenderer() {
	//Adds transparancy to the background to make sure a backgroundcolor can be set.
	renderer = new THREE.CSS3DRenderer({
		alpha : true
	});

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = 'absolute';
	document.getElementById('container').appendChild(renderer.domElement);

	renderer.setClearColor(0xFFFFFFF, 1);
}

//If the window has been resized, resize the elements along with it and render again.
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	vueRenderer.setSize(window.innerWidth, window.innerHeight);
	render();
}

//Animate the visualization, such as moving or zooming
function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	controls.update();
	render();
}

//Render the entirety of the visualiation and display it in the browser
function render() {
	renderer.render(scene, camera);
}

//This function is used to increment the progressbar of the intro page
function pb_set_state(state, text) {
	document.getElementById("bar_state").innerHTML = state;
	document.getElementById("bar_state").setAttribute("style", "width:" + state + ";");
	document.getElementById("state_info").innerHTML = text;

	var str = '';
	str = state.substring(0, state.length - 1);

	if (debug == 1) {
		console.log(state);
		console.log(text);
		console.log(str);
	}
	document.getElementById("bar_state").setAttribute("aria-valuenow", state);
}