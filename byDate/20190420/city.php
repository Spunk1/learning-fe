<?php
	$value = $_REQUEST["value"];
	$cityarray = [
				["长春市","吉林市","四平市","白城市"],
				["哈尔滨市","齐齐哈尔市","牡丹江市","佳木斯市"],
				["沈阳市","大连市","鞍山市","抚顺市"]
			];
			
	$city = $cityarray[$value];
	$opts = "";
	for ($i=0;$i<count($city);$i++){
		$opts .= "<option>$city[$i]</option>";
		
	}
	echo $opts;
?>