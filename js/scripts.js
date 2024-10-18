(function () {
	if (window.matchMedia("(max-width:960px)").matches) {
		return;
	}
	document.addEventListener("DOMContentLoaded", () => {
		function onEntry(entry) {
			entry.forEach((change) => {
				if (change.isIntersecting) {
					change.target.classList.add("active");
				}
			});
		}

		let options = {
			threshold: [0.5],
		};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = document.querySelectorAll(".bricks-item");

		for (let elm of elements) {
			observer.observe(elm);
		}
	});
})();

$(function() {
  $('#phone_mask').mask('+ 7 (000) 000-00-00');
  $('#phone_mask_two').mask('+ 7 (000) 000-00-00');
  $('#phone_mask_three').mask('+ 7 (000) 000-00-00');
  $('.phone').mask('+ 7 (000) 000-00-00');
  
});

(function($){
  $(window).on("load",function(){

    $(".menu_scroll a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      offset: 44,
        scrollSpeed: 130,
         scrollEasing: "easeInOutExpo",
         scrollingEasing: "easeInOutExpo",
      highlightSelector:".menu_scroll a"
    });
  });
	
})(jQuery);

function menu_open (open_close) {
    var menu_mobile = document.getElementById("menu_mobile");

    if (open_close == 'open') {
        menu_mobile.classList.remove("hidden_js");
        document.getElementById("body").style.overflowY= "hidden";

    } else {

        menu_mobile.classList.add("hidden_js");

        document.getElementById("body").style.overflowY= "scroll";
    }
}

document.addEventListener( 'wpcf7mailfailed', function( event ) {
  $('#exampleModal').modal('hide');
$('#modal_sent').modal('show');
    setTimeout("$('#modal_sent').modal('hide');",8000);
}, false );

function price_caculator( id, plus_minus ) {

  var price_block = document.getElementById("price_block_"+id);

  var price = document.getElementById("price_"+id);

  var price_number = document.getElementById("price_"+id).innerHTML;

  var price_all = document.getElementById("price_all").innerHTML;

  var count_services = document.getElementById("count_services").innerHTML;


  if ( plus_minus == 'plus' ) {

    $("#price_block_"+id).attr("onclick","price_caculator('"+id+"','minus')");

    price_block.classList.add("check");

    var price_calc = parseFloat(price_all)+parseFloat(price_number);

    $('#price_all').html(price_calc);

    var service_calc = parseFloat(count_services)+parseFloat(1);

    $('#count_services').html(service_calc);

  } else {

    $("#price_block_"+id).attr("onclick","price_caculator('"+id+"','plus')");

    price_block.classList.remove("check");

    var price_calc = parseFloat(price_all)-parseFloat(price_number);

    $('#price_all').html(price_calc);

    var service_calc = parseFloat(count_services)-parseFloat(1);

    $('#count_services').html(service_calc);

  }

}

function view_university ( open_close ) {

  if ( open_close == 'open' ) {

    $("#mobile_university").css('display', 'flex');

    $("#button_university").attr("onclick","view_university( 'close' )");

  } else {

    $("#mobile_university").css('display', 'none');

    $("#button_university").attr("onclick","view_university( 'open' )");

  }

}

function view_vuse( open_close ) {

  if ( open_close == 'open' ) {

    $("#mobile_vuse").css('display', 'block');

    $("#button_vuse").attr("onclick","view_vuse( 'close' )");

  } else {

    $("#mobile_vuse").css('display', 'none');

    $("#button_vuse").attr("onclick","view_vuse( 'open' )");

  }

}

const btnTextFree = document.querySelectorAll('.block_free_test .form_text .form .block_button input[type="submit"]');
btnTextFree.forEach(item => {
    item.value = 'Заказать сессию';
})

let tabBtn = document.querySelector('.tags__btn');
let tabList = document.querySelector('.tag-list');
tabBtn?.addEventListener('click', () =>{
  tabList.classList.add('active');
});

let contentTitleAll = document.querySelectorAll('.page-content .content-text h3');
let contentTitleLengh = contentTitleAll.length;
let i = 0;
contentTitleAll.forEach(el => {
  i++;
  if(contentTitleLengh % i == 0){
    el.classList.add('color-orange');
  }
});

let allNewsImg = document.querySelectorAll('.news_list .wp-post-image');
allNewsImg.forEach(el => {
  el.src = el.dataset.src;
});
console.log(allNewsImg);


$(function(){
	if(location.hash.length){
		var target=$('[https://di-help.ru/#prices="'+location.hash.substr(1)+'"]');
		if(!target.length)
			target=$(location.hash);
		
		if(target.length)
			$('html,body').animate({
				scrollTop:target.offset().top
			},300);
	};
});
