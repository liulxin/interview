const xhr = new XMLHttpRequest()

xhr.open('GET', './8.js', true)
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.send(null)
 