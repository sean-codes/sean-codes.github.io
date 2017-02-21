---
layout: post
tags: [codepen, material, css, coding, nojs]
from: 
title: Toggle switches, radio buttons, and checkbox styles, using only CSS
type: Codepen daily 33
---

This is a codepen of interesting radio, checkbox, and toggle switches! I just wanted to share with you my notes of making this project

## The toggle switch

To do the toggle switch I used a `:after` and the `+` selector! I wrapped the checkbox and label inside a div and created a separate label for displaying the text and the inner is going to draw the display. Hide the input and then use the label to draw the lane and the `after` to draw the toggle switch. When the checkbox is checked move the toggle switch using `transform: translateX(45px)`.

    div.fancyToggle
        label(for="toggle2") Toggle
        div.toggle
           input(type="checkbox" id="toggle2")
           label(for="toggle2")

## The radio switch

This one took a bit more trickery and most of it is just guessing numbers to get everything to fit correctly. This requires a wrapper div, and two of each label and input. Hide the radios. Use the wrapper to draw the lane. Then draw each label inside the lane on their sides one with the same color as the lane and the other a primary color when checked. I used `transform:scale()` to make the effect!

## Checkboxes

The checkbox did not require a wrapper but I used for positioning. First hide the checkbox. Then draw the label as the square. Then when checked use the `:after` selector and draw a inner square with a primary color!

Please take a deeper look at the codepen and let me know if you need any help! 

<p data-height="400" data-theme-id="dark" data-slug-hash="ygmNJO" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 33 - Fancy Checkbox and Toggle Switches" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/ygmNJO/">Front End Day 33 - Fancy Checkbox and Toggle Switches</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
