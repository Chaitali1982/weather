
$('#submit').click(function() {

	$.ajax({
		url: "index.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#city').val(),
			
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#main').html(result ['weather'][0]['main']);
				$('#description').html(result['weather'][0]['description']);
				$('#pressure').html(result['main']['pressure']);
				$('#temprature').html(result['main']['temp']);
				$('#humidity').html(result['main']['humidity']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});
