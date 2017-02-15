---
layout: post
from: 
tags: [codepen, material, flexbox, jquery, frontend, animation]
title: A Messenger template with flexbox
type: Codepen Daily 
---
This is a simple messenger template that uses vertical and horizontal flexbox!
Some notes:

# Make an element centered 

    /* the .parent can be body! */
    .parent{ display: flex; }
    .child {flex: 1; margin: auto; }
    
# Vertical flexbox

    .parent{ display: flex; flex-direction: column; }
    
# Fluid design element with fixed width of 100px

    .parent{ display: flex; }
    .elementFixedWidth { width: 100px; }
    .elementFluid{ flex: 1; }

<p data-height="550" data-theme-id="0" data-slug-hash="xgMNxe" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 26 - A Chat Template" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/xgMNxe/">Front End Day 26 - A Chat Template</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I hope this helps you please let me know if you have any questions!
