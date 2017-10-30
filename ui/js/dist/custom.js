// Playground for the site begin 
// ========================================

jQuery(function($){
var windowWidth = $(window).width();

$(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
});
});

$(function(){

		// mob-tabbing

		// $(".mob-tabbing").click(function(){
			
		// 	$(this).next("ul").slideToggle();
		// 	$(this).toggleClass("ponkaa");

		// })

		$(".mob-tabbing").click(function(){
			
			$(".navigate").find(".navsec").slideToggle();
			$(this).toggleClass("ponkaa");

		})

		$('.mobSearch').click(function(){
			$('.mbox').slideToggle();
			// alert('98');
		})

		$(".mob-tabbing").click(function(){
			
			$(".mbox").slideUp();
		})

		$('.mobSearch').click(function(){
			$('.navsec').slideUp();
		})


		$('.filterbeta').click(function(){
			$('.searchfrmpeople').slideToggle();
		})

	})


	
	// this is just for sepcific two fields
	// Mock client code for testing purpose
            $(function(){
                // Client should be able to add another change event to the textfield
                // $("input[name='input1']").blur(function(){ alert("Custom event triggered."); });    
                // Client should be able to set the field's styles, without affecting place holder
                // $("textarea[name='input4']").css("color", "red");
                
                // Initialize placeholder
                $.Placeholder.init();
                
                // or try initialize with parameter
                //$.Placeholder.init({ color : 'rgb(255, 255, 0)' });
                
                // call this before form submit if you are submitting by JS
                //$.Placeholder.cleanBeforeSubmit();
            });

       // this is just for sepcific two fileds ends

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.firstnav > li').hover(function () {
	
    $(this).find('.droplist').stop().slideDown("slow");

}, function(){
    $('.droplist').stop().slideUp("slow");
});

// navigation hover script ends here

$(' .heading > .contact-togg').click(function () {
	
    $(this).siblings('.cform').stop().slideToggle(300,function(){
    	$("input[placeholder], textarea[placeholder]").each(function(i, e){
  if($(e).val() == "")
  {
   $(e).val($(e).attr("placeholder"));
  }
  $(e).blur(function(){
     if($(this).val()=="")
       $(this).val($(e).attr("placeholder"));
  }).focus(function(){
     if($(this).val() == $(e).attr("placeholder"))
        $(this).val("");
  });
 });
    });
    $(this).find('a').toggleClass('up'); 


});

// form script ends here



//$('input, textarea').placeholder();


// left aside toggle start

if ($(window).width() < 769){

		$ ('aside > ul').hide();

		$ ('aside > h2').click(function(){
		$(this).siblings('.leftnav').slideToggle('slow');
		$(this).toggleClass('lo'); 
	})
}

//left aside toggle ends
$(' .leftnav i').click(function () {
	
    $(this).siblings('ol').stop().slideToggle("slow");
    $(this).toggleClass('minus'); 
    console.log('clicked');

});

// side navigation script ends here


if($(window).width() < 768 ) {

    $(".keymember .nano").removeClass('nano');
};

if($(window).width() < 991 ) {

    $(".profilerighet.newsheight .nano").removeClass('nano');
};

$(".nano").nanoScroller();

// nano ends here

$(window).load(function(){
	//$('.jazz').slideUp();
});
$('.ftagert').click(function(){
	$('footer').addClass('fixedFooter');
	$(this).parents('.footerbar').fadeOut();
	$('.jazz').slideDown();
});

$('.lulClose').click(function(){

	$(this).parents('footer').find('.footerbar').fadeIn();
	$('.jazz').slideUp(500, function(){
	$('footer').removeClass('fixedFooter');
   


	});
});

// footer script ends here
	

	// flex sliders  start

	
	$('.newsoneslider').flexslider({
	directionNav: false,
	useCSS: true,
	slideshowSpeed: 3000, 
	animation: "slide",
	animationLoop: false  
	});

	$('.newstwoslider').flexslider({
	directionNav: false,
	useCSS: true,
	slideshowSpeed: 4000, 
	animation: "slide",
	animationLoop: false  
	});

	$('.newsthirdslider').flexslider({
	directionNav: false,
	useCSS: true,
	slideshowSpeed: 4000, 
	animation: "slide",
	animationLoop: false  
	});


	$('.newsfourthslider').flexslider({
	directionNav: false,
	useCSS: true,
	slideshowSpeed: 3000, 
	animation: "slide",
	animationLoop: false  
	});

$('.sliderone').flexslider({
	directionNav: false,
	// controlNav: false,
	useCSS: true,
  	// startAt: 1,
	animation: "slide"
});


$('.slidertwo').flexslider({
	directionNav: false,
	// controlNav: false,
	useCSS: true,
  	// startAt: 1,
  	slideshowSpeed: 3000, 
	animation: "slide",
  	animationLoop: false  
});


$('.sliderthree').flexslider({
	directionNav: false,
	// controlNav: false,
	useCSS: true,
  	// startAt: 1,
  	slideshowSpeed: 2500, 
	animation: "slide",
  	animationLoop: true  
});
	
	// partner slider
$('.pmslider').flexslider({
	controlNav: false,
	useCSS: true,
	animation: "slide",
  	animationLoop: false  
});
	
	// testislider start
$('.testislider').flexslider({
	directionNav: false,
	// controlNav: false,
	useCSS: true,
  	startAt: 1,
	animation: "slide"
});
		

		// flex sliders  ends

		// iframe start

		if($(window).width() < 640 ){

			$(".emailform").fancybox({
			fitToView	: false,
			width		: '90%',
			height		: '320',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});



}else if($(window).width() < 767 ) {

		$(".emailform").fancybox({
			fitToView	: false,
			width		: '90%',
			height		: '320',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
  
}else {
    $(".emailform").fancybox({
		fitToView	: false,
		width		: '40%',
		height		: '320',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
  }


	

		// iframe start

$(".video").fancybox({
		// maxWidth	: 800,
		// maxHeight	: 10,
		fitToView	: false,
		width		: '60%',
		height		: '400',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});




$(".tabContentContainer > div").hide();
$(".tabContentContainer > div:first-child").show();

$("ul.tabNavigation li").on("click", function(){

  var $this = $(this);
  if($(this).attr("class") != "active")

  {

      var $index = $this.index(); $index++;
      $this.addClass("active").siblings().removeClass("active");

      $(".tabContentContainer > div").hide();
      $(".tabContentContainer > div.content-"+$index).fadeIn();

  }  

})

// unifrom js start here
$('select').uniform();

$('.kaddu').click(function () {
    
    $( ".frmfiled" ).each(function( index ) {
    	var gg = $(this).find('.selector select option:first-child').text();
      $(this).find('.selector span').text(gg);
	  
	  $("select").val("reset");

	  $("input.forreset").val("");

	});
});


  $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        onClose: function(dateText, inst) { 
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, month, 1));
        }
    });

	var prm = Sys.WebForms.PageRequestManager.getInstance();

  prm.add_endRequest(function() { 
     $('select').uniform();
  });

// unifrom ends here






// hero images script

// $('.sliderbeta').flexslider({
// 	// directionNav: false,
// 	controlNav: false,
// 	useCSS: true,
//   	startAt: 1,
// 	nextText: "",
// 	prevText: "",  
// 	animationLoop: false,
// 	animation: "slide"
// });

// hero images script

 


 