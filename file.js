const books = [
  {
    userId: 1,
    id: 1,
    title: "How to be Rich!!",
    summary: "This wonderful book Talks about what is the main essense of making bread because bread yeahh is very good your health.",
    price: 200,
  },
  {
    userId: 3,
    id: 3,
    title: "Binance Futures Test",
    summary: "Learn how to use binance futures platform and how to trade and make profits daily. et a 30% refun on first 30 days.",
    price: 100
  },
  {
    userId: 2,
    id: 4,
    title: "Binance Trading ",
    summary: "Learn how to use binance futures platform and how to trade and make profits daily. at a 30% refund on first 30 days.",
    price: 100
  },
  {
    id: 16,
    userId: 4,
    title: "A tale of 2 Goats",
    summary: "A tale of 2 goats, A tale of style and pizzaz of 2 men. One skilled in the art of Goal scoring, the other skilled in the art of Playing Football. There is only One Goat. A tale of 2 Goats.",
    price: 200
  },
  {
    id: 10,
    userId: 4,
    title: "Jack Grealish",
    summary: "A day in a life let's see if you really trao, turn off the autotunes let's here you really rao. hahah send a location, i'm speeding 20 bags on aj's",
    price: 20
  },
  {
    id: "gQtAOwdIMdCPzWa4uhrG-",
    userId: 2,
    title: "A Tale of Will Smith",
    summary: "keep my wife's name out yo *Beep* MOUTH!!!",
    price: 3000
  },
  {
    id: "-M6ym7G9bOQwMCqcER4an",
    userId: 1,
    title: "YES MAN",
    summary: "OK lets talk about the difference between a red orange and a blue tank top.",
    price: 200
  },
  {
    id: "NVV1plhKLl2Gws1odkM86",
    userId: 1,
    title: "Lorem ipsum",
    summary: "lorem ipsum dolor init muil maximilla madibulla ipsum lorem dolor",
    price: 2000
  },
  {
    id: "BUodPoaOvSTnLJhyS2Fw7",
    userId: 3,
    title: "My First Publish",
    summary: "This Book Talks about what are the benefit and what are the non-benefits of being a boy. It looks at the different perspective of manhood and boyhood.",
    price: 15
  },
];


const author = [
  {
    id: 1,
    name: "Jack Daniels",
    username: "Jack",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  }
]


/* 
const newRelease = [
  {
    id: "new-1",
    artist: "Kizz Daniel",
    duration: "2:56",
    title: "Cough (Odo)",
    duration: "2:56",
    cover: "https://musica-api.up.railway.app/cover/cover_1.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_1.mp3",
  },
  {
    id: "new-2",
    artist: "Ayra Starr",
    duration: "3:09",
    title: "Rush",
    duration: "3:05",
    cover: "https://musica-api.up.railway.app/cover/cover_2.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_2.mp3",
  },
  {
    id: "new-3",
    artist: "Bella Shmurda",
    duration: "2:09",
    title: "New Born Fela",
    cover: "https://musica-api.up.railway.app/cover/cover_3.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_3.mp3",
  },
  {
    id: "new-4",
    artist: "Blaqbonez ft JAE5",
    duration: "2:30",
    title: "Back In Uni",
    cover: "https://musica-api.up.railway.app/cover/cover_4.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_4.mp3",
  },
  {
    id: "new-5",
    artist: "Pheelz ft Davido",
    duration: "2:14",
    title: "Electricity",
    cover: "https://musica-api.up.railway.app/cover/cover_5.png",
    audio: "https://musica-api.up.railway.app/audio/audio_5.mp3",
  },
  {
    id: "new-6",
    artist: "Oxlade",
    duration: "2:27",
    title: "KU LO SA",
    cover: "https://musica-api.up.railway.app/cover/cover_6.webp",
    audio: "https://musica-api.up.railway.app/audio/audio_6.mp3",
  },
  {
    id: "new-7",
    artist: "JAE5 ft Dave & BNXN",
    duration: "3:24",
    title: "Propeller",
    cover: "https://musica-api.up.railway.app/cover/cover_7.png",
    audio: "https://musica-api.up.railway.app/audio/audio_7.mp3",
  },
  {
    id: "new-8",
    artist: "Olamide",
    duration: "2:35",
    title: "We Outside",
    cover: "https://musica-api.up.railway.app/cover/cover_8.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_8.mp3",
  },
  {
    id: "new-9",
    artist: "Joeboy",
    duration: "3:09",
    title: "Contour",
    cover: "https://musica-api.up.railway.app/cover/cover_9.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_9.mp3",
  },
  {
    id: "new-10",
    artist: "Zinoleesky",
    duration: "2:24",
    title: "Call Of Duty",
    cover: "https://musica-api.up.railway.app/cover/cover_10.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_10.mp3",
  },
];

const popular = [
  {
    id: "popular-1",
    artist: "Asake",
    duration: "2:19",
    title: "Terminator",
    cover: "https://musica-api.up.railway.app/cover/cover_11.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_11.mp3",
  },
  {
    id: "popular-2",
    artist: "Magix ft Ayra Starr",
    duration: "2:26",
    title: "Love Don't Cost A Dime",
    cover: "https://musica-api.up.railway.app/cover/cover_12.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_12.mp3",
  },
  {
    id: "popular-3",
    artist: "Burna Boy",
    duration: "2:52",
    title: "Last Last",
    cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
  },
  {
    id: "popular-4",
    artist: "Kizz Daniel ft Tekno",
    duration: "2:59",
    title: "Buga",
    cover: "https://musica-api.up.railway.app/cover/cover_14.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_14.mp3",
  },
  {
    id: "popular-5",
    artist: "Steven ft Portable & TI Blaze",
    duration: "3:22",
    title: "Ali Remix",
    cover: "https://musica-api.up.railway.app/cover/cover_15.png",
    audio: "https://musica-api.up.railway.app/audio/audio_15.mp3",
  },
  {
    id: "popular-6",
    artist: "Asake ft Burna Boy",
    duration: "3:30",
    title: "Sungba Remix",
    cover: "https://musica-api.up.railway.app/cover/cover_16.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_16.mp3",
  },
  {
    id: "popular-7",
    artist: "Fireboy",
    duration: "3:27",
    title: "Playboy",
    cover: "https://musica-api.up.railway.app/cover/cover_17.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_17.mp3",
  },
  {
    id: "popular-8",
    artist: "BNXN ft Wande Coal",
    duration: "3:33",
    title: "Kenkele",
    cover: "https://musica-api.up.railway.app/cover/cover_18.png",
    audio: "https://musica-api.up.railway.app/audio/audio_18.mp3",
  },
  {
    id: "popular-9",
    artist: "Asake",
    duration: "2:33",
    title: "PBUY",
    cover: "https://musica-api.up.railway.app/cover/cover_19.png",
    audio: "https://musica-api.up.railway.app/audio/audio_19.mp3",
  },
  {
    id: "popular-10",
    artist: "Zinoleesky",
    duration: "2:05",
    title: "Loving You",
    cover: "https://musica-api.up.railway.app/cover/cover_20.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_20.mp3",
  },
];

const YBNLPlaylist = [
  {
    id: "ybnl-1",
    artist: "Olamide",
    duration: "2:35",
    title: "We Outside",
    cover: "https://musica-api.up.railway.app/cover/cover_8.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_8.mp3",
  },
  {
    id: "ybnl-2",
    artist: "Asake",
    duration: "2:33",
    title: "PBUY",
    cover: "https://musica-api.up.railway.app/cover/cover_19.png",
    audio: "https://musica-api.up.railway.app/audio/audio_19.mp3",
  },
  {
    id: "ybnl-3",
    artist: "Asake ft Burna Boy",
    duration: "3:30",
    title: "Sungba Remix",
    cover: "https://musica-api.up.railway.app/cover/cover_16.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_16.mp3",
  },
  {
    id: "ybnl-4",
    artist: "Fireboy",
    duration: "3:27",
    title: "Playboy",
    cover: "https://musica-api.up.railway.app/cover/cover_17.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_17.mp3",
  },
  {
    id: "ybnl-5",
    artist: "Asake",
    duration: "2:19",
    title: "Terminator",
    cover: "https://musica-api.up.railway.app/cover/cover_11.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_11.mp3",
  },
];

const zinoleeskyPlaylist = [
  {
    id: "zino-1",
    artist: "Zinoleesky",
    duration: "2:24",
    title: "Call Of Duty",
    cover: "https://musica-api.up.railway.app/cover/cover_10.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_10.mp3",
  },
  {
    id: "zino-2",
    artist: "Zinoleesky",
    duration: "2:05",
    title: "Loving You",
    cover: "https://musica-api.up.railway.app/cover/cover_20.jpg",
    audio: "https://musica-api.up.railway.app/audio/audio_20.mp3",
  },
];

const asakePlaylist = [
  {
    id: "asake-1",
    artist: "Asake",
    duration: "2:33",
    title: "PBUY",
    cover: "https://musica-api.up.railway.app/cover/cover_19.png",
    audio: "https://musica-api.up.railway.app/audio/audio_19.mp3",
  },
  {
    id: "asake-2",
    artist: "Asake ft Burna Boy",
    duration: "3:30",
    title: "Sungba Remix",
    cover: "https://musica-api.up.railway.app/cover/cover_16.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_16.mp3",
  },
  {
    id: "asake-3",
    artist: "Asake",
    duration: "2:19",
    title: "Terminator",
    cover: "https://musica-api.up.railway.app/cover/cover_11.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_11.mp3",
  },
];

const AyraStarrPlaylist = [
  {
    id: "ayra-1",
    artist: "Ayra Starr",
    duration: "3:09",
    title: "Rush",
    cover: "https://musica-api.up.railway.app/cover/cover_2.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_2.mp3",
  },
  {
    id: "ayra-2",
    artist: "Magix ft Ayra Starr",
    duration: "2:26",
    title: "Love Don't Cost A Dime",
    cover: "https://musica-api.up.railway.app/cover/cover_12.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_12.mp3",
  },
];

const kizzPlaylist = [
  {
    id: "new-1",
    artist: "Kizz Daniel",
    duration: "2:56",
    title: "Cough (Odo)",
    duration: "2:56",
    cover: "https://musica-api.up.railway.app/cover/cover_1.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_1.mp3",
  },
  {
    id: "popular-4",
    artist: "Kizz Daniel ft Tekno",
    duration: "2:59",
    title: "Buga",
    cover: "https://musica-api.up.railway.app/cover/cover_14.jpeg",
    audio: "https://musica-api.up.railway.app/audio/audio_14.mp3",
  },
];

const bujuPlaylist = [
  {
    id: "new-7",
    artist: "JAE5 ft Dave & BNXN",
    duration: "3:24",
    title: "Propeller",
    cover: "https://musica-api.up.railway.app/cover/cover_7.png",
    audio: "https://musica-api.up.railway.app/audio/audio_7.mp3",
  },
  {
    id: "popular-8",
    artist: "BNXN ft Wande Coal",
    duration: "3:33",
    title: "Kenkele",
    cover: "https://musica-api.up.railway.app/cover/cover_18.png",
    audio: "https://musica-api.up.railway.app/audio/audio_18.mp3",
  },
];

const playlists = [
  {
    id: "playlist-1",
    title: "YBNL Playlist",
    cover: "https://musica-api.up.railway.app/cover/play_cover_1.jpg",
    info: "Yahoo Boy No Laptop Nation, popularly known as YBNL, is an independent record label founded by Olamide in 2012",
    files: YBNLPlaylist,
  },
  {
    id: "playlist-2",
    title: "Asake Playlist",
    cover: "https://musica-api.up.railway.app/cover/play_cover_2.png",
    info: "Ahmed Ololade , known professionally as Asake, is a Nigerian singer and songwriter of Yoruba heritage who specialises in Afrobeats. He got signed to YBNL Nation and Empire Distribution.",
    files: asakePlaylist,
  },
  {
    id: "playlist-3",
    title: "Zinoleesky Playlist",
    cover: "https://musica-api.up.railway.app/cover/play_cover_3.jpg",
    info: "Zinoleesky is a Nigerian singer and song-writer currently signed to Naira Marley record label, Marlian Music Imprint.",
    files: zinoleeskyPlaylist,
  },
  {
    id: "playlist-4",
    title: "Ayra Starr Playlist",
    cover: "https://musica-api.up.railway.app/cover/play_cover_4.jpeg",
    info: "Oyinkansola Sarah Aderibigbe (born 14 June 2002), known professionally as Ayra Starr, is a Nigerian singer. Born in Cotonou, Benin, Ayra Starr began a fashion career at the age of 16 with Quove Model Management before deciding to pursue music.",
    files: AyraStarrPlaylist,
  },
  {
    id: "playlist-5",
    title: "Kizz Daniel Playlist",
    cover: "https://musica-api.up.railway.app/cover/play_cover_5.jpeg",
    info: 'Oluwatobiloba Daniel Anidugbe, better known by his stage name Kizz Daniel, is a Nigerian singer and songwriter. He is best known for his singles "Woju" and "Yeba". He went by the stage name Kiss Daniel prior to changing it in May 2018.',
    files: kizzPlaylist,
  },
  {
    id: "playlist-6",
    title: "BNXN (Buju) Playlist",
    cover: "https://musica-api.up.railway.app/cover/play_cover_6.jpeg",
    info: "Daniel Benson (born 14 May 1997), known professionally as Bnxn (pronounced as Benson) and formerly known as Buju, He is a Nigerian Afro-fusion singer, songwriter and record producer.",
    files: bujuPlaylist,
  },
];
*/

// https://musica-api.up.railway.app

// module.exports = { newRelease, popular, playlists };

module.exports = {books, author}