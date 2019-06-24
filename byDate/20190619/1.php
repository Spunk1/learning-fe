<?php
header("Content-Type:application/json; charset=utf-8");
$rows = [];
$rows[] = ["name" => "tom"];
$rows[] = ["name" => "kk"];
$rows[] = ["name" => "ff"];
$rows[] = ["name" => "gg"];

echo json_encode($rows);