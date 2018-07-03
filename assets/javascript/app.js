$(window).scroll(function() {


    var wScroll = $(this).scrollTop();
    
    console.log(wScroll);
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
        'transform': 'translate(0px, '+ wScroll /1 +'%)'
    
    });
    
    /*$('').css({
        'transform': 'translate(0px, '+ wScroll /2 +'%)'
    
    });*/

    /*$('#bio-image').css({
        'transform': 'translate(0px, '+ wScroll /2 +'%)'
    
    });*/
    
    if (wScroll <= 350) {
        $('#about').hide();
        $('#home').show();
        $('#projects').hide();

    }

    else if (wScroll >= 351) {
        setTimeout(function(){
            $('#bio-image').fadeIn();
        }), 300;
        $('#about').show();
        $('#home').hide();
        $('#projects').hide();
    
    } else if (wScroll >= 1063) {
        $('#bio-image').fadeOut();
        $('#about').hide();
        $('#home').hide();
        $('#projects').show();


    }

  



    /*if (wScroll > $('.sectTwo').offset().top-500) {
            setTimeout(function(){
                $('#bio-image').addClass('show');
            }), 180
            
        };*/

    if (wScroll > $('.main-carousel').offset().top-500) {
            setTimeout(function(){
                $('h4').addClass('show');
            }), 180
            
        };


    if (wScroll > $('.portContainer').offset().top-500) {
        $('.portSq').each(function(i){ 
                console.log('hello');
            setTimeout(function(){
                $('.portSq').eq(i).addClass('show');
            }, 180 * (i+1));
            
        });
    };

    
    














}); 
  