  jQuery(function($){
      var filter = $('#like-filter');
$("#like-btn").click( function() {
    filter.trigger('submit');
});
    
	$('#like-filter').submit(function(){
		var filter = $('#like-filter');
		$.ajax({
			url:filter.attr('action'),
			data:filter.serialize(), // form data
			type:filter.attr('method'), // POST
			beforeSend:function(xhr){
			    $("#like-btn").css("pointer-events", "none");
			    console.log('loading');
			
			},
			success:function(data){
			     $("#like-btn").css("pointer-events", "auto");
			     if($("#like-btn").hasClass( "article-banner__footer-action-item--active" )) {
			         let countLike = parseInt($("#like-btn").text());
			         if (!isNaN(countLike) && countLike){
			             countLike--;
			             $("#like-btn").text(countLike);
			             $("#like-btn").removeClass("article-banner__footer-action-item--active");
			         }
			     } else {
			          let countLike = parseInt($("#like-btn").text());
			        
			             countLike++;
			             $("#like-btn").text(countLike);
			             $("#like-btn").addClass("article-banner__footer-action-item--active");
			         
			     }
			    
			//	filter.find('button').text('Apply filter'); // changing the button label back
				//$('#response').html(data); // insert data
			}
		});
		return false;
	});
    

});