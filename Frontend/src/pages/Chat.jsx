import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import MainLayout from "../components/MainLayout";
import ChatBox from "../components/ChatBox";

function Chat() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! 👋 I'm your AI Tutor. Ask me anything about your uploaded video.",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const aiMessage = {
      role: "assistant",
      text: "Backend integration pending. Your AI response will appear here.",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setInput("");
  };

  return (
    <MainLayout>
      <div className="space-y-6">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-4xl font-bold text-white">
            AI Chat
          </h1>

          <p className="mt-2 text-slate-400">
            Ask questions about your uploaded lecture and receive AI-generated explanations.
          </p>
        </motion.div>

        <ChatBox messages={messages} />

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Ask a question..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />

          <button
            onClick={handleSend}
            className="rounded-xl bg-blue-600 px-6 text-white transition hover:bg-blue-700"
          >
            <FaPaperPlane />
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default Chat;