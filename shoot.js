AFRAME.registerComponent('bullets',{
    init: function(){
        this.shootbullet()
    },
    shootbullet: function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key==='z'){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('geometry',{
                    primitive:'sphere',radius:1
                })
                bullet.setAttribute('material','color','black')
                var cam=document.querySelector('#camera')
                pos=cam.getAttribute('position')
                bullet.setAttribute('position',{
                    x:pos.x,y:pos.y,z:pos.z
                })
                var camera=document.querySelector('#camera').object3D
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                bullet.setAttribute('velocity',direction.multiplyScalar(-10))
                bullet.setAttribute('dynamic-body',{
                    shape:'sphere',
                    mass:'0'
                  })
                var scene=document.querySelector('#scene')
                scene.appendChild(bullet)
            }
        })
    },
    removeBullet: function (e) {
        //Original entity (bullet)
        console.log(e.detail.target.el);
    
        //Other entity, which bullet touched.
        console.log(e.detail.body.el);
    
        //bullet element
    var element = e.detail.target.el 
    var elementHit = e.detail.body.el 
    
        //element which is hit
     
    
        if (elementHit.id.includes("cylinder")) 
          {
            elementHit.setAttribute('material', {
              opacity:1,
              transparent:true
            })
            //set material attribute
            
    
            //impulse and point vector
            var impulse = new CANNON.Vec3(-2,2,1)
            var worldPoint = new CANNON.Vec3().copy(elementHit.getAttribute('position'))
            elementHit.body.applyImpulse(impulse,worldPoint)
            element.removeEventListener('collide',this.shoot)
            var scene = document.querySelector('#scene')
            scene.removeChild(element)
    
            //remove event listener
            
            
            //remove the bullets from the scene
          
        }
      },
    });
