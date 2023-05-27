<?php

include("/opt/lampp/htdocs/M03_GEOLOCATIONPROJECT/GeoProject/backend/Interfaces/ControllerDataBaseInterface.php"); 
include_once __DIR__."/clsConnectionDB.php";


class clsControllerDb implements ControllerDataBaseInterface {

    private PDO $db;
    private clsConnectionDB $obj_connectionDB;
    private $request;
    private bool $isInsertOrIsDelete;
    private array $procedureData;

////////////////////////////////////////////

    public function __construct(string $pName_procedure, array $pParams = [], bool $pIsInsertOrIsDelete = false)
    {
        $this -> obj_connectionDB = new clsConnectionDB();
        $this -> isInsertOrIsDelete = $pIsInsertOrIsDelete;
        $this -> db = $this -> obj_connectionDB -> getPDODB();
        $this -> init($pName_procedure, $pParams);
        
    }

//////////////////////////////////////////

    private function init(string $pName_procedure, array $pParams = []) {
        $this -> prepareProcedure($pName_procedure,$pParams);
        $this -> executeProcedure();
        //Utilizamos esta variable para Indicar que hay un insert, de esta manera el fetch no tiene que devolver ningun campo
        if (!$this -> isInsertOrIsDelete) {
            $this -> fetchExecutionProcedure();
        }
        
    }

//////////////////////////////////////////

    public function prepareProcedure(string $name_procedure, array $params = []): void
    {
        
        if (count($params) == 0) {
            
            $this -> request = $this -> db -> prepare("EXEC ".$name_procedure);
        
        } else {
            $name_procedure_modificated = $this -> setInterrogation($name_procedure, $params);
            $this -> request = $this -> db -> prepare("EXEC ".$name_procedure_modificated);

            foreach ($params as $key => $value){
                
                $this -> request -> bindValue($key+1,$value);
            }
            
        }
    }

//////////////////////////////////////////

    private function setInterrogation(string $pNameProcedure , array $pParams) {
        
        for ($i = 0; $i < count($pParams);$i++) {
            
            if ($i == count($pParams)-1) {
                $pNameProcedure = $pNameProcedure." ?";
                break;
            }
            $pNameProcedure = $pNameProcedure." ? ,";
        }
        return $pNameProcedure;
    }

//////////////////////////////////////////

    public function executeProcedure(): void
    {
        $this -> request -> execute();
        
    }

//////////////////////////////////////////

    public function fetchExecutionProcedure() : void
    {

        $this -> procedureData = $this -> request -> fetchAll(PDO::FETCH_ASSOC);
    }

/////////////////////////////////////////

    public function dbResponse() {
        
        if (isset($this -> procedureData)) {

            if (count($this -> procedureData) > 1) {

                $arr_coordinates = [];
                foreach($this -> procedureData as $value) {
                    foreach($value as $coordinates) {
                        array_push($arr_coordinates,$coordinates);
                    }
                }

                $concatenarCoordenadas = "";
                foreach ($arr_coordinates as $coordinates) {
                    $concatenarCoordenadas .= $coordinates;
                }

                return $concatenarCoordenadas;
    
            } else {
    
                foreach($this -> procedureData[0] as $value) {
                    $coordinates = $value;
                }
                
                return $coordinates;
            }
        }  
    }

//////////////////////////////////////////
    public function responseInXML() {

        if (isset($this -> procedureData)) {

            foreach ($this -> procedureData[0] as $value) {
                $xml_coordinates = $value;
            }

            return $xml_coordinates;
        }
    }


}

?>