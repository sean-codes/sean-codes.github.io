---
layout: post
tags: [codepen, material, css, coding, nojs]
from: 
title: Fancy Loading Bar with scale, rotate, and translate
type: Codepen daily 31
---

This is a codepen of a fancy circular loading bar. Where dots are displayed in a cricle and grow! Also with a line underneith. These are some notes I took while making the project!

## The HTML (Pug)
The mark up is a bit simple. We need 10 elements within a parent. With a chicle element within the 10 elements. This is because we want to simply use scale for smooth animations and also will be using translate and scale will also scale translates!

    .container
       .bubbles
          - for (var i = 0; i < 10; ++i)
             .bubble
                .circle
       .bar


## How to position in a circle
To position the elements I used SCSS to look over 10 times and rotating then translating on the Y axis!

    @for $i from 0 to 15 {
       .bubble:nth-child(#{$i}){
          flex:1;
          position:absolute;
          display:inline-block;
          margin:auto;
          transform: rotateZ($i * 36deg) translateY(50px);
       }
       
       /* Read below */
       .bubble:nth-child(#{$i}) .circle{
          animation-delay: $i * 0.1s; 
       }
    }

## The animation
To do the animation I used `transform:scale(x)` and `animation-delay` I put the delay inside the same loop above! I'm only animating on the child of the bubble the `.circle`

    @keyframes pulse{
       0%{ transform: scale(0.2); }
       50%{ transform: scale(1); opacity:0.75; }
       100%{ transform: scale(0.2); }
    }

Here is the codepen please take a look let me know if you have any questions or need any help!

<p data-height="265" data-theme-id="dark" data-slug-hash="RKzNWj" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 31 - Loading Bar with bubbles" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/RKzNWj/">Front End Day 31 - Loading Bar with bubbles</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
