$(document).ready(function() {
	$('.news-form').submit(function(){
		var category = $(this).find('.category-value').val();

		if (category == '') {
			$('.alert').html('Input category, please').addClass('alert-warning');
			return false;
		} else {
			$('.alert').html('').removeClass('alert-warning');
		};


		$.ajax({
			url: 'https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&key=AIzaSyCgQ9a9_4cMraxuXYzsigKE5rtAsdlHfA4',
			type: 'POST',
			crossDomain: true,
			dataType: 'jsonp',
			data: {q: category},
		  error: function(xhr, textStatus, errorThrown) {
				console.log("error");
	    },
		  complete: function(xhr, textStatus) {
				console.log("complete");
		  },
		  success: function(response, textStatus, xhr) {
				console.log("success");

				if (response.responseStatus !== 200) {
					$('.alert').html(response.message).addClass('alert-danger');
					return false;
				}
				$('.alert').html('').removeClass('alert-danger');

				$('h2').html('Category: ' + category);
				$('.news').html('');

				for (var i = 0; i < response.responseData.entries.length; i++) {
					var resplink = response.responseData.entries[i].link;
					var resptitle = response.responseData.entries[i].title;
					var respContent = response.responseData.entries[i].contentSnippet;

					$('.news').append($('<a href="'+resplink+'"></a>').append($('<h3></h3>').html(resptitle)));
					$('.news').append($('<p></p>').html(respContent));
				}
	    }
		})
		return false;
	});


	$('.news-form').submit();
});
