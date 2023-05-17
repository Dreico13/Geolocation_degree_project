<?php
include_once __DIR__."/clsconnectionDB.php";
class clsInsertDB {
  
    private $conn;
    private $db;
    
    
    
    public function __construct() {
      $this->conn = new clsConnectionDB();
      $this -> db = $this -> conn -> getPDODB();
    }
    
    public function insertData($jsonData) {
      $stmt = $this->db ->prepare("INSERT INTO Geolocation (latitude, longitude) VALUES (:x, :y)");
      foreach ($jsonData as $data) {
        $stmt->bindParam(':x', $data['latitude']);
        $stmt->bindParam(':y', $data['longitude']);
        $stmt->execute();
      }
    }
    
  }
  
  

?>