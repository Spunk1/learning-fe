<?php
	$uname=$_REQUEST["uname"];
	if($uname == "admin"){
		echo "用户名已存在";
	}else{
		echo "通过";
	}

?>