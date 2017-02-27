---
layout: post
tags: [codepen, material, css, coding, nojs]
from: 
title: Classy Floating direction aware cards with no JavaScript only CSS
type: Codepen daily 36
---

This is a codepen of floating direction aware cards! The effect i really interesting. These are my notes on the subject:

## The basics of direction awareness
The effect works by using the `~` selector and `z-index`. What we do it create a container then inside we lay target squares or corners and then final square or the 'plane'. When we hover any of the target squares we will use the `~` selector to select the plain and then rotate the x and y towards that direction

## The basic html

     div.contain
       div.corner.c1
       div.corner.c2
       div.corner.c3
       div.corner.c4
       div.plane Mouse on me!

##The basic CSS

    /* The container */
    .contain {
       width:200px;
       height:200px;
       margin:auto;
       position:relative;
       perspective:400px;
       display:flex;
       flex-wrap:wrap;
    }

    /* The corners */
    .contain .corner {
       flex: 1;
       min-width:50%;
       height:50%;
       padding:0px;
       float:left;
       transform-style:preserve-3d;
       transition: 1s;
    }

    /* Selecting the plain on hover of a target */
    .contain .corner.c1:hover ~ .plane { transform: rotateY(-10deg) rotateX(10deg); }
    .contain .corner.c2:hover ~ .plane { transform: rotateY( 10deg) rotateX(10deg); }
    .contain .corner.c3:hover ~ .plane { transform: rotateY(-10deg) rotateX(-10deg); }
    .contain .corner.c4:hover ~ .plane { transform: rotateY( 10deg) rotateX(-10deg); }

##The effect simply
Here is a simple example of usine the effect with four corners!

<p data-height="300" data-theme-id="dark" data-slug-hash="wgXNvv" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Practice Direction Aware" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/wgXNvv/">Practice Direction Aware</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

>NOTE: This effect doesnt require SCSS but it will be useful for staying organized and mathmatically enhancing the effect.
Please take a deeper look at the codepen and let me know if you need any help! 

<p data-height="500" data-theme-id="dark" data-slug-hash="jBEBpz" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 36 - Classy Floating direction aware cards" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/jBEBpz/">Front End Day 36 - Classy Floating direction aware cards</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
