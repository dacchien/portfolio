/*!
=========================================================
* Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $('.navbar .nav-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      var hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash
        },
      )
    }
  })
})

// protfolio filters
$(window).on('load', function () {
  var t = $('.portfolio-container')
  t.isotope({
    filter: '.project-1',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: !1,
    },
  }),
    $('.filters a').click(function () {
      $('.filters .active').removeClass('active'), $(this).addClass('active')
      var i = $(this).attr('data-filter')
      return (
        t.isotope({
          filter: i,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: !1,
          },
        }),
        !1
      )
    })
})
// Get the image container and fullscreen image popup
// const imgContainer = document.querySelectorAll('.img-fluid')
// imgContainer.forEach((e) => {
//   e.addEventListener('click', function () {
//     alert('OK')
//   })
// })
// console.log('DEBUG', imgContainer)
// const fullscreenImg = document.getElementById('fullscreenImg')

// // When image is clicked, show fullscreen popup
// imgContainer.addEventListener('click', function () {
//   alert('OK')
//   fullscreenImg.style.display = 'block'
// })

function openFullScreenImage(imageId) {
  const fullscreenImg = document.getElementById('fullscreenImg')
  const image = document.querySelector('#fullscreenImg img')
  image.setAttribute('src', imageId)
  fullscreenImg.style.display = 'block'
}

// // Function to close fullscreen image popup
function closeFullscreenImage(imageId) {
  const fullscreenImg = document.getElementById('fullscreenImg')
  fullscreenImg.style.display = 'none'
}
