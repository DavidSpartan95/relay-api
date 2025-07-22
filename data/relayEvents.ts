// data/relayEvents.ts
export enum Game {
    HaloCE = 'Halo CE',
    Halo2 = 'Halo 2',
    Halo3 = 'Halo 3',
    Halo3ODST = 'Halo 3: ODST',
    Halo4 = 'Halo 4',
    HaloReach = 'Halo Reach',
    Halo5 = 'Halo 5',
    HaloInfinite = 'Halo Infinite'
}

export enum Difficulty {
    Easy = 'Easy',
    Legendary = 'Legendary'
}

export enum TeamName {
    Green = 'Green',
    Gold = 'Gold',
    Red = 'Red',
    Blue = 'Blue'
}

export enum TypeOfSource {
    Exel = 'Exel Sheet',
    Image = 'Image',
    Video = 'Video',
    Other = 'Other'
}

export interface PlayerResult {
    name: string
    team: TeamName
    win: boolean
    playedGames: Game[]
}

export interface TeamResult {
    name: TeamName
    time: string
}

export interface RelayEvent {
    year: number
    date: Date
    difficulty: Difficulty
    playedGames: Game[]
    winningTeam: TeamName
    teamResults: TeamResult[]
    playerResults: PlayerResult[]
    source?: Source[]
    timeMethod: String
}

export interface Source {
    name: string
    type: TypeOfSource
    link: URL 
}

export const relayEvents: RelayEvent[] = [
    {
        year: 2014,
        date: new Date("2014-11-22"),
        difficulty: Difficulty.Legendary,
        playedGames: [Game.HaloCE, Game.Halo2, Game.Halo3],
        winningTeam: TeamName.Green,
        teamResults: [
            {
                name: TeamName.Green,
                time: "5:31:13"
            },
            {
                name: TeamName.Gold,
                time: "5:39:09"
            }
        ],
        playerResults: [
            {
                name: "Sol",
                team: TeamName.Green,
                win: true,
                playedGames: [Game.HaloCE]
            },
            {
                name: "Hockeyfan",
                team: TeamName.Green,
                win: true,
                playedGames: [Game.Halo2]
            },
            {
                name: "Alienflow",
                team: TeamName.Green,
                win: true,
                playedGames: [Game.Halo3]
            },
            {
                name: "Scurty",
                team: TeamName.Gold,
                win: false,
                playedGames: [Game.HaloCE]
            },
            {
                name: "Monopoli",
                team: TeamName.Gold,
                win: false,
                playedGames: [Game.Halo2]
            },
            {
                name: "TheBlazeJP",
                team: TeamName.Gold,
                win: false,
                playedGames: [Game.Halo3]
            },
        ],
        source: [{
            name: "Legendary Relay Race 2014",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=vSvVWHNeB38")
        }],
        timeMethod: "RTA"
    },
    {
        year: 2015,
        date: new Date("2015-10-25"),
        difficulty: Difficulty.Easy,
        playedGames: [Game.HaloReach, Game.HaloCE, Game.Halo2, Game.Halo3, Game.Halo3ODST, Game.Halo4],
        winningTeam: TeamName.Blue,
        teamResults: [
            {
                name: TeamName.Red,
                time: "Unknown"
            },
            {
                name: TeamName.Green,
                time: "Unknown"
            },
            {
                name: TeamName.Blue,
                time: "Unknown"
            }
        ],
        playerResults: [
            {
                name: "Wolfy",
                team: TeamName.Red,
                win: false,
                playedGames: [Game.HaloReach]
            },
            {
                name: "Sol",
                team: TeamName.Red,
                win: false,
                playedGames: [Game.HaloCE]
            },
            {
                name: "Hockeyfan",
                team: TeamName.Red,
                win: false,
                playedGames: [Game.Halo2]
            },
            {
                name: "Legendary Robb",
                team: TeamName.Red,
                win: false,
                playedGames: [Game.Halo3ODST]
            },
            {
                name: "Deadrain",
                team: TeamName.Red,
                win: false,
                playedGames: [Game.Halo3]
            },
            {
                name: "HaoleCake",
                team: TeamName.Red,
                win: false,
                playedGames: [Game.Halo4]
            },
            //Green Team
            {
                name: "Halodude",
                team: TeamName.Green,
                win: false,
                playedGames: [Game.HaloReach]
            },
            {
                name: "GarishGoblin",
                team: TeamName.Green,
                win: false,
                playedGames: [Game.HaloCE]
            },
            {
                name: "NadeshotsCats",
                team: TeamName.Green,
                win: false,
                playedGames: [Game.Halo2]
            },
            {
                name: "Davco",
                team: TeamName.Green,
                win: false,
                playedGames: [Game.Halo3ODST]
            },
            {
                name: "Nagato",
                team: TeamName.Green,
                win: false,
                playedGames: [Game.Halo3]
            },
            {
                name: "BadMonsterz",
                team: TeamName.Green,
                win: false,
                playedGames: [Game.Halo4]
            },
            //Blue Team
            {
                name: "Backflip",
                team: TeamName.Blue,
                win: true,
                playedGames: [Game.HaloReach]
            },
            {
                name: "Savusukka",
                team: TeamName.Blue,
                win: true,
                playedGames: [Game.HaloCE]
            },
            {
                name: "Reraised",
                team: TeamName.Blue,
                win: true,
                playedGames: [Game.Halo2]
            },
            {
                name: "A Royal Hobo",
                team: TeamName.Blue,
                win: true,
                playedGames: [Game.Halo3ODST]
            },
            {
                name: "StuffedCrustFTW",
                team: TeamName.Blue,
                win: true,
                playedGames: [Game.Halo3]
            },
            {
                name: "Egg92",
                team: TeamName.Blue,
                win: true,
                playedGames: [Game.Halo4]
            },
        ],
        source: [{
            name: "Screenshot",
            type: TypeOfSource.Image,
            link: new URL("https://gyazo.com/62df449ac666792a653dee7194c994a8")
        },
        {
            name: "Discord screenshot",
            type: TypeOfSource.Image,
            link: new URL("https://imgur.com/a/6r3iNYy")
        }
        ],
        timeMethod: "???"
    },
    {
        year: 2016,
        date: new Date("2016-10-29"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloReach,
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3ODST,
            Game.Halo3,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            {
                name: TeamName.Red,
                time: "9:52:30",
            },
            {
                name: TeamName.Green,
                time: "9:42:06",
            },
            {
                name: TeamName.Blue,
                time: "9:58:38",
            },
        ],
        playerResults: [
            // Red Team
            { name: "Backflip", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Sol", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "Reraised", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Legendary Robb ", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Deadrain", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "BadMonsterz", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "Hoshka", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },

            // Green Team — Winning team
            { name: "Pedrogas", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "ColdGrunter", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },
            { name: "Willzorss", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "Nagato", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Alienflow & OozyGorilla & NarrowKS", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Egg92", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Halodude", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Savusukka", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "NadeshotsCats", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Davco", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Hiipfire & StuffedCrustFTW & Fingerquick", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "HaoleCake", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "Blarg N Flarg", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Part 1 Easy Relay Race 2016",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=1_vP3gWOOz8")
        },
        {
            name: "Part 2 Easy Relay Race 2016",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=27bCJW7DvmI")
        }
        ],
        timeMethod: "RTA"
    },
    {
        year: 2017,
        date: new Date("2017-11-05"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloReach,
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3ODST,
            Game.Halo3,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            {
                name: TeamName.Red,
                time: "9:12:14",
            },
            {
                name: TeamName.Green,
                time: "9:17:46",
            },
            {
                name: TeamName.Blue,
                time: "9:17:25",
            },
        ],
        playerResults: [
            // Red Team — Winning Team
            { name: "Jangoosed", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },
            { name: "00Svo", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "AFilthyCasual", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "Nonstop_Bop", team: TeamName.Red, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Paradoxxic & Sorix", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "VoidsInSilver", team: TeamName.Red, win: true, playedGames: [Game.Halo4] },
            { name: "Hoshka", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },

            // Green Team
            { name: "Wolfy", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "Sub_Whistle", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Aster", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Nagato", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Bhayward2000 & TheBlazeJP", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "Egg92", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Pedrogas", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "MikeHawke420", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Reraised", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Davco", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Sasquatch & Harc", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Jon and Pon", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Easy Relay Race 2017",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=QpVSrXupqpA")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1Lkq6SW4mX8wQAgNeabdITHXX0lyJ_lUuV-VSd1hqQgY/edit?gid=0#gid=0")
        },
        {
            name: "Sorix 99 fishing",
            type: TypeOfSource.Video,
            link: new URL("https://www.twitch.tv/haloraces/clip/RespectfulBadBatAMPEnergy")
        },
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2018,
        date: new Date("2018-12-01"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloReach,
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3ODST,
            Game.Halo3,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            {
                name: TeamName.Red,
                time: "8:54:23",
            },
            {
                name: TeamName.Green,
                time: "9:16:15",
            },
            {
                name: TeamName.Blue,
                time: "9:36:39",
            },
        ],
        playerResults: [
            // Red Team — Winning Team
            { name: "Jangoosed", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },
            { name: "Sub_Whistle", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "Dubhzo", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "Adversary", team: TeamName.Red, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Sorix", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "Egg92", team: TeamName.Red, win: true, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },

            // Green Team
            { name: "Pedrogas", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "Maxlew", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Aster", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "welshevo79", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Paradoxxic", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "A Royal Hobo", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Wolfy", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Chronos", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "AFilthyCasual", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Legendary Robb", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Harc", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Skull Kid 2112", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Clip near the end",
            type: TypeOfSource.Video,
            link: new URL("https://clips.twitch.tv/SpinelessHomelyKiwiGrammarKing")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1Lkq6SW4mX8wQAgNeabdITHXX0lyJ_lUuV-VSd1hqQgY/edit?gid=0#gid=0")
        },
        {
            name: "Halo 3 - Halo 4 transistion",
            type: TypeOfSource.Video,
            link: new URL("https://clips.twitch.tv/GiantMiniatureKaleLeeroyJenkins")
        },
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2019,
        date: new Date("2019-10-12"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloReach,
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3ODST,
            Game.Halo3,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            {
                name: TeamName.Red,
                time: "9:32:32",
            },
            {
                name: TeamName.Green,
                time: "9:26:51",
            },
            {
                name: TeamName.Blue,
                time: "9:30:09",
            },
        ],
        playerResults: [
            // Red Team — Winning Team
            { name: "Jangoosed", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Chronos", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "Drift27", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Wingman", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Paradoxxic", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "Egg92", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "Hoshka", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },

            // Green Team
            { name: "Pedrogas", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "Maxlew", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },
            { name: "Harc", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "Adversary", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Fallenultima", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Jon and Pon", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Backflip", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Sub_Whistle", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "ReptilianGamer", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Skilledgames", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Skull Kid 2112", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Easy Relay Race 2019",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=1kd-rDUZ6Mg&t.twitch.tv/SpinelessHomelyKiwiGrammarKing")
        },
        {
            name: "Discord screenshot",
            type: TypeOfSource.Image,
            link: new URL("https://imgur.com/a/TUJ41u3")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2020,
        date: new Date("2020-01-04"),
        difficulty: Difficulty.Legendary,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo5,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            {
                name: TeamName.Red,
                time: "9:40:40",
            },
            {
                name: TeamName.Blue,
                time: "9:49:10",
            },
        ],
        playerResults: [
            // Red Team (Winning Team)
            { name: "Cordiaxiz", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "AFilthyCasual", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "Sorix", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "Skilledgames", team: TeamName.Red, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },
            { name: "BatChat", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Chronos", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Dubhzo", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "SamHR", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Legendary Robb", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Pedrogas", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "DavidSpartan95", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Part 1 Legendary Relay Race 2020",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=PItCEhKdax4")
        },
        {
            name: "Part 2 Legendary Relay Race 2020",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=Ry52QcIjSek&feature=youtu.be")
        }
        ],
        timeMethod: "RTA"
    },
    {
        year: 2020,
        date: new Date("2020-06-28"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Gold,
        teamResults: [
            { name: TeamName.Gold, time: "8:27:05" },
            { name: TeamName.Red, time: "8:29:56" },
            { name: TeamName.Green, time: "8:30:33" },
            { name: TeamName.Blue, time: "8:33:21" },
        ],
        playerResults: [
            // Red Team
            { name: "Sparklyness", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "Aster", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Sorix", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "Harc", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Jangoosed", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },

            // Green Team
            { name: "Maxlew", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Dubhzo", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Fallenultima", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "Skilledgames", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Zephrike", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "c0ry123", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Chronos", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "ReptilianGamer", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "VyPr", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Mankey", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Koma", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },

            // Gold Team (Winners)
            { name: "Sub_Whistle", team: TeamName.Gold, win: true, playedGames: [Game.HaloCE] },
            { name: "Drift27", team: TeamName.Gold, win: true, playedGames: [Game.Halo2] },
            { name: "SamHR", team: TeamName.Gold, win: true, playedGames: [Game.Halo3] },
            { name: "Adversary", team: TeamName.Gold, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Gold, win: true, playedGames: [Game.HaloReach] },
            { name: "Cordiaxiz", team: TeamName.Gold, win: true, playedGames: [Game.Halo4] },
            { name: "Ecliptyk", team: TeamName.Gold, win: true, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "HaloRuns Easy Relay Race - June 28th (4 teams)",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=5zw8l2EVYU8")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2021,
        date: new Date("2021-01-09"),
        difficulty: Difficulty.Legendary,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            { name: TeamName.Red, time: "8:31:41" },
            { name: TeamName.Green, time: "8:26:58" },
            { name: TeamName.Blue, time: "8:43:32" },
        ],
        playerResults: [
            // Red Team
            { name: "Chynovsky", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "BananaBoatKid", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Sorix", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "Wingman", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Two EEzy", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Cordiaxiz", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },

            // Green Team (Winners)
            { name: "Maxlew", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },
            { name: "ReptilianGamer", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "SamHR", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Legendary Robb", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Zephrike", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "Koma", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "Distro", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Sparklyness", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "ibigblue", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "yeVcM", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "c0ry123", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Legendary Relay Race 2021",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=tjApDJ6JrUo")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1w6VU02vAcvy9v3CuH6CKVCGt7WJJ8j2wHCNBbaCiz2c/edit?gid=0#gid=0")
        }],
        timeMethod: "Game Timing"
    },
    {
        year: 2021,
        date: new Date("2021-06-05"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            {
                name: TeamName.Red,
                time: "8:00:47",
            },
            {
                name: TeamName.Green,
                time: "8:05:34",
            },
            {
                name: TeamName.Blue,
                time: "8:07:22",
            },
            {
                name: TeamName.Gold,
                time: "8:10:27",
            },
        ],
        playerResults: [
            // Red Team — Winning team
            { name: "Chronos", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "ReptilianGamer", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "Zoo", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "Harc", team: TeamName.Red, win: true, playedGames: [Game.Halo3ODST] },
            { name: "DMPenguin", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },
            { name: "Cordiaxiz", team: TeamName.Red, win: true, playedGames: [Game.Halo4] },
            { name: "Sorix", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },

            // Green Team
            { name: "Maxlew", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Temp", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Mourie", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "Wingman", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Zephrike", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "SlothSG", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "ibigblue", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Xero", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Two EEzy", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Adversary", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },

            // Gold Team
            { name: "Cambid", team: TeamName.Gold, win: false, playedGames: [Game.HaloCE] },
            { name: "Synyster", team: TeamName.Gold, win: false, playedGames: [Game.Halo2] },
            { name: "Fallenultima", team: TeamName.Gold, win: false, playedGames: [Game.Halo3] },
            { name: "Danielcito", team: TeamName.Gold, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Gold, win: false, playedGames: [Game.HaloReach] },
            { name: "Danos", team: TeamName.Gold, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Gold, win: false, playedGames: [Game.Halo5] },
        ],
        source: [
            {
                name: "Meme video containing sources",
                type: TypeOfSource.Video,
                link: new URL("https://www.youtube.com/watch?v=PaKm7mi6btY")
            },
            {
                name: "Spreadsheet",
                type: TypeOfSource.Exel,
                link: new URL("https://docs.google.com/spreadsheets/d/1XGJM2wfjUPyTc5DKj5Zm0DDNI47zl0hRGYAkMUmw_cs/edit?usp=sharing")
            }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2021,
        date: new Date("2021-11-27"),
        difficulty: Difficulty.Legendary,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            { name: TeamName.Red, time: "9:56:32" },
            { name: TeamName.Green, time: "9:34:10" },
            { name: TeamName.Blue, time: "9:51:56" },
        ],
        playerResults: [
            // Red Team (Winners)
            { name: "B34RFAC3", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "ibigblue", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Sorix", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "Wingman", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Chronos", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Koma", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },

            // Green Team
            { name: "SlothSG", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },
            { name: "Sleek", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "Zoo", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Skilledgames", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Mankey", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "Cordiaxiz", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },

            // Blue Team
            { name: "Maxlew", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Synyster", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "SamHR", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Legendary Robb", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Dyse", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
        ],
        source: [{
            name: "Screenshot from Discord",
            type: TypeOfSource.Image,
            link: new URL("https://imgur.com/a/B7Cxglj")
        }],
        timeMethod: "Game Timing"
    },
    {
        year: 2022,
        date: new Date("2022-06-25"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
            Game.HaloInfinite,
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            { name: TeamName.Gold, time: "8:34:30" },
            { name: TeamName.Red, time: "8:31:41" },
            { name: TeamName.Green, time: "8:26:58" },
            { name: TeamName.Blue, time: "8:43:32" },
        ],
        playerResults: [
            // Red Team
            { name: "NervyDestroyer", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "Sleek", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "yeVcM", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "Chronos", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "DMPenguin", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Cordiaxiz", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },
            { name: "Harc", team: TeamName.Red, win: false, playedGames: [Game.HaloInfinite] },

            // Green Team
            { name: "Cambid", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },
            { name: "Trouble", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "Hyperloop", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Wingman", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Danos", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "Mourie", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },
            { name: "Dyse", team: TeamName.Green, win: true, playedGames: [Game.HaloInfinite] },

            // Blue Team
            { name: "Helpless", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Aster", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Penguin", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Zephrike", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Chronos", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "Ecliptyk", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
            { name: "RileyRunsIt", team: TeamName.Blue, win: false, playedGames: [Game.HaloInfinite] },

            // Gold Team (Winners)
            { name: "SlothSG", team: TeamName.Gold, win: false, playedGames: [Game.HaloCE] },
            { name: "Maxlew", team: TeamName.Gold, win: false, playedGames: [Game.Halo2] },
            { name: "Zoo", team: TeamName.Gold, win: false, playedGames: [Game.Halo3] },
            { name: "Skilledgames", team: TeamName.Gold, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Gold, win: false, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Gold, win: false, playedGames: [Game.Halo4] },
            { name: "Jon and Pon", team: TeamName.Gold, win: false, playedGames: [Game.Halo5] },
            { name: "B34RFAC3", team: TeamName.Gold, win: false, playedGames: [Game.HaloInfinite] },
        ],
        source: [{
            name: "Easy Relay Race 2022, missing final section",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=DAMjxQwJ_4I")
        },
        {
            name: "Discord screenshot",
            type: TypeOfSource.Image,
            link: new URL("https://imgur.com/a/Y0htV2a")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2022,
        date: new Date("2022-12-03"),
        difficulty: Difficulty.Legendary,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
            Game.HaloInfinite,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            { name: TeamName.Red, time: "10:01:48" },
            { name: TeamName.Blue, time: "10:03:27" },
            { name: TeamName.Green, time: "10:28:46" },
        ],
        playerResults: [
            // Red Team (Winners)
            { name: "SlothSG", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "Voltroneon", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "SamHR", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "yeVcM", team: TeamName.Red, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Two EEzy", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },
            { name: "Koma", team: TeamName.Red, win: true, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },
            { name: "Lorhey", team: TeamName.Red, win: true, playedGames: [Game.HaloInfinite] },

            // Green Team
            { name: "Tunguzka", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Synyster", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Zoo", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "Chronos", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "Danos", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },
            { name: "Pedrogas", team: TeamName.Green, win: false, playedGames: [Game.HaloInfinite] },

            // Blue Team
            { name: "NervyDestroyer", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Sleek", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Wingman", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Zephrike", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
            { name: "Dyse", team: TeamName.Blue, win: false, playedGames: [Game.HaloInfinite] },
        ],
        source: [{
            name: "HaloRuns Legendary Relay Race 2022 (Part 1/2)",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=O-EUQ3dN7Uw")
        },
        {
            name: "HaloRuns Legendary Relay Race 2022 (Part 2/2)",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=DAMjxQwJ_4I")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1cSfrLKp1Bw7l7IH8aCMtXfVE7mXFuHqPo5VczRcVgo8/edit?usp=sharing")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2023,
        date: new Date("2023-07-01"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
            Game.HaloInfinite,
        ],
        winningTeam: TeamName.Blue,
        teamResults: [
            { name: TeamName.Blue, time: "9:16:18" },
            { name: TeamName.Green, time: "9:18:13" },
            { name: TeamName.Red, time: "9:31:01" },
        ],
        playerResults: [
            // Red Team
            { name: "NervyDestroyer", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "Sleek", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Hyperloop", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "Rhylum", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "McThumbs", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Harc", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },
            { name: "Lorhey", team: TeamName.Red, win: false, playedGames: [Game.HaloInfinite] },

            // Green Team
            { name: "SlothSG", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Skilledgames", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Maxlew", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "ArcNaught", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Two EEzy", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "Danos", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },
            { name: "Dyse", team: TeamName.Green, win: false, playedGames: [Game.HaloInfinite] },

            // Blue Team (Winners)
            { name: "Cambid", team: TeamName.Blue, win: true, playedGames: [Game.HaloCE] },
            { name: "Rep", team: TeamName.Blue, win: true, playedGames: [Game.Halo2] },
            { name: "SamHR", team: TeamName.Blue, win: true, playedGames: [Game.Halo3] },
            { name: "Xero", team: TeamName.Blue, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Blue, win: true, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Blue, win: true, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Blue, win: true, playedGames: [Game.Halo5] },
            { name: "Zephrike", team: TeamName.Blue, win: true, playedGames: [Game.HaloInfinite] },
        ],
        source: [{
            name: "HaloRuns Annual Easy Relay Race 2023",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=hpkQ-BEtr5Y")
        },
        {
            name: "2023 easy Award show",
            type: TypeOfSource.Video,
            link: new URL("https://www.twitch.tv/videos/1868414105")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1GRZEfdnzRfaYav3rcKh27_I1i30gKo6U092MGsjQcB8/edit?usp=sharing")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2023,
        date: new Date("2023-11-18"),
        difficulty: Difficulty.Legendary,
        playedGames: [
            Game.HaloInfinite,
            Game.Halo5,
            Game.Halo3,
            Game.Halo2,
            Game.HaloCE,
            Game.HaloReach,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            { name: TeamName.Red, time: "7:59:04" },
            { name: TeamName.Green, time: "8:01:03" },
            { name: TeamName.Blue, time: "8:08:05" },
        ],
        playerResults: [
            // Red Team (Winners)
            { name: "Lorhey", team: TeamName.Red, win: true, playedGames: [Game.HaloInfinite] },
            { name: "DavidSpartan95", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },
            { name: "Sorix", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "Voltroneon", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "NervyDestroyer", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "Chronos", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },

            // Green Team
            { name: "Cryphon", team: TeamName.Green, win: false, playedGames: [Game.HaloInfinite] },
            { name: "Phobic", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },
            { name: "SamHR", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "Synyster", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Cambid", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "Zephrike", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },

            // Blue Team
            { name: "Dyse", team: TeamName.Blue, win: false, playedGames: [Game.HaloInfinite] },
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
            { name: "Sasquatch", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Zoo", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "SlothSG", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Seclusive", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
        ],
        source: [{
            name: "HaloRuns Annual Easy Relay Race 2023",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=ta5VJamxWWo")
        },
        {
            name: "2023 Leg Award show",
            type: TypeOfSource.Video,
            link: new URL("https://www.twitch.tv/videos/2020109144")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1GRZEfdnzRfaYav3rcKh27_I1i30gKo6U092MGsjQcB8/edit?usp=sharing")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2024,
        date: new Date("2024-07-13"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3,
            Game.Halo3ODST,
            Game.HaloReach,
            Game.Halo4,
            Game.Halo5,
            Game.HaloInfinite,
        ],
        winningTeam: TeamName.Red,
        teamResults: [
            { name: TeamName.Red, time: "9:02:36" },
            { name: TeamName.Green, time: "9:07:04" },
            { name: TeamName.Blue, time: "9:09:39" },
        ],
        playerResults: [
            // Red Team (Winners)
            { name: "SlothSG", team: TeamName.Red, win: true, playedGames: [Game.HaloCE] },
            { name: "DABLL DO YA", team: TeamName.Red, win: true, playedGames: [Game.Halo2] },
            { name: "Heki", team: TeamName.Red, win: true, playedGames: [Game.Halo3] },
            { name: "Rhylum", team: TeamName.Red, win: true, playedGames: [Game.Halo3ODST] },
            { name: "McThumbs", team: TeamName.Red, win: true, playedGames: [Game.HaloReach] },
            { name: "Jon and Pon", team: TeamName.Red, win: true, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Red, win: true, playedGames: [Game.Halo5] },
            { name: "Dyse", team: TeamName.Red, win: true, playedGames: [Game.HaloInfinite] },

            // Green Team
            { name: "NervyDestroyer", team: TeamName.Green, win: false, playedGames: [Game.HaloCE] },
            { name: "SlateThelyon", team: TeamName.Green, win: false, playedGames: [Game.Halo2] },
            { name: "Alextremo08", team: TeamName.Green, win: false, playedGames: [Game.Halo3] },
            { name: "Trouble", team: TeamName.Green, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Zephrike", team: TeamName.Green, win: false, playedGames: [Game.HaloReach] },
            { name: "Koma", team: TeamName.Green, win: false, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: false, playedGames: [Game.Halo5] },
            { name: "Alicenuga", team: TeamName.Green, win: false, playedGames: [Game.HaloInfinite] },

            // Blue Team
            { name: "Chronos", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "Rep", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Hyperloop", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Xero", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Seclusive", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "TM0153", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
            { name: "Lorhey", team: TeamName.Blue, win: false, playedGames: [Game.HaloInfinite] },
        ],
        source: [{
            name: "HaloRuns 2024 Easy Relay Race",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=OqCwFLuGvj0")
        },
        {
            name: "Fantasy League",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1BxN2wPrxMjDAcHwR-U_44wpFJTYkr31JeEZs-0nbw3E/edit?usp=sharing")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1-JndYUg09va8YvkQ4rTMJhiEo1TxMUkJSEkaXX7mptc/edit?usp=sharing")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2024,
        date: new Date("2024-12-07"),
        difficulty: Difficulty.Legendary,
        playedGames: [
            Game.Halo5,
            Game.Halo4,
            Game.HaloReach,
            Game.Halo3ODST,
            Game.Halo3,
            Game.Halo2,
            Game.HaloCE,
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            { name: TeamName.Green, time: "9:12:31" },
            { name: TeamName.Red, time: "9:22:15" },
            { name: TeamName.Blue, time: "9:25:37" },
        ],
        playerResults: [
            // Red Team
            { name: "Phobic", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },
            { name: "Jon and Pon", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "Seclusive", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "Sorix", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Chronos", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "SlateThelyon", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "SlothSG", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },

            // Green Team (Winners)
            { name: "DavidSpartan95", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },
            { name: "Trouble", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "Waifu & Dyse", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "Cylles", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "NervyDestroyer", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Zoo", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "Maxlew", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },

            // Blue Team
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
            { name: "Mourie", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "Zephrike", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Xero", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "SamHR", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Synyster", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Tunguzka", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
        ],
        source: [{
            name: "HaloRuns 2024 Legendary Relay Race",
            type: TypeOfSource.Video,
            link: new URL("https://www.youtube.com/watch?v=a--rtt0brLc")
        },
        {
            name: "Fantasy League",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1RLtc9sGsWmN8dVtsPuZG73Q259rhw4L7uTYNboOYndo/edit?usp=sharing")
        },
        {
            name: "Spreadsheet",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1US75VMsZsdAiWbwLF-g6hmUPFNIKxlbrh9uWmiFm91I/edit?usp=sharing")
        }
        ],
        timeMethod: "Game Timing"
    },
    {
        year: 2025,
        date: new Date("2025-07-20"),
        difficulty: Difficulty.Easy,
        playedGames: [
            Game.HaloReach,
            Game.HaloCE,
            Game.Halo2,
            Game.Halo3ODST,
            Game.Halo3,
            Game.Halo4,
            Game.Halo5,
            Game.HaloInfinite
        ],
        winningTeam: TeamName.Green,
        teamResults: [
            { name: TeamName.Green, time: "8:47:46" },
            { name: TeamName.Red, time: "8:48:50" },
            { name: TeamName.Blue, time: "8:55:27" },
            { name: TeamName.Gold, time: "9:07:21" },
        ],
        playerResults: [
            // Red Team
            { name: "Sorix", team: TeamName.Red, win: false, playedGames: [Game.HaloReach] },
            { name: "SlothSG", team: TeamName.Red, win: false, playedGames: [Game.HaloCE] },
            { name: "Sleek", team: TeamName.Red, win: false, playedGames: [Game.Halo2] },
            { name: "Bloop", team: TeamName.Red, win: false, playedGames: [Game.Halo3ODST] },
            { name: "yeVcM", team: TeamName.Red, win: false, playedGames: [Game.Halo3] },
            { name: "SlateThelyon", team: TeamName.Red, win: false, playedGames: [Game.Halo4] },
            { name: "Phobic", team: TeamName.Red, win: false, playedGames: [Game.Halo5] },
            { name: "Alicenuga", team: TeamName.Red, win: false, playedGames: [Game.HaloInfinite] },

            // Green Team (Winners)
            { name: "Seclusive", team: TeamName.Green, win: true, playedGames: [Game.HaloReach] },
            { name: "Fromthegrave", team: TeamName.Green, win: true, playedGames: [Game.HaloCE] },
            { name: "Kronos716", team: TeamName.Green, win: true, playedGames: [Game.Halo2] },
            { name: "Xero", team: TeamName.Green, win: true, playedGames: [Game.Halo3ODST] },
            { name: "Hyperloop", team: TeamName.Green, win: true, playedGames: [Game.Halo3] },
            { name: "Mourie", team: TeamName.Green, win: true, playedGames: [Game.Halo4] },
            { name: "DavidSpartan95", team: TeamName.Green, win: true, playedGames: [Game.Halo5] },
            { name: "Caitlin", team: TeamName.Green, win: true, playedGames: [Game.HaloInfinite] },

            // Blue Team
            { name: "Two EEzy", team: TeamName.Blue, win: false, playedGames: [Game.HaloReach] },
            { name: "Cambid", team: TeamName.Blue, win: false, playedGames: [Game.HaloCE] },
            { name: "DABLL DO YA", team: TeamName.Blue, win: false, playedGames: [Game.Halo2] },
            { name: "Trouble", team: TeamName.Blue, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Alextremo08", team: TeamName.Blue, win: false, playedGames: [Game.Halo3] },
            { name: "Jon and Pon", team: TeamName.Blue, win: false, playedGames: [Game.Halo4] },
            { name: "BatChat", team: TeamName.Blue, win: false, playedGames: [Game.Halo5] },
            { name: "Lorhey", team: TeamName.Blue, win: false, playedGames: [Game.HaloInfinite] },

            // Gold Team
            { name: "Chronos", team: TeamName.Gold, win: false, playedGames: [Game.HaloReach] },
            { name: "Shiv", team: TeamName.Gold, win: false, playedGames: [Game.HaloCE] },
            { name: "Maxlew", team: TeamName.Gold, win: false, playedGames: [Game.Halo2] },
            { name: "Cylles", team: TeamName.Gold, win: false, playedGames: [Game.Halo3ODST] },
            { name: "Zoo", team: TeamName.Gold, win: false, playedGames: [Game.Halo3] },
            { name: "Harc", team: TeamName.Gold, win: false, playedGames: [Game.Halo4] },
            { name: "Tranqylity", team: TeamName.Gold, win: false, playedGames: [Game.Halo5] },
            { name: "Dyse", team: TeamName.Gold, win: false, playedGames: [Game.HaloInfinite] },
        ],
        source: [{
            name: "HaloRuns 2025 Easy Relay Race",
            type: TypeOfSource.Video,
            link: new URL("https://www.twitch.tv/videos/2516659442")
        },
        {
            name: "Fantasy League",
            type: TypeOfSource.Exel,
            link: new URL("https://docs.google.com/spreadsheets/d/1KDbMXjhqh-qlSDtMSI9IatZbBcVhb69ndbBTGdyI5YQ/edit?gid=987102489")
        },
        {
            name: "Detailed Results",
            type: TypeOfSource.Image,
            link: new URL("https://imgur.com/a/puKKOqA")
        }
        ],
        timeMethod: "Game Timing"
    }
]