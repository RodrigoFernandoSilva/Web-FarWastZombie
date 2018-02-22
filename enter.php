<html>
	</head>
		<script type="text/javascript">
			function LoginComSucesso(){
				location.href="FarWastZombie/FarWastZombie.html";
			}

			function NaoCadastrado(){
				alert("Usuário não cadastrodo");
				location.href="index.html";

			}
		</script>
	</head>
</html>

<?php
	//$: Criar variável
	$conecta = mysqli_connect("localhost", "root", "", "cadastro");
	
	if(!$conecta){

		echo"Não conectado com o servidor";
	}

	//Variáveis que recebem os valores do formulário
	$nome=$_POST['nome'];
	$senha=$_POST['senha'];

	$sql = "SELECT  Nome, Senha FROM dados";
	$result = $conecta->query($sql);

	$achou=false;
	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	if($row["Nome"] == $nome && $row["Senha"] == $senha){
		        $achou=true;
			}
	    }
	}

	if($achou){
		echo"<script>LoginComSucesso()</script>";
	}else{
		echo"<script>NaoCadastrado()</script>";

	}

	$conecta->close();
	
?>

<body>

</body>