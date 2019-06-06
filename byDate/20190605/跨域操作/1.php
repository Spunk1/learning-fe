<?php
header("Content-Type:application/javascript");
$fun = $_REQUEST["callback"];
$result="welcome";
echo $fun."('".$result."');"; 