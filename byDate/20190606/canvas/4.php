<?php
header('Content-Type: application/json; charset=utf-8');
$data = [];
$data[] = ["label"=>"一季度","value"=>"130"];
$data[] = ["label"=>"二季度","value"=>"230"];
$data[] = ["label"=>"三季度","value"=>"330"];
$data[] = ["label"=>"四季度","value"=>"180"];
echo json_encode($data);