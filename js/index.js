var quotes = [
  {
    name: "― Albert Einstein",
    description:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    name: "― Oscar Wilde",
    description: "“Be yourself; everyone else is already taken.”",
  },
  {
    name: "― Frank Zappa",
    description: "“So many books, so little time.”",
  },
  {
    name: "― Marcus Tullius Cicero",
    description: "“A room without books is like a body without a soul.”",
  },
  {
    name: "― Mae West",
    description:
      "“You only live once, but if you do it right, once is enough.”",
  },
  {
    name: "― Mahatma Gandhi",
    description: "“Be the change that you wish to see in the world.”",
  },
  {
    name: "― Robert Frost",
    description:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    name: "― Mark Twain",
    description:
      "“If you tell the truth, you don't have to remember anything.”",
  },
  {
    name: "― Eleanor Roosevelt",
    description: "“No one can make you feel inferior without your consent.”",
  },
  {
    name: "― Marilyn Monroe",
    description:
      "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
  },
  {
    name: "― Stephen King",
    description: "“Get busy living or get busy dying.”",
  },
  {
    name: "― Friedrich Nietzsche",
    description: "“That which does not kill us makes us stronger.”",
  },
  {
    name: "― Steve Jobs",
    description:
      "“Your time is limited, so don’t waste it living someone else’s life.”",
  },
  {
    name: "― Benjamin Franklin",
    description:
      "“Tell me and I forget. Teach me and I remember. Involve me and I learn.”",
  },
  {
    name: "― Confucius",
    description:
      "“It does not matter how slowly you go as long as you do not stop.”",
  },
  {
    name: "― Dr. Seuss",
    description: "“Don't cry because it's over, smile because it happened.”",
  },
  {
    name: "― Aristotle",
    description: "“Happiness depends upon ourselves.”",
  },
  {
    name: "― Lao Tzu",
    description: "“The journey of a thousand miles begins with one step.”",
  },
  {
    name: "― Nelson Mandela",
    description: "“It always seems impossible until it's done.”",
  },
  {
    name: "― Helen Keller",
    description:
      "“The only thing worse than being blind is having sight but no vision.”",
  },
];
var btn = document.getElementById("btn");
var content = document.getElementById("content");
var description = document.getElementById("description");
var nameOFQuote = document.getElementById("name");
var previousIndex = -1;
function setQuote() {
  do {
    var indexRandom = Math.floor(Math.random() * quotes.length); // random between 0 - 1  * 20
  } while (previousIndex === indexRandom);

    previousIndex=indexRandom;
    description.innerHTML = quotes[indexRandom].description;
    nameOFQuote.innerHTML = quotes[indexRandom].name;
    content.style.background = "#f8f9fa";
}
