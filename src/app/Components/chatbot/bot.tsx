"use client";
import { useState, useEffect, useRef } from "react";
import { HomeIcon, Send, SendIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { LuSend } from "react-icons/lu";

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export default function AcademyChat() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Hello! I'm Sage, and I'm here to engage in deep and meaningful discussions with you. How are you feeling today, and is there a particular topic on your mind that you'd like to explore?",
      timestamp: new Date(),
    },
    {
      type: "user",
      content:
        "Hi Sage! I'm doing well, thank you. I've been thinking a lot about the purpose of life lately. It's such a complex topic, and I'd love to hear your thoughts on it.",
      timestamp: new Date(),
    },
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleChat = () => {
    if (!query.trim()) return;

    const userMessage: Message = {
      type: "user",
      content: query,
      timestamp: new Date(),
    };

    const botMessage: Message = {
      type: "bot",
      content: "Thanks for your message. Let's dive into that topic together!",
      timestamp: new Date(),
    };

    setResponse((prev) => [...prev, userMessage, botMessage]);
    setQuery("");
  };

  const clearChat = () => {
    setResponse([]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [response]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date: Date) => {
    
    return date.toLocaleDateString([], { day: "numeric", month: "short" });
  };

  return (
    <div className="flex flex-col bg-[#040710] text-white h-[120vh]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700 shadow-md">
        <h1 className="">
          <Image
            src="Images/aparavi.svg"
            width={200}
            height={200}
            alt="aparavi"
          />
        </h1>
        <div className="flex items-center gap-4">
          <Link href="#">
            <div className="flex items-center gap-2 px-4 py-2 border border-[#F0965B] rounded-full cursor-pointer shadow-sm">
              <HomeIcon size={18} color="white" />
              <span className="text-white font-medium text-sm">Home</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center py-6">
        <h2 className="text-[#F0965B] text-2xl font-bold">
          Academy Expert Chat
        </h2>
        <p className="text-gray-400 text-sm mt-2 leading-5 hidden  lg:block">
          Simplify Your Learning With Smart Guidance. <br />
          Ask, Learn, And Grow — Anytime, Anywhere.
        </p>
      </div>

      {/* Date Separator */}
      <div className="flex items-center relative justify-center py-2">
        <button
          onClick={clearChat}
          className="absolute text-[10px] flex gap-2 items-center bottom-5 left-[74.5%] transform -translate-x-1/2"
        >
          Delete chat
          <span>
            <Trash2 size={16} />
          </span>
        </button>

        <div className="w-[25%] border-t border-gray-600" />
        <div className="flex justify-center items-center mx-2">
          <span className="text-sm text-gray-400">Today</span>
        </div>
        <div className="w-[25%] border-t border-gray-600" />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 flex justify-center">
        <div ref={chatContainerRef} className="w-full max-w-2xl space-y-6 py-4">
          {response.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[85%] flex-col ${
                  msg.type === "user" ? "items-end" : "items-start"
                }`}
              >
                {/* Message Header */}
                <div
                  className={`flex items-center gap-2  mb-4 ${
                    msg.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {msg.type === "bot" ? (
                    <span className="lg:text-sm text-[12px]    items-center flex text-orange-300 font-semibold">
                      <div className="w-8 h-8 rounded-md overflow-hidden mx-2">
                        <div className="bg-blue-500 text-white w-full h-full flex items-center justify-center rounded-full">
                          <Image
                            src="Icons/bot1.svg"
                            alt="User Avatar"
                            width={35}
                            height={35}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      Sage Response
                    </span>
                  ) : (
                    <span className="text-sm text-blue-300 font-semibold">
                      <div className="bg-blue-500 text-white  flex items-center justify-center rounded-full">
                        <Image
                          src="Icons/bot.svg"
                          alt="User Avatar"
                          width={32}
                          height={32}
                          className="object-cover rounded-md "
                        />
                      </div>
                    </span>
                  )}
                  <span className="text-xs text-gray-400">
                    {formatDate(msg.timestamp)} – {formatTime(msg.timestamp)}
                  </span>
                </div>

                {/* Message Content */}

                <div
                  className={`p-3 rounded-xl shadow-sm break-words text-sm  ${
                    msg.type === "user" ? "bg-[#8692A633]" : "bg-[#8692A633] "
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="flex justify-center px-4 py-5">
        <div className="w-full max-w-3xl flex items-center bg-[#3B3D40] rounded-md pr-2 pl-1">
          <input
            type="text"
            className="w-full text-white px-4 py-3 bg-transparent text-sm outline-none"
            placeholder="Type your message here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleChat()}
          />
          <div className="border-l-2 py-[7px] border-[#040710]">
            <button
              onClick={handleChat}
              className="rounded-full p-2 flex justify-center items-center"
            >
              <AiOutlineSend color="#F0965B" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 pb-4">
        Free Research Preview. Bot Buzz may produce inaccurate information about
        people, places, or facts.
        <span className="text-orange-400 underline cursor-pointer">
          BotBuzz Version 2.0
        </span>
      </div>
    </div>
  );
}
