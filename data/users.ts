import type { Game, RelayEvent, TeamName } from "./relayEvents";
import { relayEvents } from "./relayEvents";

export interface User {
    name: string;
    numRaces: RelayEvent[];   // Array of RelayEvents the user participated in
    wins: RelayEvent[];       // Array of RelayEvents the user won
    losses: RelayEvent[];     // Array of RelayEvents the user lost
    firstRelayRace: Date;
    gameCount: { [game in Game]?: number };  // Track count per game
    teams: TeamName[]
}


// Function to generate user stats 
function generateUserStats(relayEvents: RelayEvent[]): User[] {
    const users: { [name: string]: User } = {};

    relayEvents.forEach(event => {
        event.playerResults.forEach(playerResult => {
            const { name, win, playedGames, team } = playerResult;
            const splitNames = name.split("&").map(n => n.trim());

            splitNames.forEach(userName => {
                const u = users[userName] ||= {
                    name: userName,
                    numRaces: [],
                    wins: [],
                    losses: [],
                    firstRelayRace: event.date,
                    gameCount: {},
                    teams: []
                };

                // 1) Only add the race once:
                if (!u.numRaces.includes(event)) {
                    u.numRaces.push(event);
                }

                // 2) Add to wins or losses:
                if (win) {
                    if (!u.wins.includes(event)) u.wins.push(event);
                } else {
                    if (!u.losses.includes(event)) u.losses.push(event);
                }

                // 3) Track game counts:
                playedGames.forEach(game => {
                    u.gameCount[game] = (u.gameCount[game] || 0) + 1;
                });

                // 4) Update earliest race:
                if (event.date < u.firstRelayRace) {
                    u.firstRelayRace = event.date;
                }

                // 5) Allow duplicate team entries:
                u.teams.push(team);
            });
        });
    });

    return Object.values(users);
}




export const users = generateUserStats(relayEvents);
