---
layout: post
tags: [codepen, title, javascript, title, frontend]
from:
title: Dynamic Vertical Height Dropdowns
type: Notes
---

Notes for dynamic sized drop downs

## Basics
Sometimes when doing drops downs the easiest way is by using the max-height and transitioning on that. We will use `transform:translateY(Xpx)`

## The html
We need a container with a main button and list of buttons inside!

       .dropdown
          .toggle(tabindex=1) Click Me!
          .list
             .button button 1
             .button button 2
             .button button 3
             .button button 4
             .button button 5

## The CSS

Pretty simple CSS here you don't need SCSS but I find it better for organization. Things to note are the `.dropdown` has a   `overflow:hidden`. That is what will hide the dropdown when in the `transform:translateY(-100%)`.

       .dropdown{
          position:relative;
          overflow:hidden;
          max-width:200px;
          margin:40px auto;
          .toggle{
             height:40px;
             line-height:40px;
             text-align:center;
             background:#CDCDCD;
             width:200px;
             z-index:1;
             position:relative;
             &:focus{
                pointer-events:none;
                ~ .list{
                   transform:translateY(0%);
                }
             }
          }
          .list{
             z-index:0;
             position:relative;
             transform:translateY(-100%);
             transition:all 0.5s;
          }
       }

Please take a look at the codepen and let me know if you need any help!

<p data-height="265" data-theme-id="0" data-slug-hash="e35995270eb6e206fba63a393e4d4f6c" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Dynamic Vertical Height DropDown" class="codepen">See the Pen <a href="https://codepen.io/sean_codes/pen/e35995270eb6e206fba63a393e4d4f6c/">Dynamic Vertical Height DropDown</a> by Sean Codes (<a href="https://codepen.io/sean_codes">@sean_codes</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
