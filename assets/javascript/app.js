$(window).scroll(function() {


    var wscroll = $(this).scrollTop();
    
    console.log(wscroll);
    console.log(window.scrollY);
    //IF scrollY is at bottom of aBout Me section header then set the class on the imge to slide/fade in
    //display:none (image and paragraph)
    //Then check scrollY
    //if at place set display:block (image and pargraph)
    //Add the animation classes
    
    /*$('#sq2').css({
        'transform': 'translate(0px, '+ wscroll /1 +'%)'
    
    });*/

    $('#sq4').css({
        'transform': 'translate(0px, '+ wscroll /1 +'%)'
    
    });
    /*$('').css({
        'transform': 'translate(0px, '+ wscroll /2 +'%)'
    
    });*/

    /*$('#bio-image').css({
        'transform': 'translate(0px, '+ wscroll /2 +'%)'
    
    });*/


});   