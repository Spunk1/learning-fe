<?php
	#接收客户端请求过来的数据
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];
	#拼成“欢迎XXX”响应回去
	echo "欢迎$uname";
?>