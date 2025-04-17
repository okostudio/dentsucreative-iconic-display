import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="screenshot">
    <div class="banners">
      <video class="banner mrec" width="300" height="250" autoplay muted poster="/iconic-300x250.webm">
        <source src="/iconic-300x250.webm" type="video/webm">
      </video>
      <video class="banner halfpage" width="300" height="600" autoplay muted poster="/iconic-300x600.webm">
        <source src="/iconic-300x600.webm" type="video/webm">
      </video>
    </div> 
  </div>
`

setupCounter(document.querySelector('#counter'))
