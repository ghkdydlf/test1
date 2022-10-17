$(document).ready(function(){
    js();
    function js(){
        
        
        
        
        //sec1
        $('#click1').click(function(){

            $('.slider').css('transform','translateX(00vw)');
            $('#click1').css({
                fontWeight:'bold',
                color:'#000'
            });
            $('#click2, #click3').css({
                fontWeight:'normal',
                color:'#949494'
            });
            
        });
        $('#click2').click(function(){

            $('.slider').css('transform','translateX(-100vw)');
            $('.slide').fadeIn();
            $('#click2').css({
                fontWeight:'bold',
                color:'#000'
            });
            $('#click1, #click3').css({
                fontWeight:'normal',
                color:'#949494'
            });
            
        });
        $('#click3').click(function(){

            $('.slider').css('transform','translateX(-200vw)');
            $('#click3').css({
                fontWeight:'bold',
                color:'#000'
            });
            $('#click1, #click2').css({
                fontWeight:'normal',
                color:'#949494'
            });
            
        });

        //sec2
        $('.move').mouseenter(function(){
            $(this).find('.im').css({
                transform: 'scale(1.2, 1.2)',
                transition: '.5s'
            });
            // $(this).siblings().css({
            //     transform: 'scale(0.5, 0.5)'
            // });
        });
        $('.move').mouseleave(function(){
            $(this).find('.im').css({
                transform: 'scale(1, 1)',
            });
        });



        //sec4

        $('.title').click(function(){

            $(this).siblings('.sub_ex').slideToggle();
            $(this).parent('.sub_box').siblings().children('.sub_ex').slideUp();

            // var display = $(this).siblings().css('display')
            
            // if(display == 'none'){
            //     $(this).siblings('.sub_ex').slideUp();
            // }else{
            //     $(this).siblings('.sub_ex').css({
            //         display: 'none',
            //         // transition: '.5s'
            //     });
            // }
            
        });
    }
});