
		      $(document).ready(function() {
				window.globalVar = " "; // GLobal Variable to Store the Bookmarks
				window.total = 0;	// GLobal Variable to Store the Count of Boolean
				
				
				$("#bookmark").click(function(event){//used for bookmarking word and also increasing the count 
					//$('h3').empty();
					if(globalVar != ' '){
						$('#bmark').append('<li style = "textAlign:left;cursor: pointer">'+globalVar+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x</li>');
					}
					if(globalVar != ' '){
						total = total + 1;
						//alert(total);
					$('#bhead').replaceWith('<p id = "bhead">Bookmarks('+window.total+')</p>');
					}
					event.preventDefault();
				});
				
				$('li').live('click', function () { // removing bookmarks of word
						var text = $(this).remove();
						total = total - 1;
						if(total == 0){
						$('#bhead').replaceWith('<p id = "bhead">Bookmarks</p>');
						}
						else{
						$('#bhead').replaceWith('<p id = "bhead">Bookmarks('+total+')</p>');	
						}
				});
				

				
			$("#btnSubmit").click(function(event){ // click function associated with the button			
			var text = $("#input").val();
			//alert(text);	
			if(text != ''){	
			myfunc(text);
			}
			else{
				alert('Please Enter the Word to be Searched')
			}
			event.preventDefault();
			});
			});	
			
			
			function myfunc(text) { // function to get the json response of word meaning and displaying it in the div elements
			globalVar = $("#input").val();
			$('div #wordmeaning').remove();					
			$('#add').append('<div id = "result"> &nbsp;&nbsp;&nbsp;&nbsp;	Loading Results ...............</div>');
		 		$.ajax({
		          url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term='+text,
		          type: 'GET',
		          dataType: 'json',
				  crossDomain: true, // added cross domain attr
		          success: function(data) {
					$('#result').remove(); 
				  	$.each(data.list, function(index) {
					$('#add').append('<div style="margin:5px; max-width:600px; border: solid 2px steelblue;padding:10px; display: block" id = "wordmeaning"><li>Word:&nbsp;&nbsp;&nbsp;'+data.list[index].word+'</li><li>Meaning:&nbsp;&nbsp;&nbsp;'+data.list[index].definition+'</li></div>'); 
					});
				},
		          error: function() { alert('boo!'); },
		          beforeSend: setHeader
		        });
		      
			  

		      function setHeader(xhr) {
		        xhr.setRequestHeader('X-Mashape-Key', 'VrZBZyMZUWmshpR4iecrjq6XQCmnp1Oar7QjsnbknMXfI5U2IS'); 
		      }
		}
		        
		  
