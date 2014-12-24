function keypressed(key)
{
	// log('keypressed')
	// log(key)
}

function keydown(key)
{
	// log(key.keyCode)
	switch(key.keyCode)
	{
		// case 13:
		// 	shape = add_box();
		// 	break;

		case 37:
			//left key pressed
			scene.rotation.y -= 0.1
			break;
		case 38:
			// up key pressed
			scene.rotation.x -= 0.1
			break;
		case 39:
			// right key pressed
			scene.rotation.y += 0.1
			break;
		case 40:
			//down key pressed
			scene.rotation.x += 0.1
			break;

		case 49:
			//1 key pressed
			scene = scene1
			break;
		case 50:
			//2 key pressed
			scene = scene2
			break;


		case 87:
			//s key pressed
			camera.translateZ(-0.5);
			break;
		case 83:
			//w key pressed
			camera.translateZ(0.5);
			break;
		case 65:
			//a key pressed
			camera.translateX(0.5);
			break;
		case 68:
			//d key pressed
			camera.translateX(-0.5);
			break;

		case 104:
			//8 key pressed
			shape.position.y += 0.1
			break;
		case 98:
			//2 key pressed
			shape.position.y -= 0.1
			break;
		case 102:
			// 6 key pressed
			shape.position.x += 0.1
			break;
		case 100:
			//4 key pressed
			shape.position.x -= 0.1
			break;
	}
}

function keyup(key)
{
	// log('keypressed')
	// log(key)
}

function mousemove(e) {
		var mouseX = ( e.clientX - window.innerWidth / 2 );
		var mouseY = ( e.clientY - window.innerHeight / 2 );
		scene.rotation.x = mouseY * 0.005;
		scene.rotation.y = mouseX * 0.005;

		renderer.render( scene, camera );
	}
