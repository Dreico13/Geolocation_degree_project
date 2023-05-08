<?php
include_once __DIR__."/connectDB.php";
class SqlServerInsert {
  
    private $conn;
    
    public function __construct() {
      $this->conn = new ConnectDB();
    }
    
    public function insertData($jsonData) {
      $stmt = $this->conn->getPDODB()->prepare("INSERT INTO MyTable (X, Y) VALUES (:x, :y)");
      foreach ($jsonData as $data) {
        $stmt->bindParam(':x', $data['X']);
        $stmt->bindParam(':y', $data['Y']);
        $stmt->execute();
      }
    }
    
  }
  
  

?>