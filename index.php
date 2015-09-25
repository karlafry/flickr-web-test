<?php

if ( $_SERVER['REQUEST_METHOD'] == 'POST' )
{
	if ( array_key_exists('flickr', $_POST))
	{
		require_once "inc/Flickr.php";
		$flickr = new Flickr();

		$photos = $flickr->getFlickrData();
		header("Content-Type: application/json");
		echo $photos;
		die();
	}
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="initial-scale=1,minimum-scale=1,width=device-width">
		<link rel="stylesheet" href="css/default.css" type="text/css" media="screen" />

		<title>Flickr Test</title>		
	</head>

	<body>
		
		<header></header>

		<section id="images" class="inner-container"></section>

		<footer></footer>

		<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="js/js.js"></script>
		
	</body>
</html