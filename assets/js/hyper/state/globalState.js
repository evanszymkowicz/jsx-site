let restaurantInfo = {
  title: "Prime Cut",
  phone: "(202) 555-5555",
  address: {
    state: "D.C.",
    city: "Washington",
    address: "1225 19th St NW, Washington, DC 20036"
  },
  email: "evan.szymkowicz@evanwolf.co"
};

let seasonalMenuData = [
  {
    title: "Fillet Mignon",
    description:
      "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine",
      price: "$39"
  },
  {
    title: "Beef Cutlet",
    description:
      "Stir-fried beef masla seasoned with kashmiri chili, Served on a bed of vegetables and rice",
  },
  {
    title: "Party Platter",
    description:
      "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine",
      price: "$63"
  }
];

let reviewsData = [
  {
    outlet: "Washingtonian",
    quote: "Best new restaurant in the Washington area!",
    body:
      "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
      authorTitle: "Food Critic",
      author: "Ann Limpert"
  },
  {
    outlet: "NBC4",
    quote: "Unlike any other!",
    body:
      "Unicorn banjo woke knausgaard af, viral plaid cold-pressed forage. Air plant cornhole man bun, squid tilde disrupt dreamcatcher. Pickled drinking vinegar polaroid selfies intelligentsia brooklyn meh farm-to-table kitsch glossier. Typewriter try-hard bushwick, celiac cloud bread ugh bicycle rights viral literally fam air plant man braid hexagon. Craft beer keytar quinoa iPhone swag irony fixie four dollar toast poutine prism.",
      authorTitle: "Executive Producer",
      author: "Eun Yang"
  },
  {
    outlet: "Washington Post",
    quote: "Pleases even my pretentious palate!",
    body:
      "Pickled cliche direct trade lyft. Drinking vinegar pabst stumptown organic gluten-free bespoke. Butcher subway tile quinoa air plant aesthetic brooklyn. Flexitarian snackwave trust fund hexagon leggings. Paleo microdosing tote bag crucifix fixie wayfarers jianbing art party hammock. Pitchfork schlitz yuccie chambray vegan austin sartorial swag roof party.",
    authorTitle: "Food Critic",
    author: "Tom Sietsema"
  },
  {
    outlet: "ABC",
    quote: "Stunning food and great recipe!",
    body:
      "IPhone four loko twee bitters. Beard etsy helvetica, thundercats readymade bushwick selvage taiyaki pop-up forage distillery. Pug tacos fingerstache, +1 lumbersexual intelligentsia lyft craft beer hoodie succulents bitters tumblr 8-bit. Cloud bread marfa wayfarers ugh aesthetic, mumblecore pour-over before they sold out tote bag letterpress godard dreamcatcher.",
      authorTitle: "Former First Lady",
      author: "Michelle Obama"
  },
  {
    outlet: "New York Times",
    quote: "Superb experience and atmosphere!",
    body:
      "We loved crushing steaks while recording our podcast.",
      authorTitle: "Host",
      author: "Michael Barbaro"
  }
];

let dankQuotesData = [
  {
    author: "Guy on the Street",
    quote: "I love cooking"
  },
  {
    author: "Anothe Guy on the Street",
    quote: "Looks good."
  },
  {
    author: "Some Rando",
    quote: "P Nice."
  }
];

function reviewLeft() {
  globalState.reviewIndex.current - 1;
}
function reviewRight() {
  globalState.reviewIndex.current + 1;
}

let actions = {
  reviewRight,
  reviewLeft
};

export const globalState = {
  count: 0,
  restaurantInfo,
  seasonalMenuData,
  reviewsData,
  dankQuotesData,
  reviewIndex: {
    current: 0
  },
  actions,
  menu: "inactive",
  times: false
};
