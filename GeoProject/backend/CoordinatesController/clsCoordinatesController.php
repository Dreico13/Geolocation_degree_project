<?php

include_once("/opt/lampp/htdocs/M03_GEOLOCATIONPROJECT/GeoProject/backend/DbUtils/clsControllerDB.php");

class clsCoordinatesController {

//////////////////////////////////////////////////
    public static function GetCoordinatesDB()  {
        $obj_clsControllerDB = new clsControllerDb("sp_sap_get_coordinates");
        $result = $obj_clsControllerDB ->dbResponse();
        $array = json_decode($result,true);
        return $array;

    }

/////////////////////////////////////////////////
    public static function InsertCoordinatesDB($pLongitude, $pLatitude,$pIsInsert) {

        new clsControllerDb("sp_sap_insert_coordinates", [$pLongitude, $pLatitude], $pIsInsert);
        
    }
////////////////////////////////////////////////
    public static function InsertCoordinatesToLog($pIsInsert) {
        new clsControllerDb("sp_sap_insert_logs",[],$pIsInsert);
    }
///////////////////////////////////////////////
    public static function DeleteCoordinates($pDelete) {
        new clsControllerDb("sp_sap_delete_coordinates",[],$pDelete);
    }
    

}

?>