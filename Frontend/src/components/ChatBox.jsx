import { useEffect, useRef } from "react";

function ChatBox({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-[500px] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-5">

      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-slate-400">
          Start chatting with your AI tutor...
        </div>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))
      )}

      <div ref={bottomRef} />

    </div>
  );
}

export default ChatBox;