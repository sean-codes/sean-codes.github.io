---
layout: post
tags: [codepen, material, css, coding, nojs, login, form]
from:
title: Toggle login and register form single page app animation, using only CSS
type: Codepen daily 35
---

Switching a login and register form with a animation where the first slides out maintaining the front position then forces a lower z-index to slide behind. Just vanilla CSS. These are my notes on the project:

## The basics
To do this switch I'm using two divs and two radios. To start I set the divs with a min-height and max-width and `margin:auto`. I create two animations for `slideIn` and `slideOut`.
When I have an input checked I use the slidein animation and use the slideout animation on the non checked.

    input.login + div,
    input.register + div{
      transform:translateX(0px);
      animation: 1s slideout;
      z-index: 1;
    }

    input.login:checked + div,
    input.register:checked + div{
      transform:translateX(0px);
      animation: 1s slidein;
      z-index:0;
    }

     @keyframes moveout{
       0%, 100%{ transform:translateX(0px); }
       50%{ transform:translateX(-160px); }
    }

    @keyframes movein{
       0%, 100%{transform:translateX(0px); }
       50%{ transform:translateX(160px); }
    }

## The interesting trick
When I was makign this I could not find any information on swapping z-index in the animation and holding it without causing a flash when the z-index switched at first. To fix this I used an `animation-delay` and set the z-index after the animation was halfway through!

    /* Inside the slide in add these */
    input.login:checked + div,
    input.register:checked + div{
      animation: 1s slidein, 2s forceTop infinite;
      animation-delay: 0s, 0.5s;
    }

    @keyframes forceTop{
      from, to{z-index:2; }
    }

## The extras
I also added labels and opacity/background changing! I think if you are able to master the top section of this and get the slides functioning you should be able to add those features. The basics for those features revolve around the `+` selector. I sometimes select through multiple elements using it like this:

    input.login:checked + label + .form{
      /* Do something to the form inside this div! */
    }

Please take a deeper look at the codepen and let me know if you need any help!

<p data-height="600" data-theme-id="dark" data-slug-hash="PpoOzr" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day - 35 - No JS Login Register toggle" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/PpoOzr/">Front End Day - 35 - No JS Login Register toggle</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
