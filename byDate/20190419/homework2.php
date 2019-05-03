<?php
	$uname = $_REQUEST["uname"];
	if($uname == "周运启"){
		echo "用户名已存在";
	}else{
		echo "通过";
	}
?>