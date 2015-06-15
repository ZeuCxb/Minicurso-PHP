<?php
	session_start();
	if($_SESSION['id'])
	{
		echo 'Bem vindo ' . $_SESSION['nome'];
		echo '<a href="logout.php">Logout</a>';
	}
	else
	{
		header('location:index.html');
	}
?>