<?php 
$con = mysqli_connect("localhost", "root", "", "database"); 

$result = mysqli_query($con, "SELECT userName, marks FROM leaderboard ORDER BY marks DESC"); 

$ranking = 1; 

echo '<!DOCTYPE html>
<html>
<head>
    <title>LeaderBoard</title>
</head>
<body>
    <h2>Welcome To GFG</h2>
    <table>
        <tr>
            <td>Ranking</td>
            <td>UserName</td>
            <td>Marks</td>
        </tr>';

if (mysqli_num_rows($result)) { 
    while ($row = mysqli_fetch_array($result)) { 
        echo "<tr>
                <td>{$ranking}</td> 
                <td>{$row['userName']}</td> 
                <td>{$row['marks']}</td>
            </tr>"; 
        $ranking++; 
    } 
} 

echo '</table>
</body>
</html>';
?>
