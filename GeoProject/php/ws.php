<?php

include_once __DIR__."/db/clsconnectionDB.php";
include_once __DIR__."/db/clsInsertDB.php";

$q = $_REQUEST["q"];

$coordinates = $q;

// echo "Hola, Longitude:". $coordinates -> {"Longitude"} . " Latitude:". $coordinates -> {"Latitude"};

$data = json_decode($coordinates);

$longitude = $data->Longitude;
$latitude = $data->Latitude;

echo "Longitude: " . $longitude . "-";
echo "Latitude: " . $latitude;

// $coordinates = json_decode($q);

// echo "Hola, Longitude:" . $coordinates -> Longitude . " Latitude:". $coordinates -> Latitude;

// $json = '[{"latitude":1.4,"longitude":2.6}]';
// $data = json_decode($json, true);

// $conect = new clsInsertDB();

// $conect -> insertData($data);



?>