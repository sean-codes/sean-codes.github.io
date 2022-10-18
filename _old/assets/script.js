var search = function() {
    var searchText = document.getElementById('search').value.toLowerCase();
    var searchCount = document.getElementById('searchCount')
    var questions = document.getElementsByClassName('writing');
    var count = questions.length;
    for(var i = 0; i < questions.length; i++){
        var question = questions[i];
        var questionText = question
            .getElementsByClassName('writingTitle')[0]
            .innerHTML.toLowerCase();
        var questionAnswer = question
            .getElementsByClassName('writingExcerpt')[0]
            .innerHTML.toLowerCase();

        question.style.display = '';
        if(!questionText.includes(searchText) && !questionAnswer.includes(searchText)){
            question.style.display = 'none';
            count -= 1;
        }
    }
    searchCount.innerHTML = count;
}

var background = function(info){
   obj = {
      init: function(info){
         this.canvas = document.querySelector('canvas')
         var size = this.canvas.getBoundingClientRect()
         this.canvas.width = size.width*2;
         this.canvas.height = size.height*2;
         this.ctx = this.canvas.getContext('2d')
         this.points = [];
         this.color = [0, 0, 0];
         this.colorChange = 2;
         this.timer = 30;
         this.createPoints();
         this.draw();
      },
      createPoints: function(){
         var x = -100;
         while(x < this.canvas.width+200){
            this.createPoint(x)
            x+= 100;
         }
      },
      createPoint: function(x){
         this.color[this.colorChange] += 10
         for(var i = 0; i < 3; i++){
            if(this.color[i] > 100){
               this.color[i] = Math.floor(Math.random()*100);
               this.colorChange = Math.floor(Math.random()*3)
            }
         }
         this.points.push({
            x: x,
            y: (this.canvas.height*0.8) * Math.random() + (this.canvas.height*0.1),
            xspeed: Math.random() * 5 + 3,
            yspeed: Math.random() * 6 - 3,
            color: [0, 0, 0]
         })
      },
      draw: function(){
         var that= this;
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
         this.timer -= 1;
         if(this.timer < 0){
            this.createPoint(this.canvas.width+500);
            this.timer = 30;
            this.points.shift();
         }
         for(var o = 1; o < this.points.length; o++){
            this.points[o].x-=this.points[o].xspeed;
            this.points[o].y+=this.points[o].yspeed;

            var p1 = this.points[o]
            var p2 = this.points[o-1]
            var p3 = this.points[o-2] || this.points[o-1]

            var dir1 = { x: p2.x-p1.x, y: p2.y-p1.y }
            var dir2 = { x: p3.x-p2.x, y: p3.y-p2.y }
            var per1 = { x: -dir1.y, y: dir1.x }
            var per2 = { x: -dir2.y, y: dir2.x }

            var spread = 10;

            for(var i = -5; i <= 5; i++){
               this.drawLine({
                  p1: this.offxy(p1, per1, i*spread),
                  p2: this.offxy(p2, per2 ||per1, i*spread)
               })
            }
         }
      },
      offxy: function(cur, per, length){
         len = Math.sqrt(per.x * per.x + per.y * per.y);
         var x = cur.x + (per.x / len) * length;
         var y = cur.y + (per.y / len) * length;
         return {
            x: cur.x + (per.x / len) * length,
            y: cur.y + (per.y / len) * length
         }
      },
      drawRect: function(x, y, width, height){
         this.ctx.fillRect(x-width/2, y-height/2, width, height);
      },
      drawLine: function(points){
         this.ctx.beginPath()
         this.ctx.moveTo(points.p1.x,points.p1.y)
         this.ctx.lineTo(points.p2.x,points.p2.y)
         this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
         this.ctx.stroke()
      }
   }

   obj.init(info); return obj;
}
background()
window.onresize = function() {
   background()
}
