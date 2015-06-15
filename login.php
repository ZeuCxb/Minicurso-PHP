<?php
	if($_POST['pass'] && $_POST['email'])
	{
		
		$email = $_POST['email'];
		$senha = $_POST['pass'];
		$con = new PDO('mysql:host=127.0.0.1;dbname=miniphp', 'root', '');
		$qr = 'SELECT * FROM user WHERE user_email = "' . $email . '" && user_pass = "' . SHA1($senha) . '"';
		$sql = $con->prepare($qr);
		$sql->execute();
		if($sql->rowCount() === 1)
		{
			$row = $sql->fetch(PDO::FETCH_ASSOC);
			session_start();
			$_SESSION['id'] = $row['user_id'];
			$_SESSION['nome'] = $row['user_name'];
			$_SESSION['email'] = $row['user_email'];
			header('location:logado.php');
		}
		else
		{
			header('location:index.html');
		}
	}
	else
	{
		header('location:login.html');
	}
?>