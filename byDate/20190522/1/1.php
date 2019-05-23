<?php
	$cityarray = Array(
				["fid"=>"1","fname"=>"applemac"],
				["fid"=>"2","fname"=>"小米"],
                ["fid"=>"3","fname"=>"thinkpad"],
                ["fid"=>"4","fname"=>"华硕"],
                ["fid"=>"5","fname"=>"小新"],
                ["fid"=>"6","fname"=>"戴尔"],
                ["fid"=>"7","fname"=>"戴尔灵越"],
                ["fid"=>"8","fname"=>"e470"],
                ["fid"=>"9","fname"=>"华硕EH590"],
                ["fid"=>"10","fname"=>"神州战神"],
    );
            


	$opts = json_encode($cityarray);
	echo $opts;