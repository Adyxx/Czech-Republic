  $(function(){
      let number;
    $(".btn-danger").on("click", ()=>{
        alert("seznam změn: 1) Nadpisy h2 po hoveru změní barvu a po kliknutí se stáhnou/roztáhnou. 2) Hl. nadpis je napsaný pouze velkými písmeny a má jiné barvy. 3) Po kliknutí na obrázek s mapou se ČR ukáže zblízka (image swap). 4) [DOPORUČUJI ZKOUŠET AŽ JAKO POSLEDNÍ] Po stisknutí nějaké klávesy se část stránky, na kterou najedeme myší změní na modrou, žlutou nebo červenou (stále prototyp - vypadá  to hodně špatně... v zadání avšak stojí, že tu stránku máme zničit, tak si myslím, že to je jediná změna, která odpovídá zadání, i když nemá žádné praktické využití (efekt se dá vypnout opětovným stiskem libovolné klávesy, avšak pokud chceme vidět stránku zase v základních barvách, tak nepomůže nic jiného než reload stránky)).  + po stisknutí nebezpečného tlačitka jde vidět 1 sekundová fade Out/In animace.");
        $('h2').toggleClass('applyChange');
        $('*').animate({opacity: 0},500).animate({opacity: 1}, 500);
        $("h1").css({"font-size":"40px", "background-color":"gray"}).html('ČESKÁ REPUBLIKA <code>SOUHRN</code>');
        $("nav").css({"background-color":"black"});
        $('#mapaa').css({"cursor":"pointer"});
});

    // COLOR (M/C)ODE
$('html').keypress(function(){
    if($('h2').hasClass('applyChange')){
    console.log('dsf');
$('*').toggleClass('color')
    }
});
    $('*').hover(function(){
        if($(this).hasClass('color')){
            console.log("yes");
            number = Math.floor(Math.random()*10)
            console.log(number);
            if(number < 3){
                $(this).toggleClass('red');
            } else if (number >= 3 && number <=6){
                $(this).toggleClass('yellow');
            } else {
                $(this).toggleClass('blue');
            }
        }


    });

    // NORMAL CODE
$('h2').hover(function(){
    if($('h2').hasClass('applyChange')){
    $(this).toggleClass('changable');
    }
    });

    $('#mapaa').click(function(){
    if($('h2').hasClass('applyChange')){
        $('#mapaa').toggleClass('open');
      if($('#mapaa').hasClass('open')){
        $('#mapaa').attr('src','img/cccc.jpg');
        $('#mapaa').fadeOut(0).fadeIn(1000);           
    } else {
        $('#mapaa').attr('src','img/EU-Czech_Republic.svg');
        $('#mapaa').fadeOut(0).fadeIn(1000);
    }
    }

    });

    $('#navOneClick').click(function(){
        if($('h2').hasClass('applyChange')){
        $('#navOneText').toggleClass('open');
        if($('#navOneText').hasClass('open')) {
            $('#navOneText').slideUp(1000);
        } else {
            $('#navOneText').slideDown(1000);
        }
    }   
    });

    $('#navTwoClick').click(function(){
        if($('h2').hasClass('applyChange')){
        $('#navTwoText').toggleClass('open');
        if($('#navTwoText').hasClass('open')) {
            $('#navTwoText').slideUp(1000);
        } else {
            $('#navTwoText').slideDown(1000);
        }  
    } 
    });

    $('#navThreeClick').click(function(){
        if($('h2').hasClass('applyChange')){
        $('#navThreeText').toggleClass('open');
        if($('#navThreeText').hasClass('open')) {
            $('#navThreeText').slideUp(1000);
        } else {
            $('#navThreeText').slideDown(1000);
        }   
    }
    });

    $('#navBasicClick').click(function(){
        if($('h2').hasClass('applyChange')){
        $('#navBasicText').toggleClass('open');
        if($('#navBasicText').hasClass('open')) {
            $('#navBasicText').slideUp(1000);
        } else {
            $('#navBasicText').slideDown(1000);
        }   
    }
    });
});
   
    /* Domácí úkol: 
     * 1. Najděte na stránce tajné a velmi nebezpečné tlačítko.
     * 2. Doplňte do následující události co nejoriginálněji kód jQuery tak, aby se stránka po stisku tlačítka proměnila k nepoznání.
     * Využijte k tomu co nejvíce různých kouzelných triků - tedy rozličných selektorů i metod.
     * 3. Nejoriginálnější a nejpropracovanější kouzlo něco vyhraje :-) 
     * 4. Zcela objektivně vše zhodnotí komise ve složení já a nová paní učitelka, kterou vám příště na dálku představím...
     * 5. Hodně zdaru! :-)
     */

