-- Anexation Sports: Initial DB Schema

CREATE TABLE sports (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE leagues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    sport_id INTEGER REFERENCES sports(id)
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    league_id INTEGER REFERENCES leagues(id)
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    team_id INTEGER REFERENCES teams(id),
    position VARCHAR(50),
    nationality VARCHAR(50)
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    league_id INTEGER REFERENCES leagues(id),
    home_team_id INTEGER REFERENCES teams(id),
    away_team_id INTEGER REFERENCES teams(id),
    start_time TIMESTAMP,
    status VARCHAR(20)
);

CREATE TABLE match_events (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches(id),
    event_type VARCHAR(50),
    event_time INTEGER,
    player_id INTEGER REFERENCES players(id),
    team_id INTEGER REFERENCES teams(id),
    description TEXT
);

CREATE TABLE standings (
    id SERIAL PRIMARY KEY,
    league_id INTEGER REFERENCES leagues(id),
    team_id INTEGER REFERENCES teams(id),
    position INTEGER,
    points INTEGER,
    played INTEGER,
    won INTEGER,
    drawn INTEGER,
    lost INTEGER
);

CREATE TABLE user_preferences (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(100),
    favorite_team_id INTEGER REFERENCES teams(id),
    favorite_league_id INTEGER REFERENCES leagues(id),
    notifications BOOLEAN DEFAULT FALSE
);