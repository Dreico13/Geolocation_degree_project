<?php

include_once __DIR__."/CoordinatesController/clsCoordinatesController.php";

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
        
        $result =  clsCoordinatesController::GetCoordinatesDB();
        clsCoordinatesController::InsertCoordinatesToLog(true);
        clsCoordinatesController::DeleteCoordinates(true);
        var_dump($result);
        

    }

}

?>