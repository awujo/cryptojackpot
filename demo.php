<?php 
$g = 1;
while($g < 7){
    echo "this is an increment $g  <br />" ;
    $g++;
}
$ss = "4";
do{
    echo "this is a loop" .$ss. "<br />";
    $ss++;
} while($ss > 3);
for($boo==6; $boss==10; $boo++){
    echo "the out but will be" .$boo. "<br />";
}
$do = array("go", "como", "see");
foreach($do as $dos){
    echo $dos. "<br />";
}
$today = "tueday";
switch($today){
    case "monday":
    case "wed":
    case "fri";
    case "etc";        
        echo "today is monday";
        break;
    case "tueday":
        echo "yes ti=oday is tueday";
        break;
    default: "we did not fine the day on our server";        
}
for($egg==3; $egg<10; $egg++){
    echo $egg;
    if($egg==5){
        break;
    }
}
for($fish==0; $fish<30; $fish++){
    if($fish==20 && $fish==25){
        continue;
        echo $fish;
    }
}
?>