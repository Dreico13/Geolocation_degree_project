<?php

include_once("/opt/lampp/htdocs/M03_GEOLOCATIONPROJECT/GeoProject/backend/DbUtils/clsControllerDB.php");

class clsCoordinatesController {

//////////////////////////////////////////////////
    public static function GetCoordinatesDBinJSON()  {
        $obj_clsControllerDB = new clsControllerDb("sp_sap_get_coordinates_in_json");
        $result = $obj_clsControllerDB ->dbResponse();
        $array = json_decode($result,true);
        return $array;

    }
//////////////////////////////////////////////////
    public static function GetCoordinatesDBinXML() {
        $obj_clsControllerDB = new clsControllerDb("sp_sap_get_coordinates_in_xml");
        $result = $obj_clsControllerDB ->dbResponse();
        return $result;
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