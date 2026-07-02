"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function RoomHomeClient() {
  const router = useRouter();
  const [language, setLanguage] = useState("python");
  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    const id = Math.random().toString(36).slice(2, 10);
    toast.success("Room created");
    router.push(`/collab/${id}`);
  };

  const joinRoom = () => {
    if (!roomId) return toast.error("Enter room ID");
    router.push(`/collab/${roomId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-3xl font-semibold">Collaborative Coding</h1>
        <div className="space-y-4 rounded-lg border border-neutral-800 p-4 bg-neutral-950">
          <div className="space-y-2">
            <label className="text-sm text-neutral-300">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-md p-2"
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="web">Web Dev</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-md bg-white text-black" onClick={createRoom}>Create Room</button>
            <div className="flex-1 flex items-center gap-2">
              <input
                placeholder="Enter room id"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-md p-2"
              />
              <button onClick={joinRoom} className="px-4 py-2 rounded-md border border-neutral-700">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


