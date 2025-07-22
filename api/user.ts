import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../data/users'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.query;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ error: "Missing or invalid 'name' query parameter" });
    }

    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

    if (!user) {
        return res.status(404).json({ error: `User '${name}' not found` });
    }

    return res.status(200).json(user);
}
