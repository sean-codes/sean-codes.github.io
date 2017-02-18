---
layout: post
tags: [codepen, material, css, coding, nojs]
from: aadi._n
title: Pure CSS Material Design FAB Button Burst Modal
type: question
---

This is a codepen of a material design FAB burst button. When you click the button it will burst and show the content. These are some notes I took while making this micro app.

## Positioning the button
To position the button I'm using `position:relative` on the container and `position:absolute` on the button. Then just a `buttom:y`, `right:x`

## The HTML for the burst button
To do this button required a rediculous amount of html. Almost to the point that this would probably never be used in a production enviroment!
I broke the button innt into many parts and the entire button could be wrapped in a container of its own to keep it abstracted from the main page content that way it overlays but to keep it simple I wanted to focus on the main idea :)

    div.container
        input.btn(type="checkbox")
        div.btn
            div.circle
                div.ring
                div.outer
                div.inner +
        div.content
            h1 Real content
            p The content

## Scaling from the center
Initially I was using width and height and animating on those while translating the X to keep it centered. I found that using `transform:scale(amount)` works better but will bug out when scaling to fast it won't render sharp if scaling to fast.

## The burst effect
It's actually not a crazy difficult effect!
* First transition the ring by using `transform: scale(6)`
* Then delay the outer and `transform: scale(30)`
* After another delay on the content I use `opacity:1`.


## Show me the code
Here is the codepen please take a look let me know if you have any questions or need any help!

<p data-height="550" data-theme-id="dark" data-slug-hash="PWgMod" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 29 - NO JAVASCRIPT Material FAB Burst Popup with content" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/PWgMod/">Front End Day 29 - NO JAVASCRIPT Material FAB Burst Popup with content</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
