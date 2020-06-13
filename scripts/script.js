var myMovies = JSON.parse(movies)
console.log(myMovies[0].preLikes)

$(document).ready(function () {

    var movieList = $("<div></div>").addClass("movieList")
    $("main").prepend(movieList)

    for (i = 0; i < myMovies.length; i++) {

        var movieBox = $("<div></div>").addClass("movieBox" + i)
        movieList.append(movieBox)

        var text = $("<div class='text'><h2>" + myMovies[i].titel + "</h2><p class='desc'>" + myMovies[i].discrp + "</p></div>")
        var poster = $("<img class='poster' src='" + myMovies[i].poster + "'alt='Poster'>")


        movieBox.append(poster).append(text)

    }


    var likeField0 = $('<div class="wtLikes"><a href="#" class="like-counter0"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks0"></span></div>')
    $(".movieBox0").append(likeField0)
    var preClicks0 = myMovies[0].preLikes;
    $("#clicks0").html(preClicks0);
    $('.like-counter0').click(function () {
        preClicks0 += 1;
        $("#clicks0").html(preClicks0);
    });

    var likeField1 = $('<div class="wtLikes"><a href="#" class="like-counter1"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks1"></span></div>')
    $(".movieBox1").append(likeField1)
    var preClicks1 = myMovies[1].preLikes;
    $("#clicks1").html(preClicks1);
    $('.like-counter1').click(function () {
        preClicks1 += 1;
        $("#clicks1").html(preClicks1);
    });

    var likeField2 = $('<div class="wtLikes"><a href="#" class="like-counter2"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks2"></span></div>')
    $(".movieBox2").append(likeField2)
    var preClicks2 = myMovies[2].preLikes;
    $("#clicks2").html(preClicks2);
    $('.like-counter2').click(function () {
        preClicks2 += 1;
        $("#clicks2").html(preClicks2);
    });

    var likeField3 = $('<div class="wtLikes"><a href="#" class="like-counter3"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks3"></span></div>')
    $(".movieBox3").append(likeField3)
    var preClicks3 = myMovies[3].preLikes;
    $("#clicks3").html(preClicks3);
    $('.like-counter3').click(function () {
        preClicks3 += 1;
        $("#clicks3").html(preClicks3);
    });

    var likeField4 = $('<div class="wtLikes"><a href="#" class="like-counter4"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks4"></span></div>')
    $(".movieBox4").append(likeField4)
    var preClicks4 = myMovies[4].preLikes;
    $("#clicks4").html(preClicks4);
    $('.like-counter4').click(function () {
        preClicks4 += 1;
        $("#clicks4").html(preClicks4);
    });

    var likeField5 = $('<div class="wtLikes"><a href="#" class="like-counter5"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks5"></span></div>')
    $(".movieBox5").append(likeField5)
    var preClicks5 = myMovies[5].preLikes;
    $("#clicks5").html(preClicks5);
    $('.like-counter5').click(function () {
        preClicks5 += 1;
        $("#clicks5").html(preClicks5);
    });

    var likeField6 = $('<div class="wtLikes"><a href="#" class="like-counter6"><img class="thumb" src="img/thumb.png"></a><span class="click-text"><a id="clicks6"></span></div>')
    $(".movieBox6").append(likeField6)
    var preClicks6 = myMovies[6].preLikes;
    $("#clicks6").html(preClicks6);
    $('.like-counter6').click(function () {
        preClicks6 += 1;
        $("#clicks6").html(preClicks6);
    });


})