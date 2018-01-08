$(function(){
	$(".content_photo").each(function(){
		console.log("图片的路径 : "  + $(this).data("photo"))
		$(this).css('background-image' , 'url('+$(this).data("photo")+')')
	})
})
