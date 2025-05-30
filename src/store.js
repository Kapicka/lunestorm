import EventEmitter from "../EventEmmiter";

const theme = {value: "electro"};
const emitter = new EventEmitter();
const events = [
    {
        key: "lunestorm_live",
        type: ["electro"],
        name: "Lunestorm Live",
        dateStart: "2024-09-19",
        dateEnd: "2024-09-19",
    },
    {
        key: "oecumena_2024",
        type: ["ecumene", "electro"],
        name: "Oecumena Electronica",
        dateStart: "2024-11-22T18:30",
        dateEnd: "2024-11-22T21:00",
        place: {
            name: "Katedrální chrám sv. Vavřince",
            url: "https://maps.app.goo.gl/z7TwLQn5TZ5SnQL97"
        },
        links: [
            {name: "fb", url: "https://www.facebook.com/events/518940397589915"},
            {name: "ig", url: "https://www.instagram.com/oecumena.electronica"}
        ]
    },
    {
        key: "otevreno_2024",
        type: ["ecumene", "electro"],
        name: "Instalace Oecumena Electronica",
        secondLineName: "Festival Otevřeno",
        dateStart: "2024-08-23",
        dateEnd: "2024-08-25",
        links: [
            {name: "web", url: "https://jimramov.klubslunicko.cz"},
            {name: "fb", url: "https://www.facebook.com/OtevrenoJimramov"}
        ],
        place: {
            name: "Jimmramov",
            url: "https://mapy.cz/s/dofapekade"
        },
        artists: []
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "sam_orlova_2024",
        type: ["ecumene"],
        name: "SAM Orlová",
        dateStart: "2024-08-09",
        dateEnd: "2024-08-09",
        links: [
            {name: "web", url: "https://www.instagram.com/oecumena.electronica"}
        ],
        place: {
            name: "Farní zahrada, Petra Cingra 1248, 735 11, Orlová",
            url: "https://mapy.cz/s/ragezokada"
        },
        artists: []
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "velky_patek_2024",
        type: "ELECTRO_ECUMENE",
        name: "Noc kostelů",
        dateStart: "2024-06-07",
        dateEnd: "2024-06-07",
        links: [
            //{ name: "fb", url: "https://www.facebook.com/events/" },
            {name: "ig", url: "https://www.instagram.com/oecumena.electronica"}
        ],
        place: {
            name: "Kaple Božího hrobu, Petřínské sady 633",
            url: "https://maps.app.goo.gl/jGe3V6LSH3vBKBix6"
        },
        artists: []
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "control_the_matrix_20244",
        type: ["electro"],
        name: "Control The Matrix",
        secondLineName: "(CtrlArtDel + LUNESTORM)",
        dateStart: "2024-02-17T21:00",
        dateEnd: "2024-02-18T08:00",
        links: [
            {name: "fb", url: "https://www.facebook.com/events/907901173873591"},
            {name: "ig", url: "https://www.instagram.com/ctrlartdelrecords"}
        ],
        place: {
            name: "Klub FAMU",
            url: "https://maps.app.goo.gl/rAd3wXfb4waD2eHr9"
        },
        artists: ["soda", "grafik", "efectiv", "infract"]
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "electroecumene_3_2024",
        type: "ELECTRO_ECUMENE",
        name: "Oecumena Electronica",
        dateStart: "2024-03-29T19:00",
        dateEnd: "2024-03-29T21:00",
        links: [
            //{ name: "fb", url: "https://www.facebook.com/events/" },
            {name: "ig", url: "https://www.instagram.com/oecumena.electronica"}
        ],
        place: {
            name: "Katedrální chrám sv. Vavřince",
            url: "https://maps.app.goo.gl/z7TwLQn5TZ5SnQL97"
        },
        artists: []
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "jimramov_aragorn",
        type: ["ecumene"],
        name: "Bohoslužba",
        dateStart: "2023-10-22T08:30",
        dateEnd: "2023-10-22T09:30",
        place: {
            name: "Kostel Českobratrské církve evangelické v Jimramově",
            url: "https://mapy.cz/s/hubarerulo"
        },
        artists: []
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "electroecumene_11_2023",
        type: "ELECTRO_ECUMENE",
        name: "Oecumena Electronica",
        dateStart: "2023-11-04T19:00",
        dateEnd: "2023-11-04T21:00",
        links: [
            {name: "fb", url: "https://www.facebook.com/events/1724506074638585/"},
            {name: "ig", url: "https://www.instagram.com/oecumena.electronica"}
        ],
        place: {
            name: "Kostel Českobratrské církve evangelické na Vinohradech",
            url: "https://maps.app.goo.gl/cKEdeh4xrtBN4rjz9"
        },
        artists: ["grafik", "soda"]
        // description: "Zveme vás na elektro-ekumenu!"
    },
    {
        key: "matrix",
        type: ["electro"],
        name: "Matrix",
        price: "200 Kč, with costume: 100 Kč",
        place: {
            name: "District X",
            url: "https://mapy.cz/zakladni?q=district%20x&source=firm&id=13022492&ds=2&x=14.4755192&y=50.1121018&z=17"
        },
        dateStart: "2022-12-09",
        dateEnd: "2022-12-10"
    },
    {
        key: "dymky",
        type: ["electro"],
        name: "Dýmky na kopci",
        place: {
            name: "Klub Čajovna",
            url: "https://www.facebook.com/KlubCajovna"
        },
        links: [
            {name: "fb", url: "https://fb.me/e/2AM11QFN2"}
        ],
        dateStart: "2023-06-17T13:00",
        dateEnd: "2023-06-18T04:00"
    },
    {
        key: "lunestorm_live",
        type: ["electro"],
        name: "LUNESTORM LIVE",
        links: [{name: "fb", url: "https://fb.me/e/2DSyQ2Xia"}
        ],
        place: {
            name: "Vacuum Art Space",
            url: "https://www.google.com/maps/place/Vacuum+Art+Space,+z.s./@50.0662146,14.4491341,17z/data=!3m1!4b1!4m6!3m5!1s0x470b938025f534dd:0x545a2d97e45572da!8m2!3d50.0662112!4d14.4513228!16s%2Fg%2F11cpkylc8g"
        },
        artists: ["grafik", "infract", "bena"],
        dateStart: "2023-02-11T20:00",
        dateEnd: "2023-02-12T08:00"
    }
];
const artists = [
    {
        name: "Grafik",
        type: "ELECTRO_ECUMENE",
        key: "grafik",
    },
    {
        name: "Infract",
        type: "ELECTRO_ECUMENE",
        key: "infract",
        links: []
    },
    {
        name: "Beña",
        type: "ELECTRO_ECUMENE",
        key: "bena",
        links: []
    },
    {
        name: "DJ Soda",
        type: "ELECTRO_ECUMENE",
        key: "soda",
        links: []
    },
    {
        name: "Efectiv",
        type: "ELECTRO",
        key: "efectiv",
        links: []
    }
];

const venues = [];

const contact = {
    mail: "info@lunestorm.com",
    phone: "111222333",
    fb: "",
    ig: ""
};

export {
    theme,
    events,
    artists,
    contact,
    venues,
    emitter
};

