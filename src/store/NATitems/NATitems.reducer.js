const name = 'NAT_REDUCER';

export const REMOVE_ITEM = `${name}/REMOVE_ITEM`;
export const ADD_ITEM = `${name}/ADD_ITEM`;
export const ADD_TO_FAVORITE = `${name}/ADD_TO_FAVORITE`;
export const ADD_TO_READED = `${name}/ADD_TO_READED`;
export const ADD_POSITION = `${name}/ADD_POSITION`;
export const ADD_TO_WATCHED = `${name}/ADD_TO_WATCHED`;
export const ADD_TO_MOVIE_LIST = `${name}/ADD_TO_MOVIE_LIST`;
export const ADD_TO_DONE = `${name}/ADD_TO_DONE`;
export const TWITTER_DETAILS = `${name}/TWITTER_DETAILS`;
export const NOTE_DETAILS = `${name}/NOTE_DETAILS`;
export const NOTE_EDIT = `${name}/NOTE_EDIT`;

export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: { id: getId(), ...itemContent },
    },
  };
};

export const addToFavorite = (title, image, favoriteLength, type) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  const position = favoriteLength + 1;
  return {
    type: 'ADD_TO_FAVORITE',
    payload: {
      item: { id: getId(), title, position, image, type },
    },
  };
};
export const addToReaded = (title, readed, type) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_TO_READED',
    payload: {
      item: { id: getId(), title, readed, type },
    },
  };
};

export const addPosition = (id, position, type) => {
  return {
    type: 'ADD_POSITION',
    payload: { id, position, type },
  };
};

export const addToWatched = (id, title, path, watched) => {
  return {
    type: 'ADD_TO_WATCHED',
    payload: {
      item: { id, title, path, watched },
    },
  };
};

export const addToMovieList = (id, title, path, rate, popularity, date, type) => {
  return {
    type: 'ADD_TO_MOVIE_LIST',
    payload: {
      item: { id, title, path, rate, popularity, date, type },
    },
  };
};

export const addToDone = (id, title, date, content, type, fullDate) => {
  return {
    type: 'ADD_TO_DONE',
    payload: {
      item: { id, title, date, content, type, fullDate },
    },
  };
};

export const twitterDetails = (id, title, date, content, type, names) => {
  return {
    type: 'TWITTER_DETAILS',
    payload: {
      item: { id, title, date, content, type, names },
    },
  };
};

export const noteDetails = (id, title, date, content, type) => {
  return {
    type: 'NOTE_DETAILS',
    payload: {
      item: { id, title, date, content, type },
    },
  };
};

export const noteEdit = (id, title, created, content, edited, type) => {
  return {
    type: 'NOTE_EDIT',
    payload: {
      item: { id, title, created, content, edited, type },
    },
  };
};

const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      title: 'Clean whole apartment',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '13/12/2019',
      date: '2020-06-09T02:00',
    },
    {
      id: 2,
      title: 'Do loundry',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      date: '2020-06-09T12:00',
    },
    {
      id: 3,
      title: 'find job',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
      date: '2020-06-12T13:00',
    },
  ],
  done: [],
  twitterDetails: [],
  twitters: [
    {
      id: 1,
      title: 'Hello Roman',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '15.05.2020',
      twitterName: 'hello_roman',
    },
    {
      id: 2,
      title: 'Redux guy',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '18.05.2020',
      twitterName: 'dan_abramov',
    },
    {
      id: 3,
      title: 'React router stuff',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '19.05.2020',
      twitterName: 'mjackson',
    },
    {
      id: 4,
      title: 'Super animacje!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '19.05.2020',
      twitterName: 'sarah_edo',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/',
      created: '13.05.2020',
    },
    {
      id: 2,
      title: 'Wish you React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/',
      created: '14.05.2020',
    },
    {
      id: 3,
      title: 'You gave React a bad name',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/',
      created: '19.05.2020',
    },
    {
      id: 4,
      title: 'Is it React you looking for?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/',
      created: '19.05.2020',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10.05.2020',
    },
    {
      id: 2,
      title: 'Como es An Gular?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '18.05.2020',
    },
    {
      id: 3,
      title: 'Du bist Reactish',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '19.05.2020',
    },
    {
      id: 4,
      title: 'Reactuj się kto moze!',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '19.05.2020',
    },
  ],
  noteDetails: [],
  books: [
    {
      id: 1,
      title: 'Harry Potter and the Classical World',
      description:
        'J.K. Rowling has drawn deeply from classical sources to inform and color her Harry Potter novels, with allusions ranging from the obvious to the obscure. “Fluffy,” the vicious three-headed dog in Harry Potter and the Sorcerer’s Stone, is clearly a repackaging of Cerberus, the hellhound of Greek and Roman mythology. But the significance of Rowling’s quotation from Aeschylus at the front of Harry Potter and the Deathly Hallows is a matter of speculation. Her use of classical material is often presented with irony and humor. This extensive analysis of the Harry Potter series examines Rowling’s wide range of allusion to classical characters and themes and her varied use of classical languages. Chapters discuss Harry and Narcissus, Dumbledore’s many classical predecessors, Lord Voldemort’s likeness to mythical figures, and magic in Harry Potter and classical antiquity—among many topics.',
      created: '17.05.2020',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51UZPLqSveL.jpg',
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      description:
        'A PBS Great American Read Top 100 Pick One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Saurons fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider. This new edition includes the fiftieth-anniversary fully corrected text setting and, for the first time, an extensive new index. J.R.R. Tolkien (1892-1973), beloved throughout the world as the creator of The Hobbit, The Lord of the Rings, and The Silmarillion, was a professor of Anglo-Saxon at Oxford, a fellow of Pembroke College, and a fellow of Merton College until his retirement in 1959. His chief interest was the linguistic aspects of the early English written tradition, but while he studied classic works of the past, he was creating a set of his own.',
      created: '17.05.2020',
      image: 'https://prodimage.images-bn.com/pimages/9780544003415_p0_v4_s550x406.jpg',
    },
    {
      id: 3,
      title: 'The Hunger Games',
      description:
        'A philosophical exploration of Suzanne Collinss New YorkTimes bestselling series, just in time for the release ofThe Hunger Games movie Katniss Everdeen is the girl who was on fire, but she is alsothe girl who made us think, dream, question authority, and rebel.The post-apocalyptic world of Panems twelve districts is a dividedsociety on the brink of war and struggling to survive, while theCapitol lives in the lap of luxury and pure contentment. At everyturn in the Hunger Games trilogy, Katniss, Peeta, Gale, and theirmany allies wrestle with harrowing choices and ethical dilemmasthat push them to the brink. Is it okay for Katniss to break thelaw to ensure her familys survival? Do ordinary moral rules applyin the Arena? Can the world of The Hunger Games shine alight into the dark corners of our world? Why do we often enjoywatching others suffer? How can we distinguish between whats Realand Not Real? This book draws on some of historys most engagingphilosophical thinkers to take you deeper into the story and itsthemes, such as sacrifice, altruism, moral choice, and gender. Gives you new insights into the Hunger Games series and its keycharacters, plot lines, and ideas Examines important themes such as the state of nature, war,celebrity, authenticity, and social class Applies the perspective of some of worlds greatest minds, suchas Charles Darwin, Thomas Hobbes, Friedrich Nietzsche, Plato, andImmanuel Kant to the Hunger Games trilogy Covers all three books in the Hunger Games trilogy An essential companion for Hunger Games fans, this book willtake you deeper into the dystopic world of Panem and into the mindsand motivations of those who occupy it',
      created: '18.05.2020',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61nZqhftUPL.jpg',
    },
  ],
  favoriteBooks: [
    {
      id: 1,
      title: 'The Hunger Games',
      position: '1',
    },
    {
      id: 8,
      title: 'Harry Potter',
      position: '2',
    },
  ],
  readedBooks: [
    {
      id: 1,
      title: 'The Hunger Games',
      readed: '19.05.2020',
    },
    {
      id: 8,
      title: 'The asdasdas Games',
      readed: '15.05.2020',
    },
  ],
  movies: [
    {
      id: 254375,
      title: 'Hector and the Search for Happiness',
      path:
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&auto=format&fit=crop&w=738&q=80',
      rate: 6,
      popularity: 10000,
      date: 13 / 12 / 2019,
    },
    {
      id: 41131,
      title: 'The Search',
      path:
        'https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      rate: 6,
      popularity: 10000,
      date: 13 / 12 / 2019,
    },
  ],
  series: [
    {
      id: 100,
      title: 'I am not an Animal',
      path: 'https://image.tmdb.org/t/p/w500/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg',
      rate: 8,
      popularity: 5000,
      date: 13 / 12 / 2019,
    },
    {
      id: 2734,
      title: '"Law & Order: Special Victims Unit"',
      path: 'https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg',
      rate: 6,
      popularity: 8000,
      date: 13 / 12 / 2019,
    },
  ],
  watchedMovies: [
    {
      id: 1,
      title: 'The Hungeeeeeeer Games',
      path:
        'https://images.unsplash.com/photo-1582189587033-17c59adf24ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
      rate: 6,
      popularity: 10000,
      date: 13 / 12 / 2019,
    },
    {
      id: 8,
      title: 'The asdasdassdasdkalsd Games',
      path:
        'https://images.unsplash.com/photo-1576438112307-db9c736ff392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      rate: 6,
      popularity: 10000,
      date: 13 / 12 / 2019,
    },
  ],
  watchedSeries: [
    {
      id: 100,
      title: 'I am not an Animal',
      path: 'https://image.tmdb.org/t/p/w500/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg',
      rate: 8,
      popularity: 5000,
      date: 13 / 12 / 2019,
    },
    {
      id: 2734,
      title: '"Law & Order: Special Victims Unit"',
      path: 'https://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg',
      rate: 6,
      popularity: 8000,
      date: 13 / 12 / 2019,
    },
  ],
};

const natReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        [action.payload.item.type]: [...state[action.payload.item.type], action.payload.item],
      };
    case 'ADD_TO_READED':
      return {
        ...state,
        [action.payload.item.type]: [...state[action.payload.item.type], action.payload.item],
      };

    case 'ADD_POSITION':
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type].filter((item) =>
            item.id === action.payload.id ? (item.position = action.payload.position) : ' ',
          ),
        ],
      };
    case 'ADD_TO_WATCHED':
      return {
        ...state,
        [action.payload.item.watched]: [...state[action.payload.item.watched], action.payload.item],
      };
    case 'ADD_TO_MOVIE_LIST':
      return {
        ...state,
        [action.payload.item.type]: [...state[action.payload.item.type], action.payload.item],
      };

    case 'ADD_TO_DONE':
      return {
        ...state,
        [action.payload.item.type]: [...state[action.payload.item.type], action.payload.item],
      };

    case 'TWITTER_DETAILS':
      return {
        ...state,
        [action.payload.item.type]: [action.payload.item],
      };

    case 'NOTE_DETAILS':
      return {
        ...state,
        [action.payload.item.type]: [action.payload.item],
      };

    case 'NOTE_EDIT':
      return {
        ...state,
        [action.payload.item.type]: [
          ...state[action.payload.item.type].map((item) =>
            item.id === action.payload.item.id ? action.payload.item : item,
          ),
        ],
      };
    default:
      return state;
  }
};

export default natReducer;
