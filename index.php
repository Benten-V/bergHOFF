<?php 
$con = mysqli_connect("localhost", "root", "", "leaderboard"); 

$result = mysqli_query($con, "SELECT userName, marks FROM leaderboard ORDER BY marks DESC"); 

$ranking = 1; 
?>