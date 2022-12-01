const theme = { value: "electro" };

const events = [
  {
    key: "electroecumene",
    type: ["electro", "ecumene"],
    name: "Oecumena Electronica",
    dateStart: "2022-11-18T18:30",
    dateEnd: "2022-11-18T21:00",
    links: [
      { name: "fb", url: "https://www.facebook.com/events/1131298834180662" },
      { name: "ig", url: "https://www.instagram.com/oecumena_electronica/" }
    ],
    place: {
      name: "Kostel sv. Martina ve zdi",
      url: "https://www.google.com/maps/place/The+Church+of+St.+Martin+in+the+Wall/@50.0831299,14.4198462,15z/data=!4m5!3m4!1s0x0:0x7a4479b958a5120e!8m2!3d50.0831016!4d14.419851"
    },
    artists: ["grafik"]
    // description: "Zveme vás na elektro-ekumenu!"
  },
  {
    key: "matrix",
    type: ["electro"],
    name: "Matrix",
    place: {
      name: "District X",
      url: "https://mapy.cz/zakladni?q=district%20x&source=firm&id=13022492&ds=2&x=14.4755192&y=50.1121018&z=17"
    },
    dateStart: "2022-12-09",
    dateEnd: "2022-12-10"
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
  venues
};
