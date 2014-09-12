// A $( document ).ready() block.

$( document ).ready(function() {


    var window1 = $( window ).height();
    console.log(window1);
    $(".header").css( "height", window1 - 100 );
    $(".container").css( "height", window1 - 100 );

    var middle = window1 - 123;

    $(".header-content").css( "padding-top", middle/2 - 50 );

    $(".apply1").css( "top",  window1);

    var apply = $(".apply").height();

    var about = $(".about").height();

    $(".experience1").css( "top",  window1 + apply + about + 280);

    $( ".show" ).mouseover(function() {
      
      $( "#show" ).swishOut('swish-fade', 500);
      $( ".hidden" ).swishIn('swish-fade', 500);
      $(".callto").fadeTo( "fast", .4 );
    });

    $( ".show" ).mouseout(function() {
      $( "#show" ).swishIn('swish-fade', 500);
        $(".callto").fadeTo( "fast", .6);
        $( ".hidden" ).swishOut('swish-fade', 500);

    });

    $( ".show1" ).mouseover(function() {
      
      $( "#show1" ).swishOut('swish-fade', 500);
      $( ".hidden1" ).swishIn('swish-fade', 500);
      $(".callto1").fadeTo( "fast", .4 );
    });

    $( ".show1" ).mouseout(function() {
      $( "#show1" ).swishIn('swish-fade', 500);
        $(".callto1").fadeTo( "fast", .6);
        $( ".hidden1" ).swishOut('swish-fade', 500);

    });

    $( ".show2" ).mouseover(function() {
      
      $( "#show2" ).swishOut('swish-fade', 500);
      $( ".hidden2" ).swishIn('swish-fade', 500);
      $(".callto2").fadeTo( "fast", .4 );
    });

    $( ".show2" ).mouseout(function() {
      $( "#show2" ).swishIn('swish-fade', 500);
        $(".callto2").fadeTo( "fast", .6);
        $( ".hidden2" ).swishOut('swish-fade', 500);

    });

    $( ".test" ).mouseover(function() {

        $(".tag").hide(function(){

           $(".exp-footer").css( "height", 0 );    
            $(".exp-footer").css( "padding", 0 ); 
            $(".cover").fadeTo( "fast", .6);
            $(".test-img").swishIn( 'swish-zoom', 1000);
        });   
           
    });

    $( ".test" ).mouseout(function() {

        
        $(".tag").show();

            $(".cover").fadeTo( "fast", 0, function(){
                $(".exp-footer").css( "padding", 10 ); 
                $(".exp-footer").css( "height", 20 );    
                $(".test-img").swishOut( 'swish-zoom', 500);
            });
    });

    $( ".test1" ).mouseover(function() {

        $(".tag1").hide(function(){

           $(".exp-footer1").css( "height", 0 );    
            $(".exp-footer1").css( "padding", 0 ); 
            $(".cover1").fadeTo( "fast", .6);
            $(".test1-img").swishIn( 'swish-zoom', 1000);
        });   
           
    });

    $( ".test1" ).mouseout(function() {

        
        $(".tag1").show();

            $(".cover1").fadeTo( "fast", 0, function(){
                $(".exp-footer1").css( "padding", 10 ); 
                $(".exp-footer1").css( "height", 20 );    
                $(".test1-img").swishOut( 'swish-zoom', 500);
            });
    });

    $( ".test2" ).mouseover(function() {

        $(".tag2").hide(function(){

           $(".exp-footer2").css( "height", 0 );    
            $(".exp-footer2").css( "padding", 0 ); 
            $(".cover2").fadeTo( "fast", .6);
            $(".test2-img").swishIn( 'swish-zoom', 1000);
        });   
           
    });

    $( ".test2" ).mouseout(function() {

        
        $(".tag2").show();

            $(".cover2").fadeTo( "fast", 0, function(){
                $(".exp-footer2").css( "padding", 10 ); 
                $(".exp-footer2").css( "height", 20 );    
                $(".test2-img").swishOut( 'swish-zoom', 500);
            });
    });

});