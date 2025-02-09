import {MessageEntry} from "../src/types";
import {toNewMessageEntry} from "../src/utils";

const data = [
  {
    id: 1,
    date: "2017-01-01",
    recipient: "tari",
    content: "Pretty scary flight, I'm glad I'm alive",
    category: "compliment",
  },
  {
    id: 2,
    date: "2017-04-01",
    recipient: "radeska",
    content: "Everything went better than expected, I'm learning much",
    category: "criticism",
  },
  {
    id: 3,
    date: "2017-04-15",
    recipient: "salsa",
    content: "I'm getting pretty confident although I hit a flock of birds",
    category: "confession",
  },
  {
    id: 4,
    date: "2017-05-11",
    recipient: "damenjo",
    content: "Fuck you, I hate you",
    category: "random",
  },
];

const messageEntries: MessageEntry[] = data.map(obj => {
  const object = toNewMessageEntry(obj) as MessageEntry;
  object.id = obj.id;
  return object;
});
export default messageEntries;
