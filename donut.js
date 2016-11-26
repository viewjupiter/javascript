<body></body>
<script src="http://gamingJS.com/Three.js"></script>
<script src="http://gamingJS.com/ChromeFixes.js"></script>
<script>
  // This is where stuff in our game will happen:
  var scene = new THREE.Scene();

  // This is what sees the stuff:
  var aspect_ratio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
  camera.position.z = 500;
  scene.add(camera);

  // This will draw what the camera sees onto the screen:
  var renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // ******** START CODING ON THE NEXT LINE ********
 var shape = new THREE.PlaneGeometry(300, 100);
 var cover = new THREE.MeshNormalMaterial();
 var ground = new THREE.Mesh(shape, cover);
 scene.add(ground);
 ground.position.set(-250, 250, -250);
 var shape = new THREE.TorusGeometry(100, 20, 8, 25);
 var cover = new THREE.MeshNormalMaterial();
 var donut = new THREE.Mesh(shape, cover);
 scene.add(donut);
 // Now, show what the camera sees on the screen:
  renderer.render(scene, camera);
</script>
