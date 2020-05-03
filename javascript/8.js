const url =
  'https://mms-res.cdn.bcebos.com/voicefe/captain/images/be3a8f01a533fc60dcb457d60fda3fec479281d3?160*50'

function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = err => {
      reject(err)
    }
    img.src = url
  })
}

loadImg(url)
  .then(img => {
    console.log(img.width)
    return img
  })
  .then(img => {
    console.log(img.height)
    // return loadImg(url2)
  })
  .catch(err => console.log(err))
