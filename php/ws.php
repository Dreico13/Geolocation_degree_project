<?php

include_once __DIR__."/db/clsconnectionDB.php";
include_once __DIR__."/db/clsInsertDB.php";

$json = '[{"latitude":1.4,"longitude":2.6}]';
$data = json_decode($json, true);

$conect = new clsInsertDB();

$conect -> insertData($data);






?>