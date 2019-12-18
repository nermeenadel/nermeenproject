 <?php
 if(isset($_GET['object'])){
	$person = json_decode($_POST['object'], true);
	echo json_decode($person);
	echo "all localStorage are send ";
}
$conn = new mysqli("localhost" , "root" , "root" , "test");
 	if($conn->connect_error)
 	{
 		die($conn->connect_error);
 	}
if(isset($_GET['db'])){
	 
if ($result = $mysqli->query("select * from person")){
    $rows = array();
    if($result->num_rows > 0){
     while($row = $result->fetch_assoc()){
      array_push($rows, $row);
     }
    echo json_encode($rows);
   }
 }
 else{
  echo "No Data to Retrieve";
 }
}
?>  