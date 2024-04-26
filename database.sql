CREATE TABLE leaderboard (
    PlayerID INT AUTO_INCREMENT PRIMARY KEY,
    PlayerName VARCHAR(30) NOT NULL,
    Score INT NOT NULL,
    DateAchieved DATE
);