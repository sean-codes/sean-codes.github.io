---
layout: post
tags: [codepen, title, javascript, title, frontend]
from: 
title: Button Border Animations
type: Codepen daily 41
---

Hi! This is a code pen on border animations on square buttons! These are my notes on the project:

## How this works
The basic behind the trick is to use both the psuedo selectors `::after` and `::before`. The after will take care of the top and right border and the before will take care of the bottom and left border!

## The html
This animation should only require one `button` element.

    <button class="btn">This is the button</button>

## The animations
What I did was create a list of all the animations I wanted to use. The naming convention works like this:

    n = Do not display
    s = static hold the size
    a = animate the side
    aW_sH = Animate width and keep height at 100%
    sW_aH = Keep width at 100% and animate the height
    
Code: 

    /* A weird set of keyframes that can do anything */
    @keyframes aW_sH{ from{height:100%; width:0%;} to{height:100%; width:100%;} }
    @keyframes sW_aH{ from{width:100%; height:0%;} to{width:100%; height:100%;} }
    @keyframes sW_sH{ from{width:100%; height:100%;} to{width:100%; height:100%;} }
    @keyframes nW_nH{ from,to{border-width:0px;} }
    @keyframes nW_aH{ from{height:0%;} to{height:100%;} }
    @keyframes nW_sH{ from,to{height:100%;} }
    @keyframes sW_nH{ from,to{width:100%;} }
    @keyframes aW_nH{ from{width:0%;} to{width:100%;} }
    
## The manuver :]

At the end of the animation cycle im using `animate: sH_sW 1s inifinite`. This is going to hold the position of the height and width so we can animate the next psuedo element!

Please take a look at the codepen and let me know if you need any help! 

<p data-height="400" data-theme-id="0" data-slug-hash="YZWqLo" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 41 - Button Border Transition" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/YZWqLo/">Front End Day 41 - Button Border Transition</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
