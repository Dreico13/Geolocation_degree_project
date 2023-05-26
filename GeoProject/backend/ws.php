<?php

include_once __DIR__."/KML/dataKML.php";
include_once __DIR__."/CoordinatesController/clsCoordinatesController.php";

// $obj = new XMLprueba();

if (isset($_REQUEST["coordinates"])) {

    $coordinates = $_REQUEST["coordinates"];

    $data = json_decode($coordinates);

    $longitude = $data->Longitude;
    $latitude = $data->Latitude;

    clsCoordinatesController::InsertCoordinatesDB($longitude, $latitude,true);
    echo "Success";
    

} else if (isset($_REQUEST["stopNavigation"])) {

    $stopNavigation = $_REQUEST["stopNavigation"];

    $data = json_decode($stopNavigation);

    if ($data -> state) {
        
        $result =  clsCoordinatesController::GetCoordinatesDBinJSON();
        clsCoordinatesController::InsertCoordinatesToLog(true);
        clsCoordinatesController::DeleteCoordinates(true);

        echo json_encode($result);
        
        

    }

}

?>