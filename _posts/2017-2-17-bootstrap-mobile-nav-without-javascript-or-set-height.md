---
layout: post
from:
tags: [codepen, material, flexbox, jquery, frontend, animation, data]
title: Bootstrap Style Mobile Nav without JavaScript or Static Height
type: Codepen Daily 27
---

Hi! This is a basic template for a responsive navigation for desktop/tabel and mobile phone. The mobile phone will go full width and drop down the way bootstrap does. The desktop version displays the buttons at the top with the primary button floated to the right. These are some notes from the project:

# Top nav floating primary without clearfix
Since the non floated buttons where switched to `display:inline-block` we don't need to use a clearfix. If you want the buttons spaced to match the outer padding I would `float:right` on the nav list elements. Then use a simple clear fix (IE 8+):
  .clearfix:after{
     display:table;
     content: " ";
     clear:both;
  }

# Hiding the mobile nav with dynamic height
To do this I set the container as `overflow:hidden` and then on hiding the nav I use `transform:translateY(100%)`. 

  /* Instead of using checkbox you could toggle a class with javascript. Some people don't like the checkbox for toggling but I think it's much more elegant */
  nav input:checked + ul{
    transform:translateY(-100%);
  }

# Mobile first nav
I designed this by doing the mobile parts first then I added the styles to turn the list elements into `inline-block` and remove the transform. 

# The effect is most likely only mobile for you!
If your on a phone this is only going to display mobile you might be able to go landscape mode to see desktop version.

<p data-height="600" data-theme-id="0" data-slug-hash="XpQOwG" data-default-tab="css,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End - Bootstrap Style Mobile Nav without JavaScript or Static Height" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/XpQOwG/">Front End - Bootstrap Style Mobile Nav without JavaScript or Static Height</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Please let me know if you have any questions I can help you understand better!
