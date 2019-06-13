<?php
/* 1. 获取上传文件的所有信息 */
/* 2. 文件名/文件大小/文件类型/临时文件放哪里 */

// 1.判断是否上传成功 （如果$_FILES为 null上传失败）
if(!empty($_FILES["myfile"])){
// 2.获取文件名
    $filename = $_FILES["myfile"]["name"];
// 3.获取文件大小
    $filesize = $_FILES["myfile"]["size"];
// 4.文件大小超过2MB不允许上传
    if($filesize>2097152){
        die('{"code":-1,"msg":"上传文件超过2MB"}');
    }
// 5.判断文件类型 :图片
$type = strstr($filename,".");
if($type!=".gif"&&$type!=".png"&&$type!=".jpg"){
    die('{"code":-1,"msg":"上传文件格式不正确"}');
}
// 6.重新创建文件名
$pice = time().rand(1,9999).$type;
// 7.将临时文件移动到指定目录
$src = $_FILES["myfile"]["tmp_name"];
$des = "upload/".$pice;
move_uploaded_file($src,$des);
// 8.上传成功
echo('{"code":1,"msg":"文件上传成功"}');
}
