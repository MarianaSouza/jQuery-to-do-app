
$(document).ready(function(){

	// Check Off Specific Todos By Clicking
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});

	//Creating a new task
	$("input[type='text']").keypress(function(event){
		//13 corresponds to the enter key
		if(event.which === 13){
			//grabbing new todo text from input
			var todoText = $(this).val();
			maximumLenght = 20;
			if(todoText.length > maximumLenght)
			{
			 alert("Your new task is too long, write a shorter one.");
				return;
			}else{
				//create a new li and add to ul
				$(this).val("");
				$("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> " + todoText + "<span class='edit'><i class='fa fa-edit'></i></span></li>");
			}
			
		}
	});

	//Click on edit to edit Todo
	$("ul").on("click", ".edit", function(event){
		var newTodoText = prompt("Edit the task.");
		maximumLenght = 20;
			if(newTodoText.length > maximumLenght)
			{
			 	alert("Your new task is too long, write a shorter one.");
				return false;
			}else{
				$(this).parent().replaceWith("<li><span class='delete'><i class='fa fa-trash'></i></span> " + newTodoText + "<span class='edit'><i class='fa fa-edit'></i></span></li>");
			}
		event.stopPropagation();
	});

	//Click on trash to delete Todo
	$("ul").on("click", ".delete", function(event){
		//To make the remove effect happens after the fade, we put it in a callback function
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		//to prevent event bubbling from span to its parents (li, ul, container, etc...), we use event.stopPropagation() method.
		event.stopPropagation();
	});

    

	$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle();
	});

});