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
