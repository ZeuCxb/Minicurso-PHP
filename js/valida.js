$(document).ready(function(){
	$('#send').click(function(){
		var nome = $('#nome').val();
		var email = $('#email').val();
		var pass = $('#pass').val();
		var passconf = $('#passconf').val();

		if(nome != '' && email != '' && pass != '' && passconf != '')
		{
			$('#nome').addClass('success');
			$('#nome').removeClass('error');
			$('#email').addClass('success');
			$('#email').removeClass('error');
			$('#pass').addClass('success');
			$('#pass').removeClass('error');
			$('#passconf').addClass('success');
			$('#passconf').removeClass('error');

			if(pass == passconf)
			{
				$('form').submit();
			}
			else
			{
				$('#pass').addClass('error');
				$('#pass').removeClass('success');
				$('#passconf').addClass('error');
				$('#passconf').removeClass('success');

				$('.alert').text('Senhas não correspondem!');

				$('.alert').fadeIn('slow', function() {
					$('.alert').css({
						display: 'block'
					});
				});
			}
		}
		else
		{
			if(nome == '')
			{
				$('#nome').addClass('error');
				$('#nome').removeClass('success');
			}
			else
			{
				$('#nome').addClass('success');
				$('#nome').removeClass('error');
			}

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

			if(passconf == '')
			{
				$('#passconf').addClass('error');
				$('#passconf').removeClass('success');
			}
			else
			{
				$('#passconf').addClass('success');
				$('#passconf').removeClass('error');
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