$(document).ready(function(){
	$('#send').click(function(){
		var email = $('#email').val();
		var pass = $('#pass').val();

		if(email != '' && pass != '')
		{
			$('form').submit();
		}
		else
		{

			if(email == '')
			{
				$('#email').addClass('error');
				$('#email').removeClass('success');
			}
			else
			{
				$('#email').addClass('success');
				$('#email').removeClass('error');
			}

			if(pass == '')
			{
				$('#pass').addClass('error');
				$('#pass').removeClass('success');
			}
			else
			{
				$('#pass').addClass('success');
				$('#pass').removeClass('error');
			}

			$('.alert').text('Preencha todos os campos obrigatórios!');

			$('.alert').fadeIn('slow', function() {
				$('.alert').css({
					display: 'block'
				});
			});

		}
	});
});