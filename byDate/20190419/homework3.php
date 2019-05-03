<?php
	$uname = $_REQUEST["uname"];
	
	$upsw = $_REQUEST["upsw"];
	if($uname=="周运启" && $upsw=="123"){
		echo "正确";
	}else{
		echo "用户名或者密码不正确";
	}
?>