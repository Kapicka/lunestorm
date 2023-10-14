import EventEmitter from "../EventEmmiter";

const theme = { value: "electro" };
const emitter = new EventEmitter();


const events = [
  {
    key: "electroecumene_11_2023",
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
    type: ["electro", "ecumene"],
    name: "Oecumena Electronica",
    dateStart: "2023-11-04T18:30",
    dateEnd: "2023-11-04T20:00",
    links: [
      { name: "fb", url: "https://www.facebook.com/events/1724506074638585/" },
      { name: "ig", url: "https://www.instagram.com/oecumena_electronica" }
    ],
    /*place: {
      name: "Kostel Českobratrské církve evangelické na Vinohradech",
      url: "https://maps.app.goo.gl/cKEdeh4xrtBN4rjz9"
    }, */
    artists: []
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
      { name: "fb", url: "https://fb.me/e/2AM11QFN2" }
    ],
    dateStart: "2023-06-17T13:00",
    dateEnd: "2023-06-18T04:00"
  },
  {
    key: "lunestorm_live",
    type: ["electro"],
    name: "LUNESTORM LIVE",
    links: [{ name: "fb", url: "https://fb.me/e/2DSyQ2Xia" }
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
    type: ["electro", "ecumene"],
    key: "grafik",
    // description: `Je to fajn DJ :)`,
    links: [
      { name: "SoundCloud", url: "https://soundcloud.com/grafikmarek" },
      { name: "fb", url: "https://www.facebook.com/marekgabik8" }
    ]
  },
  {
    name: "Infract",
    type: ["electro", "ecumene"],
    key: "infract",
    links: []
  },
  {
    name: "Beña",
    type: ["electro", "ecumene"],
    key: "bena",
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

