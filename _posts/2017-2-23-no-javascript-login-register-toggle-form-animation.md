---
layout: post
tags: [codepen, material, css, coding, nojs]
from: 
title: Toggle login and register form single page app animation, using only CSS
type: Codepen daily 33
---

This is a codepen of switching a login and register form with a animation where the first slides out maintaining the front position then forces a lower z-index to slide behind. These are my notes on the project:

## The basics
To do this switch I'm using two divs and two radios. To start I set the divs with a min-height and max-width and `margin:auto`. I create two animations for `slideIn` and `slideOut`. 
When I have an input checked I use the slidein animation and use the slideout animation on the non checked. 


Please take a deeper look at the codepen and let me know if you need any help! 

<p data-height="600" data-theme-id="dark" data-slug-hash="PpoOzr" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day - 35 - No JS Login Register toggle" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/PpoOzr/">Front End Day - 35 - No JS Login Register toggle</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
