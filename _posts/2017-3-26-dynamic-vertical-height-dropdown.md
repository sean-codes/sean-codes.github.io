---
layout: post
tags: [codepen, title, javascript, title, frontend]
from: 
title: Dynamic Vertical Height Dropdowns
type: Notes
---

Hi! This is a quick write up on dynamic sized drop downs

## Basics
Sometimes when doing drops downs the easiest way is by using the max-height and transitioning on that. We will use `transform:translateY(Xpx)`

## The html
I will use a container to center then a containerer inside for the dropdown. Going to use a checkbox for changing the state but you can use javascript instead and add/remove the class

       input.checkbox(type="checkbox")
       .container
          .drop
             p cats
             p whales
             p fish
             p fish
             p fish
             p fish
             p fish

## The CSS

Pretty simple CSS here you don't need SCSS but I find it better for organization. Things to note are the `.container` has a   `overflow:hidden`. That is what will hide the dropdown when in the `transform:translateY(-100%)`.

    .checkbox{
       position:relative;
       z-index:1000;

       &:checked + .container .drop{
          transform:translateY(0%);
       }
    }
    .container{
       z-index:1;
       position:relative;
       overflow:hidden;
       height:300px;
       .drop{
          transition:all 0.5s;
          z-index:1;
          position: absolute;
          transform: translateY(-100%);
          background:#cdc;
          color:#333;
          width:100px;
          max-height:300px;
          overflow-y:auto;
       }
    }
    
Please take a look at the codepen and let me know if you need any help! 

<p data-height="400" data-theme-id="0" data-slug-hash="KWoNNj" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="TranslateY dynamic size dropdown" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/KWoNNj/">TranslateY dynamic size dropdown</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
