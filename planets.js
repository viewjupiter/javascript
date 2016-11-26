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
  document.body.style.backgroundColor = 'black';
  var surface = new THREE.MeshPhongMaterial({ambient: 0xFFD700});
  var star = new THREE.SphereGeometry(50, 28, 21);
  var sun = new THREE.Mesh(star, surface);
  scene.add(sun);
  
  var ambient = new THREE.AmbientLight(0xffffff);
  scene.add(ambient);
  
  var sunlight = new THREE.PointLight(0xffffff, 5, 1000);
  scene.add(sunlight);
  
  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a}, {color: 0x0000cd});
  var planet = new THREE.SphereGeometry(20, 20, 15);
  var earth = new THREE.Mesh(planet, surface);
earth.position.set(250, 0, 0);
  scene.add(earth);
  var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a}, {color: 0xb22222});
  var planet = new THREE.SphereGeometry(20, 20, 15);
  var mars = new THREE.Mesh(planet, surface);
  mars.position.set(500, 0, 0);
  scene.add(mars);
  
  clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    
    var time = clock.getElapsedTime();
    var e_angle = time * 0.8;
    earth.position.set(250* Math.cos(e_angle), 250* Math.sin(e_angle), 0);
    var m_angle = time * 0.8;
    mars.position.set(500* Math.cos(m_angle), 500* Math.sin(m_angle), 0);
    
  // Now, show what the camera sees on the screen:
  renderer.render(scene, camera);
  }
  animate();
</script>
