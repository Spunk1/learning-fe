<?php
    $uname = $_REQUEST["name"];
    $name = "zhouyunqi";
    if ($name == strtolower($uname)){
        echo "true";
    }else{
        echo "false";
    }
?>