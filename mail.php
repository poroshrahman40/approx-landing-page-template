<?php
$to = $_REQUEST['email'];

$subject = "Appril Template: ".$_REQUEST['subject'];
$message = "
<html>
<head>
<title>Appril Email Template Sent</title>
</head>
<body>
<p>Hi ".$_REQUEST['name']." !</p>
<p>Your Phone:".$_REQUEST['phone']."</p>
<p>Your message:".$_REQUEST['message']."</p>
<p>It's has been forwared to your concern department.</p>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@Appril.com>' . "\r\n";
$headers .= 'Cc: info@bitspeck.com' . "\r\n";

mail($to,$subject,$message,$headers);
?>