  jQuery(function($){
      var filter = $('#delete-vk-form');
$(".vk-comments__delete").click( function() {
    $('input[name=comment_id]').val($(this).attr('data-comment'));
  
    filter.trigger('submit');
});
    
	$('#delete-vk-form').submit(function(){
		var filter = $('#delete-vk-form');
		$.ajax({
			url:filter.attr('action'),
			data:filter.serialize(), // form data
			type:filter.attr('method'), // POST
			beforeSend:function(xhr){
			    $(".vk-comments__delete").css("pointer-events", "none");
			    
			
			},
			success:function(data){
			     $(".vk-comments__delete").css("pointer-events", "auto");
			 const deletedBtn = $(`.vk-comments__delete[data-comment=${data}]`);
			    if(deletedBtn.hasClass('vk-comments__restore')) {
			          deletedBtn.removeClass("vk-comments__restore");
			        deletedBtn.text("Удалить");
			    } else {
			        deletedBtn.addClass("vk-comments__restore");
			        deletedBtn.text("Восстановить");
			    }
			    
		
			}
		});
		return false;
	});
    

});