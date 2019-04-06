var camera, scene, renderer;
var loader, geometry, material, mesh;
 
init();
animate();
 
function init() {
    const canvas = document.querySelector('#canvas');
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 2;
    
    scene = new THREE.Scene();

    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );
    loader = new THREE.GLTFLoader();
    loader.load('models/gltf/flag/Flag_Algeria.glb', 
    function(gltf)
    {
        
        scene.add(gltf.scene);
        gltf.animations;
        gltf.scene;
        gltf.scenes;
        gltf.cameras;
        gltf.asset;

    },
    //called while loading
    function(xhr)
    {
        console.log(xhr.total);
        if (xhr.total>0)
        console.log( ((xhr.loaded/xhr.total)*100)  + ' % loaded' );
    },
    // called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}

    );
    /*geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );*/
    
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
    if (mesh!=null)
    mesh.rotation.y += 0.01;
    //gltf.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}