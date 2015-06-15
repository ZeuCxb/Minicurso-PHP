<?php

	if($_POST['nome'] && $_POST['email'])
	{
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$senha = $_POST['pass'];

		$con = new PDO('mysql:host=127.0.0.1;dbname=miniphp', 'root', '');

		$qr = 'INSERT INTO user(user_name, user_email, user_pass) VALUES("' . $nome . '", "' . $email . '", "' . SHA1($senha) . '")';

		$sql = $con->prepare($qr);

		$sql->execute();

		if($sql->rowCount() === 0)
		{
			die('Erro: Você já está cadastrado!');
		}
		else
		{
			header('location:login.html');
		}
	}
	else
	{
		header('location:index.html');
	}
	
?>