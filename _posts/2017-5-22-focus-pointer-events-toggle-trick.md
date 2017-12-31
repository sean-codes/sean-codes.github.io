---
layout: post
tags: [codepen, title, javascript, title, frontend]
from:
title: Focus Pointer Events Toggle Trick
type: Notes
---

Bit abount using the `focus` and `pointer-events` to make a css only toggle button!

<p data-height="200" data-theme-id="0" data-slug-hash="d0e5e3343bf7bf47e2e3abb99b317e76" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Simple Focus Pointer Events Example" class="codepen">See the Pen <a href="https://codepen.io/sean_codes/pen/d0e5e3343bf7bf47e2e3abb99b317e76/">Simple Focus Pointer Events Example</a> by Sean Codes (<a href="https://codepen.io/sean_codes">@sean_codes</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Basics
We add a `tabindex="1"` to the div element so it can be focused. In the CSS when the div is focused we give it a property `pointer-events:none`. This makes the button on clickable. Now when you click again it will lose focus. Acting as a toggle switch!

## The html
Just a div with a tab index

       <div tabindex='1'>Click Me</div>

## The CSS

Some extra styles for making it look button like! The only requirements is the `:focus` with a `pointer-events:none`

      div{
         max-width:200px;
         height:50px;
         line-height:50px;
         text-align:center;
         margin:40px auto;
         background:#f22;
         user-select:none;
         outline:none;
      }
      div:focus{
         pointer-events:none;
         background:#465;
      }

Please take a look at the codepen and let me know if you need any help!

This is a pretty simple effect that I haven't found to much use in the wild but I find it extra convenient to use for demo and examples where I would normally use label and checkboxes for toggles!
Here is a more interesting example :]

<p data-height="265" data-theme-id="0" data-slug-hash="809d25c6012943927ebaf36ec16bce42" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="CSS Only Focus Toggle" class="codepen">See the Pen <a href="https://codepen.io/sean_codes/pen/809d25c6012943927ebaf36ec16bce42/">CSS Only Focus Toggle</a> by Sean Codes (<a href="https://codepen.io/sean_codes">@sean_codes</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
