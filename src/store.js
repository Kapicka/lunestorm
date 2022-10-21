const theme = { value: "electro" };


const events = [
  {
    key: "electroecumene",
    type: ["electro","ecumene"],
    name: "Ecumene - Electro",
    date: "2022-11-08",
    price: "100,-Kč",
    links: [
      {name:"fb",url:'https://www.facebook.com/events/1131298834180662'},
      {name:"ig",url:'https://www.instagram.com/oecumena_electronica/'},
    ],
    place: {
      name: "Kostel sv. Martina ve zdi",
      url: "https://www.google.com/maps/place/The+Church+of+St.+Martin+in+the+Wall/@50.0831299,14.4198462,15z/data=!4m5!3m4!1s0x0:0x7a4479b958a5120e!8m2!3d50.0831016!4d14.419851"
    },
    artists: ['grafik'],
    description: "Zveme vás na elektro-ekumenu!" },
  {
    key: "ecutechno2",
    type: ["ecumene"],
    name: "Setkání BJ",
    place:{
      name:"Paseky nad Jizerou",
      url: "https://en.mapy.cz/turisticka?q=paseky%20naj%20jizerou&source=muni&id=784&ds=1&x=15.3947318&y=50.7406130&z=13"
    },
    date: "13.5.2022"

  },
  {
    key: "ecutechno2",
    type: ["ecumene"],
    name: "Ekumenické cosi",
    date: "2022-11-08",
    artists: [],
    description:
      `1. jedna
      2. dva
      3. tri
`
  },
  {
    key: "Matrix",
    type: ["electro"],
    name: "Ecumene - Electro",
    date: "11.08.2022 18:00",
    artists: [],
    place: {
      name: "Zásmuky",
      url: "https://en.mapy.cz/turisticka?q=z%C3%A1smuky&source=muni&id=3770&ds=2&x=15.0264698&y=49.9480320&z=12"
    },
    description: "And I show you how deep the rabbit hole goes..."
  }
];
const artists = [
  {
    name: "Grafik",
    type: ['electro','ecumene'],
    key: "grafik",
    description:
      `Je to fajn DJ :)`,
    links: [
      { name: "SoundCloud", url: "https://soundcloud.com/grafikmarek" },
      { name: "fb", url: "https://www.facebook.com/marekgabik8" }
    ]
  },
];

export {
  theme,
  events,
  artists
};
