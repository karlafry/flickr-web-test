<?php
class Flickr{

	public function getFlickrData()
	{
		$url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=chamonix%2cski%2csnow";

		$xmlFileData = file_get_contents($url);
		$xmlData = new SimpleXMLElement($xmlFileData);

		if($xmlData->count() > 0) {
			$jsonData = json_encode($xmlData);
			return $jsonData;
		}

		return false;
	}
}
?>