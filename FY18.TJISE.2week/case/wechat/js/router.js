$(function() {
	
	$("#dynamic").load("../page/chat-list.html")
	$.getScript("../js/chat.js");
	
	$("#a_moments").click(function(e){
		$("#dynamic").load($(this).data("target"))
		
		
		e.preventDefault(); //去掉或阻止  他原有的默认行为 . 
	})
	
})
