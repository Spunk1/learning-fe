<?php
	//echo "<option value=0>黑龙江</option>
	//		<option value=1>吉林</option>
	//		<option value=2>辽宁</option>";
	
	//数组法
	$array = ["黑龙江","吉林","辽宁"];  //定义数组
	$opts = "";                         //定义一个字符串
	for($i=0;$i<count($array);$i++){
		$opts.="<option value='$i'>$array[$i]</option>";
		
	}
	echo $opts;
?>