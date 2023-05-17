<?php 
include("controlDB.php");
class clsConnectionDB {

    private $host = HOST;
    private $dbusername = DBUSERNAME;
    private $dbpassword = DBPASSWORD;
    private $dbname = DBNAME;
    public $db;

    public function __construct() {
        $this -> connectON();
    }

    private function connectON() {
        try {
            $this->db = new PDO("sqlsrv:Server=$this->host;database=$this->dbname", $this->dbusername, $this->dbpassword);
            $this -> db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
        } catch (Exception $error) {
            echo "No se ha podido conectar a la bd: ". $error -> getMessage();
        }
    }

    public function getPDODB(): PDO {
        return $this->db; // $this->conexionDB
    }
}


?>

