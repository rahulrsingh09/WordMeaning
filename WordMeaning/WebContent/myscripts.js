
		      $(document).ready(function() {
				window.globalVar; // GLobal Variable to Store the Bookmarks
				window.total = 0;	// GLobal Variable to Store the Count of Boolean
				
				
				$(".dap_button_bookmark").click(function(){//used for bookmarking word and also increasing the count 
				globalVar = $(".dap_text_box").val();
					//$('h3').empty();
					if(globalVar != ''){
					$('#add').append('<li>' + globalVar+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X<li>');
					}
					if(globalVar != ''){
						total = total + 1;
					$('nav h3').replaceWith('<h3>Bookmarks('+total+')</h3>');
					}
					$('.dap_text_box').val('');
				});
				
				$('li').live('click', function () { // removing bookmarks of word
						var text = $(this).remove();
						total = total - 1;
						if(total == 0){
						$('nav h3').replaceWith('<h3>Bookmarks</h3>');
						}
						else{
						$('nav h3').replaceWith('<h3>Bookmarks('+total+')</h3>');	
						}
				});
				

				
			$(".dap_button").click(function(){ // click function associated with the button
			
			var text = $(".dap_text_box").val();
			//alert(text);			
			myfunc(text);			
			});
			});	
			
			
			function myfunc(text) { // function to get the json response of word meaning and displaying it in the div elements
			globalVar = $(".dap_text_box").val();
			$('main #dap_div').remove();
			$('.dap_text_box').val('');
			$('main').append('<div id = "result"> &nbsp;&nbsp;&nbsp;&nbsp;	Loading Results ...............</div>');
		 		$.ajax({
		          url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term='+text,
		          type: 'GET',
		          dataType: 'json',
		          success: function(data) {
				  $('main #result').remove();
				  $.each(data.list, function(index) {
				$('main').append('<div id = "dap_div"><li>' + 'Word :&nbsp;'+ data.list[index].word +'&nbsp' +'</li><li>Meaning : &nbsp'+data.list[index].definition+'&nbsp;</li></div>'); 
				});
			},

		          error: function() { alert('boo!'); },
		          beforeSend: setHeader
		        });
		      
			  

		      function setHeader(xhr) {
		        xhr.setRequestHeader('X-Mashape-Key', 'VrZBZyMZUWmshpR4iecrjq6XQCmnp1Oar7QjsnbknMXfI5U2IS'); 
		      }
		}
		        
		  
