<?php
	//$: Criar variável
	$conecta = mysqli_connect("localhost", "root", "", "cadastro");
?>

<html>
	</head>
		<script type="text/javascript">
			function JaCadastradoEmailNome(){
				alert("Email e nome já cadastrodo");
				location.href="register.html";
			}
			function JaCadastradoNome(){
				alert("Nome já cadastrodo");
				location.href="register.html";
			}
			function JaCadastradoEmail(){
				alert("Email já cadastrodo");
				location.href="register.html";
			}

			function NaoCadastrado(){
				location.href="index.html";
			}
		</script>
	</head>
</html>

<?php

	if(!$conecta){

		echo"Não conectado com o servidor";
	}

	//Variáveis que recebem os valores do formulário
	$nome=$_POST['nome'];
	$email=$_POST['email'];
	$senha=$_POST['senha'];

	$sql = "SELECT  Nome, Email FROM dados";
	$result = $conecta->query($sql);

	$achouNome=false;
	$achouEmail=false;
	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	if($row["Nome"] == $nome){
		        $achouNome=true;
			}
			if($row["Email"] == $email){
		        $achouEmail=true;
			}
	    }
	}

	if($achouNome && $achouEmail){
		echo"<script>JaCadastradoEmailNome()</script>";
	}else if($achouNome){
		echo"<script>JaCadastradoNome()</script>";
	}else if($achouEmail){
		echo"<script>JaCadastradoEmail()</script>";
	}else{
		$sql = "INSERT INTO dados (Nome, Senha, Email)
		VALUES ('$nome', '$senha', '$email')";

		if ($conecta->query($sql) === TRUE) {
		    echo "New record created successfully";
		} else {
		    echo "Error: " . $sql . "<br>" . $conecta->error;
		}
		echo"<script>NaoCadastrado()</script>";

	}

	$conecta->close();
?>