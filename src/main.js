import './style.css'

document.querySelector('#app').innerHTML = `
<div class="warning">Please view without ad blocking enabled and scroll for both banner sizes.</div>
  <div class="screenshot">
    <div class="banners">
      <video class="banner mrec" width="300" height="250" autoplay muted loop poster="/iconic-300x250.jpg">
        <source src="/iconic-300x250.webm" type="video/webm">
      </video>
      <video class="banner halfpage" width="300" height="600" autoplay muted loop poster="/iconic-300x600.jpg">
        <source src="/iconic-300x600.webm" type="video/webm">
      </video>
    </div> 
  </div>
`

setupCounter(document.querySelector('#counter'))
