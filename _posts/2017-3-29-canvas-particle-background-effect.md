---
layout: post
tags: [codepen, title, javascript, title, frontend]
from: 
title: Canvas Particle Background Connection
type: Codepen Notes
---

Hi! These are some notes on doing an effect like this!

<p data-height="400" data-theme-id="dark" data-slug-hash="OpoQEp" data-default-tab="js,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End Canvas Particle Connection" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/OpoQEp/">Front End Canvas Particle Connection</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## How this works
To do this effect we will create a set number of particles. Each with a speed, position, and size. Then we will move them on that speed using `requestAnimationFrame`. Inside that movement we will also check the distance from all the other points! If the distance is short enough we will draw a line from each particles x,y coordiantes!

## The html
All we need is a canvas element!

    <canvas></canvas>

## Setup the javascript

    var canvas = document.querySelector('canvas')
    var body = document.querySelector('body')
    canvas.width = body.offsetWidth
    canvas.height = body.offsetHeight
    var ctx = canvas.getContext('2d')
    var particleCount = 100
    
## Creating the particles

    partCnt = 100;
    var particles = []
    for(var i = 0; i < partCnt; i++){
       particles[i] = {
          x: random_range(0, canvas.width),
          y: random_range(0, canvas.height),
          xSpeed: random_range(-2, 2),
          ySpeed: random_range(-2, 2),
          size: random_range(1, 10),
          range: random_range(10, 75)
       }
    }
    
## The random_range function
Just incase you're not bringing your own! :]

    function random_range(min, max){
       return Math.round(min + Math.random() * (max-min))
    }

## PART1: Drawing and moving the particles

    requestAnimationFrame(draw)
    function draw(){
       requestAnimationFrame(draw)
       ctx.fillStyle = '#222'
       ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    }

