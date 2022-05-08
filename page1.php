<?php
$a = 5;
$result = "we have yo no";
echo $result."".$a."and";
$b = 45;
echo $a + $b;
$names = array("xm","lol","gahs");
echo $names[0];
echo $names[1];
$fav = array("people"=>"dav","run"=>"43");
echo $fav['people'];
$do = array("coen","rost");
$com = array('online' => array('lol','baba'), 'look' => array('kaat', 'lala'));
echo $com['online'][1];
echo $com['look'][0];
define("msg", "my new consatnt");
echo msg;
$r ="4";
if($r && $a > 3){
    echo "goal";
}
elseif($r && $a === 6 ){
    echo "you are not identical";
}
elseif($r = 4){
    echo "this is the main boss";
}
else{
    echo "errro";
}
?>