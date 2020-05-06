const img_ = document.getElementById('img_')

window.addEventListener('load', function() {
  console.log('window load')
})

img.onload = function() {
  console.log('img load')
}

window.addEventListener('DOMContentLoaded', function() {
  console.log('dom load')
})
