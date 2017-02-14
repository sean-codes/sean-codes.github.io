search = function(){
    var searchText = document.getElementById('search').value.toLowerCase();
    var questions = document.getElementsByClassName('question');

    for(var i = 0; i < questions.length; i++){
        var question = questions[i];
        var questionText = question
            .getElementsByClassName('questionText')[0]
            .innerHTML.toLowerCase();
        var questionAnswer = question
            .getElementsByClassName('questionAnswer')[0]
            .innerHTML.toLowerCase();

        question.style.display = '';
        if(!questionText.includes(searchText) && !questionAnswer.includes(searchText)){
            question.style.display = 'none';
        }
    }
}

contact = function(){
    var from = document.getElementById("email").value;
    var reason = document.getElementById("reason").value;
    var message = document.getElementById("message").value;
    var params = 'from='+from+'&reason='+reason+'&message='+message;

    var http = new XMLHttpRequest();
    var url = "https://formspree.io/sean_codes@outlook.com";

    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);

    document.getElementById('formContact').style.display = "none";
    document.getElementById('formSent').style.display = "block";
}
