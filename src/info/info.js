import mock1 from "../img/mock1.png"

export const info = {
    firstname: 'Florentin',
    lastname: ' Fallon',
    initials: 'F F',
    surnom: 'Codev',
    position : 'Étudiant en informatique',
    miniBio: [
        {
            emoji: ('👨‍💻'),
            text: ' Passionné par le développement web',
        },
        {
            emoji: ('📚'),
            text: ' Étudiant en informatique',
        },
        {
            emoji: ('🇫🇷'),
            text: ' Français',
        },
        {
            emoji: ('📧'),
            text: ' florentinfallon@gmail.com',
        },
    ],
    social: [
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
    ],
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github','Tailwind', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'PHP', 'SQL']
        }
    ,
    hobbies: [
        {
            emoji: '🎸',
            text: ' Musique',
        },
        {
            emoji: '⚽️',
            text: ' Football',
        },
        {
            emoji: '🔫',
            text: ' Airsoft',
        },
        {
            emoji: '🎨',
            text: ' Dessin',
        },
    ],
    portfolio: [
        {
            title: "Projet 1",
            description: "Club d'airsoft",
            live: "https://florentin-fallon.github.io/Neversoft/",
            source: "https://github.com/Florentin-Fallon/Neversoft",
            image: mock1
        }
    ]
}