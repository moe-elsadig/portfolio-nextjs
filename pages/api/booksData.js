export default function handler(req, res) {
    const booksData = [
        {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: true,
            isbn: "9780765311788", // Correct ISBN for The Final Empire
        },
        {
            title: "The Well of Ascension",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: true,
            isbn: "9780765316882", // Correct ISBN for The Well of Ascension
        },
        {
            title: "The Hero of Ages",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: true,
            isbn: "9780765316899", // Correct ISBN for The Hero of Ages
        },
        {
            title: "The Alloy of Law",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: true,
            isbn: "9780765330420", // Correct ISBN for The Alloy of Law
        },
        {
            title: "Shadows of Self",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: true,
            isbn: "9780765378552", // Correct ISBN for Shadows of Self
        },
        {
            title: "The Bands of Mourning",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: true,
            isbn: "9780765378576", // Correct ISBN for The Bands of Mourning
        },
        {
            title: "The Lost Metal",
            author: "Brandon Sanderson",
            series: "Mistborn",
            type: "Fantasy",
            read: false,
            isbn: "9780765391193", // Correct ISBN for The Lost Metal
        },
        {
            title: "The Way Of Kings",
            author: "Brandon Sanderson",
            series: "The Stormlight Archive",
            type: "Fantasy",
            read: false,
            isbn: "9780765326355", // Correct ISBN for The Way of Kings
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747532699", // Correct ISBN for Harry Potter and the Philosopher's Stone
        },
        {
            title: "Harry Potter and the Chamber of Secrets",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747538493", // Correct ISBN for Harry Potter and the Chamber of Secrets
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747542155", // Correct ISBN for Harry Potter and the Prisoner of Azkaban
        },
        {
            title: "Harry Potter and the Goblet of Fire",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747546245", // Correct ISBN for Harry Potter and the Goblet of Fire
        },
        {
            title: "Harry Potter and the Order of the Phoenix",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747551003", // Correct ISBN for Harry Potter and the Order of the Phoenix
        },
        {
            title: "Harry Potter and the Half-Blood Prince",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747581086", // Correct ISBN for Harry Potter and the Half-Blood Prince
        },
        {
            title: "Harry Potter and the Deathly Hallows",
            author: "J.K. Rowling",
            series: "Harry Potter",
            type: "Fantasy",
            read: true,
            isbn: "9780747591054", // Correct ISBN for Harry Potter and the Deathly Hallows
        },
        {
            title: "The Eye of the World",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312850098", // Correct ISBN for The Eye of the World
        },
        {
            title: "The Great Hunt",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312851408", // Correct ISBN for The Great Hunt
        },
        {
            title: "The Dragon Reborn",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312852481", // Correct ISBN for The Dragon Reborn
        },
        {
            title: "The Shadow Rising",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312854317", // Correct ISBN for The Shadow Rising
        },
        {
            title: "The Fires of Heaven",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312854270", // Correct ISBN for The Fires of Heaven
        },
        {
            title: "Lord of Chaos",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312854287", // Correct ISBN for Lord of Chaos
        },
        {
            title: "A Crown of Swords",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312857677", // Correct ISBN for A Crown of Swords
        },
        {
            title: "The Path of Daggers",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312857691", // Correct ISBN for The Path of Daggers
        },
        {
            title: "Winter's Heart",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312864255", // Correct ISBN for Winter's Heart
        },
        {
            title: "Crossroads of Twilight",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312864590", // Correct ISBN for Crossroads of Twilight
        },
        {
            title: "Knife of Dreams",
            author: "Robert Jordan",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780312873073", // Correct ISBN for Knife of Dreams
        },
        {
            title: "The Gathering Storm",
            author: "Robert Jordan and Brandon Sanderson",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780765302304", // Correct ISBN for The Gathering Storm
        },
        {
            title: "Towers of Midnight",
            author: "Robert Jordan and Brandon Sanderson",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780765325945", // Correct ISBN for Towers of Midnight
        },
        {
            title: "A Memory of Light",
            author: "Robert Jordan and Brandon Sanderson",
            series: "The Wheel of Time",
            type: "Fantasy",
            read: true,
            isbn: "9780765325952", // Correct ISBN for A Memory of Light
        },
        {
            title: "The Last Wish",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316029186", // Correct ISBN for The Last Wish
            audio: true,
            hidden: false,
        },
        {
            title: "Sword of Destiny",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316389709", // Correct ISBN for Sword of Destiny
            audio: true,
            hidden: false,
        },
        {
            title: "Blood of Elves",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316029193", // Correct ISBN for Blood of Elves
            audio: true,
            hidden: false,
        },
        {
            title: "Time of Contempt",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316219136", // Correct ISBN for Time of Contempt
            audio: true,
            hidden: false,
        },
        {
            title: "Baptism of Fire",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316219143", // Correct ISBN for Baptism of Fire
            audio: true,
            hidden: false,
        },
        {
            title: "The Tower of Swallows",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316273718", // Correct ISBN for The Tower of Swallows
            audio: true,
            hidden: false,
        },
        {
            title: "Lady of the Lake",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316273831", // Correct ISBN for Lady of the Lake
            audio: true,
            hidden: false,
        },
        {
            title: "Season of Storms",
            author: "Andrzej Sapkowski",
            series: "The Witcher",
            type: "Fantasy",
            read: true,
            isbn: "9780316441636", // Correct ISBN for Season of Storms
            audio: true,
            hidden: false,
        },
        {
            title: "Sabriel",
            author: "Garth Nix",
            series: "Old Kingdom",
            type: "Fantasy",
            read: true,
            isbn: "9780062315556", // Correct ISBN for Sabriel
            audio: true,
            hidden: false,
        },
        {
            title: "Lirael",
            author: "Garth Nix",
            series: "Old Kingdom",
            type: "Fantasy",
            read: true,
            isbn: "9780060005429", // Correct ISBN for Lirael
            audio: true,
            hidden: false,
        },
        {
            title: "Abhorsen",
            author: "Garth Nix",
            series: "Old Kingdom",
            type: "Fantasy",
            read: true,
            isbn: "9780060734190", // Correct ISBN for Abhorsen
            audio: true,
            hidden: false,
        },
        {
            title: "Clariel: The Lost Abhorsen",
            author: "Garth Nix",
            series: "Old Kingdom",
            type: "Fantasy",
            read: true,
            isbn: "9780061561559", // Correct ISBN for Clariel: The Lost Abhorsen
            audio: true,
            hidden: false,
        },
        {
            title: "A Storm of Swords",
            author: "George R.R. Martin",
            series: "A Song of Ice and Fire",
            type: "Fantasy",
            read: true,
            isbn: "9780007447848", // Correct ISBN for A Game of Thrones
            audio: true,
            hidden: false,
        },
        {
            title: "The Great Reset: And the War for the World",
            author: "Alex Jones",
            type: "Political",
            read: true,
            isbn: "9781387731183", // Correct ISBN for The Great Reset
            audio: true,
            hidden: false,
        },
        {
            title: "The Art of Seduction: An Indispensable Primer on the Ultimate Form of Power",
            author: "Robert Greene",
            type: "Self-help",
            read: true,
            isbn: "9780142001196", // Correct ISBN for The Art of Seduction
            audio: true,
            hidden: false,
        },
        {
            title: "Travel by Bullet: The Dispatcher, Book 3",
            author: "John Scalzi",
            type: "Science Fiction",
            read: true,
            isbn: "9781491555873", // Correct ISBN for Travel by Bullet
            audio: true,
            hidden: false,
        },
        {
            title: "The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War",
            author: "Malcolm Gladwell",
            type: "History",
            read: true,
            isbn: "9780241535868", // Correct ISBN for The Bomber Mafia
            audio: true,
            hidden: false,
        },
        {
            title: "Extreme Ownership: How U.S. Navy SEALs Lead and Win",
            author: "Jocko Willink, Leif Babin",
            type: "Business",
            read: true,
            isbn: "9781250183866", // Correct ISBN for Extreme Ownership
            audio: true,
            hidden: false,
        },
        {
            title: "Elon Musk",
            author: "Walter Isaacson",
            type: "Biography",
            read: true,
            isbn: "9781982181284", // Correct ISBN for Elon Musk
            audio: true,
            hidden: false,
        },
        {
            title: "Start with No: The Negotiating Tools that the Pros Don't Want You to Know",
            author: "Jim Camp",
            type: "Business",
            read: true,
            isbn: "9780609608005", // Correct ISBN for Start with No
            audio: true,
            hidden: false,
        },
        {
            title: "One Piece, Volume 1: Romance Dawn",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569319017", // Correct ISBN for One Piece, Volume 1
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 2: Buggy the Clown",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9780575078697", // ISBN for One Piece, Volume 2
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 3: Don't Get Fooled Again",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781591161844", // ISBN for One Piece, Volume 3
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 4: The Black Cat Pirates",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569317710", // ISBN for One Piece, Volume 4
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 5: For Whom the Bell Tolls",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569317727", // ISBN for One Piece, Volume 5
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 6: The Oath",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569317734", // ISBN for One Piece, Volume 6
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 7: The Crap-Geezer",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569317741", // ISBN for One Piece, Volume 7
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 8: I Won't Die",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569317758", // ISBN for One Piece, Volume 8
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 9: Tears",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569317765", // ISBN for One Piece, Volume 9
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 10: OK, Let's Stand Up!",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569319017", // ISBN for One Piece, Volume 10
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 11: The Meanest Man in the East",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569319468", // ISBN for One Piece, Volume 11
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 12: The Legend Begins",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569319888", // ISBN for One Piece, Volume 12
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 13: It's All Right!",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569319956", // ISBN for One Piece, Volume 13
            audio: false,
            hidden: false,
        },
        {
            title: "One Piece, Volume 14: Instinct",
            author: "Eiichiro Oda",
            type: "Manga",
            read: true,
            isbn: "9781569319963", // ISBN for One Piece, Volume 14
            audio: false,
            hidden: false,
        },
    ];

    res.status(200).json(booksData);
}

// The Dichotomy of Leadership: Balancing the Challenges of Extreme Ownership to Lead and Win
// Built to Last: Successful Habits of Visionary Companies (Good to Great, Book 2)
// The Dispatcher
// Good to Great: Why Some Companies Make the Leap...And Others Don't
// Murder by Other Means: The Dispatcher, Book 2
// The Sandman
// My Inventions: The Autobiography of Nikola Tesla
// Neil Patrick Harris: Choose Your Own Autobiography
// Fire & Blood (HBO Tie-in Edition): 300 Years Before A Game of Thrones
// The Everything Store: Jeff Bezos and the Age of Amazon
// The Art of War
// Never Split the Difference: Negotiating as if Your Life Depended on It
// Utopia for Realists
// Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
// Blink: The Power of Thinking Without Thinking
// Season of Storms
// Lady of the Lake: The Witcher, Book 5
// Time of Contempt: The Witcher, Book 2
// Baptism of Fire: The Witcher, Book 3
// The Tower of the Swallow: A Witcher Novel
// Blood of Elves
// Sword of Destiny
// Caffeine: How Caffeine Created the Modern World
// The Last Wish
// Talking to Strangers: What We Should Know About the People We Don't Know
// Outliers: The Story of Success
// Language Families of the World
// Dishonesty Is the Second-Best Policy
// The Alchemist: A Fable About Following Your Dream
// Talking to Strangers: What We Should Know About the People We Don't Know
// Why We Sleep: Unlocking the Power of Sleep and Dreams
// Superintelligence: Paths, Dangers, Strategies
// 48 Laws of Power
