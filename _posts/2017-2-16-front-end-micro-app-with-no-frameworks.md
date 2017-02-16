---
layout: post
from:
tags: [codepen, material, flexbox, jquery, frontend, animation, data]
title: Creating a tool for handling backend cron jobs
type: Codepen Daily
---

This is a javascript heavy front end template I created for creating, deleting, and updating backend cron jobs. This uses no frameworks or plugins. Here are some notes:

# Data storage
The data is being stores in a JSON array. The id field is for when creating new jobs it will stay uniqie until hooked up to a database.

# document.querySelector for fake JQuery
I am using this to select elements to cut out the need for JQuery

   //Simple Fake JQuery
   var $ = function(str){ 
      var ele = document.querySelectorAll(str);
      if(ele.length == 1) ele = ele[0];
      ele.on = function(event, func){ this.addEventListener(event, func); }
      return ele;
   };
   
# The app functions
I broke the app into a bunch of small functions for that we could manipulate the data and template with using simplier commands like openModify and close Modify

# Appending an element with vanilla javascript
To append an element using vanilla javascript I kept it simple and created a string of the element and then added it to the innerHTML. This works well!

    var template = `
       <tr class='jobrow' id='${jobID}'>
          <td>${job.name}</td>
          <td>${job.path}</td>
          <td>${job.startDate} ${job.startTime}</td>
          <td>${job.interval}</td>
       </tr>`;
     app.jobs.innerHTML += template;
     
# Getting a job index
Because when hooked into a database and if you deelte a job in the middle of the array the job keys are not going to always match up. To keep a unique key associated with a job I created a simple function to keturn the job key.

  getJobIndex: function(key){
         var index = 0;
         app.data.rows.forEach(function(job, index){
            if(job.key == Number(key)) 
               return;
         })
         return index
      }
      
#Saving and Adding new jobs
When saving or adding a new job when you hit the save button the data is updated and then the entire table that is displayed is refreshed to display the freshly updated data


<p data-height="600" data-theme-id="0" data-slug-hash="XpGvNg" data-default-tab="js,result" data-user="sean_codes" data-embed-version="2" data-pen-title="Front End - Cron Job Manager" class="codepen">See the Pen <a href="http://codepen.io/sean_codes/pen/XpGvNg/">Front End - Cron Job Manager</a> by Sean Codes (<a href="http://codepen.io/sean_codes">@sean_codes</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I hope this helps you please let me know if you have any questions!
