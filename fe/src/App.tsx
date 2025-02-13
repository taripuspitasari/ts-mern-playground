import {useState, useEffect} from "react";
import {Message, Category} from "./types";
import {getAllMessages, createMessage} from "./services/messageService";

function App() {
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getAllMessages();
        setMessages(response);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const [newMessage, setNewMessage] = useState<Message>({
    id: 0,
    date: new Date().toISOString().split("T")[0],
    recipient: "",
    content: "",
    category: Category.Random,
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      date: "2017-04-15",
      recipient: "tari",
      content: "hello",
      category: Category.Random,
    },
  ]);

  const handleCreateMessage = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const createdMessage = await createMessage(newMessage);
      setMessages([...messages, createdMessage]);

      setNewMessage({
        id: 0,
        date: new Date().toISOString().split("T")[0],
        recipient: "",
        content: "",
        category: Category.Random,
      });
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  return (
    <div className="w-full  min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center py-4">
        Send your message anonymously
      </h1>

      <form
        onSubmit={handleCreateMessage}
        className="flex flex-col gap-3 p-4 max-w-md mx-auto rounded-lg shadow bg-white"
      >
        <input
          value={newMessage.content}
          onChange={event =>
            setNewMessage({...newMessage, content: event.target.value})
          }
          placeholder="Type a message"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          value={newMessage.recipient}
          onChange={event =>
            setNewMessage({...newMessage, recipient: event.target.value})
          }
          placeholder="Recipient"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <select
          value={newMessage.category}
          onChange={event =>
            setNewMessage({
              ...newMessage,
              category: event.target.value as Category,
            })
          }
          className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          {Object.values(Category).map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="p-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition"
        >
          Add
        </button>
      </form>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {messages.map(message => (
          <li
            key={message.id}
            className="p-4 border border-gray-300 rounded-md bg-white flex flex-col shadow-sm"
          >
            <span className="font-semibold text-gray-800">
              {message.recipient}:
            </span>
            <span className="text-gray-700">{message.content}</span>
            <span className="text-gray-500 text-sm">{message.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
