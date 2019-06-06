<?php
header("Content-Typel:text/plain");
@$uname = $_REQUEST["uname"];
$sql = "select * from zqtest where uname = '$uname'";
$result= sql_execute($sql);
if(count($result)){
    echo "false";
}else{
    echo "true";
}