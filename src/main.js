import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="screenshot">
    <div class="banners">
      <iframe class="banner mrec" width="300" height="250" src="/post-event-videos-300x250/index.html"></iframe>
      <iframe class="banner halfpage" width="300" height="600" src="/post-event-videos-300x600/index.html"></iframe>
    </div> 
  </div>
`

setupCounter(document.querySelector('#counter'))
