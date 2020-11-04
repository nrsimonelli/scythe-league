CREATE TABLE player (
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL
);

CREATE TABLE league (
	id SERIAL PRIMARY KEY,
	division VARCHAR (50) 
);

CREATE TABLE game (
	id SERIAL PRIMARY KEY,
	league_id INT REFERENCES league,
	game_number INT,
	finished BOOLEAN
);

CREATE TABLE league_player (
	league_id INT REFERENCES league,
	player_id INT REFERENCES player,
	points INT,
	first INT,
	second INT,
	third INT,
	fourth INT
);

CREATE TABLE game_player (
	game_id INT REFERENCES game,
	player_id INT REFERENCES player,
	faction VARCHAR (50),
	mat VARCHAR (50),
	bid INT,
	final INT,
	rank INT
);
