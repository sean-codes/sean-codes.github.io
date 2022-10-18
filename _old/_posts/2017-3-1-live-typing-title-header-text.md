---
layout: post
tags: [codepen, title, javascript, title, frontend]
from:
title: Interesting live typing title header text
type: Codepen daily 38
---

An example for doing live typing title text. These are my notes on the project:

## How this works
This pen is an easy pen that uses a `setTimeout` to basically flip from typing and backspacing and in between switch words.

## Set up

The html

    <!-- We will insert out typed text into this span! -->
    <h1>Title <span id="typed"></h1>

I created a few variables.

    words = ['word1', 'word2', 'word3'] //Our words
    index = 0 //Keep track of the word we are using
    pos = 0 //How many letters we have typed
    typed = '' //Hold the word we are typing

A few functions

     type() //Will add a letter into the typed variable
     backspace() //Will remove a letter from the typed variable
     render() //We set the title to the typed variable

Now each time I type I will add a letter to the `typed` variable and add `++` to the `pos` variable. When I do backspace I do the opposite. After running either of those functions I will call render().

## Example

Please take a look at the codepen and let me know if you need any help!

<p data-height="265" data-theme-id="dark" data-slug-hash="WpQeJy" data-default-tab="js,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Day 38.1 - Typing Header " class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/WpQeJy/">Front End Day 38.1 - Typing Header </a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
