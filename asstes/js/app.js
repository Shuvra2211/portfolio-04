$(function () {

  // project  js start
  $('.Projects_slider').slick({
    arrows: false,
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: 'Projects_slider_dots',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },


    ]

  });

  // project js end


})




// aos js start
AOS.init();

// aos js end


// type js start

var typed = new Typed('#type_js', {
  strings: ["Web Designer", "Font-End Developer", "Responsive Designer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

 // type js end

//  particles js start

let particles_id = ['particles-js','test'];

particles_id.map(function(value){
  particlesJS(value,
  
 {
   "particles": {
     "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": ["#ffffff","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#000000","#008000","#800000","#FA8072","#FFA07A","#D35400"]
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 5,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": false,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 2,
       "direction": "top",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "repulse"
       },
       "onclick": {
         "enable": false,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true,
   "config_demo": {
     "hide_card": false,
     "background_color": "#b61924",
     "background_image": "",
     "background_position": "50% 50%",
     "background_repeat": "no-repeat",
     "background_size": "cover"
   }
 }

);
})

