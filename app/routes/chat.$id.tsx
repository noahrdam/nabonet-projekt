import type { Route } from "./+types/home";
import { Send } from "lucide-react";
import { useState } from "react";
import BackButton from "~/components/BackButton";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Chat – NaboNet" }];
}

type Message = { id: number; text: string; sent: boolean };

const INITIAL_MESSAGES: Message[] = [
  { id: 1, text: "Tekst tekst tekst tekst tekst tekst tekst tekst", sent: false },
  { id: 2, text: "mere tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst", sent: false },
  { id: 3, text: "Tekst teskt tekst tekst tekst", sent: true },
  { id: 4, text: "mere tekst tekst tekst tekst tekst tekst tekst tekst", sent: false },
  { id: 5, text: "mere tekst tekst tekst tekst tekst tekst tekst tekst", sent: true },
  { id: 6, text: "mere tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst", sent: true },
];

export default function ChatPerson() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: Date.now(), text, sent: true }]);
    setInput("");
  }

  return (
    <div className="flex flex-col h-screen bg-[#EFEDE4]">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 pt-10 pb-4 flex-shrink-0 border-b border-[#D9D9D9]">
        <BackButton />
        <div className="w-12 h-12 rounded-full bg-[#D9D9D9] flex-shrink-0" />
        <span className="text-xl font-normal text-black">Jens Ole Larsen</span>
      </div>

      {/* Message thread — grows to fill space */}
      <div className="flex-1 overflow-y-auto px-5 flex flex-col gap-3 py-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
            {!msg.sent && (
              <div className="w-6 h-6 rounded-full bg-[#D9D9D9] flex-shrink-0 self-end mr-2" />
            )}
            <div
              className={`max-w-[60%] rounded-2xl px-4 py-3 text-sm text-black ${
                msg.sent ? "bg-[#8C957D]" : "bg-[#D9D9D9]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar — pinned above bottom nav on mobile, at the very bottom on desktop */}
      <div className="flex items-center gap-2 px-5 py-3 border-t border-[#D9D9D9] bg-[#EFEDE4] flex-shrink-0 mb-16 md:mb-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Skriv en besked…"
          className="flex-1 h-10 bg-[#D9D9D9] rounded-full px-4 text-sm text-[#343434]"
        />
        <button
          onClick={sendMessage}
          aria-label="Send"
          className="w-10 h-10 bg-[#8C957D] rounded-full flex items-center justify-center text-white flex-shrink-0"
        >
          <Send size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}