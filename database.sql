CREATE DATABASE leaderboard;

USE leaderboard;

CREATE TABLE leaderboard (
    userName VARCHAR(30),
    marks INT(10),
    dateAchieved DATE
);

INSERT INTO leaderboard (userName, marks, dateAchieved) VALUES ('BentenV', 100, '2024-05-13');
