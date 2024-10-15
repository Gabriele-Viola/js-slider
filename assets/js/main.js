const slides = [
    {
      image: './assets/img/01.jpg',
      title: 'Title first slide',
      desc: 'lorem ipsul dolor sit amet'
    },
    {
      image: './assets/img/02.jpg',
      title: 'Title second slide',
      desc: 'lorem ipsul dolor sit amet'
    },
    {
      image: './assets/img/03.jpg',
      title: 'Title third slide',
      desc: 'lorem ipsul dolor sit amet'
    },
    {
      image: './assets/img/04.jpg',
      title: 'Title first slide',
      desc: 'lorem ipsul dolor sit amet'
    },
    {
      image: './assets/img/05.jpg',
      title: 'Title fifth slide',
      desc: 'lorem ipsul dolor sit amet'
    }
  ]

  let currentSlide = 0

  const previewEl = document.querySelector('.preview')
  const prevEl = document.querySelector('.prev')
  const nextEl = document.querySelector('.next')
  const slidEl = previewEl.querySelector
  
  function printCurrentSlide(imageEl, titleEl, textEl, slide) {
    const { image, title, desc} = slide
    imageEl.src = image
    titleEl.innerText = title
    textEl.innerText = desc    
  }

  printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[currentSlide])
  
  function next() {
   
    
    currentSlide++
    if (currentSlide >= slides.length) {
        currentSlide = 0
    }
  printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[currentSlide])
    
  }
  nextEl.addEventListener('click', next)

  function prev() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = slides.length-1
    }
  printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[currentSlide])

  }
  prevEl.addEventListener('click', prev)

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const img=document.createElement('img')
    img.src = slide.image
    img.addEventListener('click', function () {
  printCurrentSlide(previewEl.querySelector('img'), previewEl.querySelector('h3'), previewEl.querySelector('p'), slides[i])
        
    })
    document.querySelector('.thumbnails').appendChild(img)
  }

  let clock = setInterval(next, 3000)