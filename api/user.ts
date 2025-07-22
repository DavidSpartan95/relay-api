import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../data/users'
import type { RelayEvent } from '../data/relayEvents'

type UserResponse = Omit<(typeof users)[number], 'firstRelayRace'> & {
  firstRelayRace: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ error: "Missing or invalid 'name' query parameter" });
    }

    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

    if (!user) {
        return res.status(404).json({ error: `User '${name}' not found` });
    }

    const event = user.numRaces.find((e: RelayEvent) => e.date.getTime() === user.firstRelayRace.getTime());

    const responseUser: UserResponse = {
        ...user,
        firstRelayRace: event ? `${event.year} ${event.difficulty}` : "Unknown"
    };

    return res.status(200).json(responseUser);
}
