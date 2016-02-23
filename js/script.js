$(document).ready(function() {
	$('.news-form').submit(function(){
		var category = $(this).find('.category-value').val();
		var url =  'https://ajax.googleapis.com/ajax/services/feed/find?v=1.0';
console.log(url);
		if (category == '') {
			$('.alert').html('Input category, please').addClass('alert-warning');
			return false;
		} else {
			$('.alert').html('').removeClass('alert-warning');
		};

		var data = {q: category};

		$.get(url, data, function(response){

			if (response.cod !== 200) {
				$('.alert').html(response.message).addClass('alert-danger');
				return false;
			}
			$('.alert').html('').removeClass('alert-danger');
			header("Access-Control-Allow-Origin: http://localhost:9000");

			console.log(response);

			$('.news h2').html(response.responseData.title );
			$('.current-news').html(response.responseData.url );
			console.log($('.news h2').html(123456 ));
			console.log(response.responseData.title);
			console.log($('.current-news').html('qwertyui'));
			console.log(response.responseData.url);
		});


		return false;
	});


	$('.news-form').submit();
});