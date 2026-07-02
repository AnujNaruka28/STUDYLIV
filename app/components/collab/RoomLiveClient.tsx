"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import "xterm/css/xterm.css";

const Monaco = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function RoomLiveClient() {
  const [videoOn] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("python");
  const [aiSuggestor, setAiSuggestor] = useState(false);
  const [aiGhostwriter, setAiGhostwriter] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [tabSize, setTabSize] = useState(2);
  const [approvalQueue, setApprovalQueue] = useState<Array<{ id: string; name: string }>>([
    { id: "u1", name: "Alex" },
    { id: "u2", name: "Sam" },
  ]);
  const [aiChecker, setAiChecker] = useState(false);
  const [output, setOutput] = useState<string>("");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Array<{ id: string; author: string; text: string }>>([
    { id: "m1", author: "Alex", text: "Welcome to the room!" },
  ]);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [screenOn, setScreenOn] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>("Alex");
  const [waitingApproval, setWaitingApproval] = useState(false);
  const [lostConnection, setLostConnection] = useState(false);
  const [stdinValue, setStdinValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  // xterm.js
  const termContainerRef = useRef<HTMLDivElement | null>(null);
  const termRef = useRef<any>(null);
  const fitAddonRef = useRef<any>(null);

  useEffect(() => {
    let disposed = false;
    const setup = async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");
      if (disposed) return;
      const fit = new FitAddon();
      const term = new Terminal({
        convertEol: true,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 13,
        theme: { background: "#0a0a0a" },
      });
      termRef.current = term;
      fitAddonRef.current = fit;
      term.loadAddon(fit);
      if (termContainerRef.current) {
        term.open(termContainerRef.current);
        fit.fit();
        term.writeln("$ Ready");
      }
      const ro = new ResizeObserver(() => {
        try { fit.fit(); } catch {}
      });
      if (termContainerRef.current) ro.observe(termContainerRef.current);
      return () => ro.disconnect();
    };
    const cleanupPromise = setup();
    return () => {
      disposed = true;
      cleanupPromise.then((cleanup) => cleanup && cleanup());
      try { termRef.current?.dispose?.(); } catch {}
    };
  }, []);

  const shareUrl = useMemo(() => (typeof window !== "undefined" ? window.location.href : ""), []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // Optional: add toast if you wire one in
    } catch {}
  };

  const approve = (id: string) => setApprovalQueue((q) => q.filter((x) => x.id !== id));
  const reject = (id: string) => setApprovalQueue((q) => q.filter((x) => x.id !== id));

  const onRun = () => {
    if (termRef.current) {
      termRef.current.writeln("$ Running...");
      if (stdinValue) {
        termRef.current.writeln("<stdin>: " + stdinValue.replaceAll("\n", " "));
      }
      termRef.current.writeln("Hello, world!\n");
    } else {
      setOutput((prev) => prev + (prev ? "\n" : "") + "$ Running...\nHello, world!\n");
    }
  };
  const onStep = () => {
    if (termRef.current) {
      termRef.current.writeln("$ Step executed");
    } else {
      setOutput((prev) => prev + (prev ? "\n" : "") + "$ Step executed");
    }
  };
  const onSave = () => {
    // Placeholder: would persist code
    setOutput((prev) => prev + (prev ? "\n" : "") + "[saved]");
  };
  const onShare = () => copyLink();
  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const id = Math.random().toString(36).slice(2, 10);
    setMessages((m) => [...m, { id, author: "You", text: chatInput }]);
    setChatInput("");
  };

  const toggleMic = () => setMicOn((v) => !v);
  const toggleCam = () => setCamOn((v) => !v);
  const toggleScreen = () => setScreenOn((v) => !v);
  const raiseHand = () => {
    // Simulate viewer raise hand → owner sees in approval queue
    const id = Math.random().toString(36).slice(2, 10);
    setApprovalQueue((q) => [...q, { id, name: "Viewer" }]);
    setWaitingApproval(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:grid lg:grid-cols-[280px_1fr_360px] lg:grid-rows-[auto_1fr_auto] gap-3 p-3">
      {lostConnection && (
        <div className="lg:col-span-3 lg:row-span-1 rounded-lg border border-red-800 bg-red-950 text-red-200 px-4 py-2">
          Lost connection. Attempting to reconnect...
        </div>
      )}
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'flex' : 'hidden'} lg:flex lg:col-span-1 lg:row-span-3 rounded-lg border border-neutral-800 bg-neutral-950 p-3 flex-col`}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">Controls</span>
          <button className="px-2 py-1 rounded border border-neutral-700 lg:hidden" onClick={() => setSidebarOpen(false)}>✕</button>
          <button className="px-2 py-1 rounded border border-neutral-700 hidden lg:block" onClick={() => setDrawerOpen((v) => !v)}>☰</button>
        </div>
        <div className="space-y-4 text-sm text-neutral-300">
          <div>
            <div className="text-neutral-400 mb-1">Project / Language</div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded p-2">
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="web">Web Dev</option>
            </select>
          </div>
          <div>
            <div className="text-neutral-400 mb-1">Room</div>
            <div className="flex gap-2">
              <button onClick={copyLink} className="px-3 py-1 rounded border border-neutral-700">Copy Link</button>
              <a className="px-3 py-1 rounded border border-neutral-700" href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <div className="flex gap-2 mt-2">
              <a className="px-3 py-1 rounded border border-neutral-700" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="px-3 py-1 rounded border border-neutral-700" href={`https://slack.com/app_redirect?channel=`} target="_blank" rel="noreferrer">Slack</a>
            </div>
          </div>
          <div>
            <div className="text-neutral-400 mb-1">AI</div>
            <label className="flex items-center justify-between gap-2 py-1">
              <span>Suggestor</span>
              <input type="checkbox" checked={aiSuggestor} onChange={(e) => setAiSuggestor(e.target.checked)} />
            </label>
            <label className="flex items-center justify-between gap-2 py-1">
              <span>Ghostwriter</span>
              <input type="checkbox" checked={aiGhostwriter} onChange={(e) => setAiGhostwriter(e.target.checked)} />
            </label>
          </div>
          <div>
            <div className="text-neutral-400 mb-1">Editor Settings</div>
            <div className="flex items-center justify-between gap-3 py-1">
              <span>Theme</span>
              <span className="text-neutral-500">vs-dark</span>
            </div>
            <label className="flex items-center justify-between gap-3 py-1">
              <span>Font size</span>
              <input type="number" min={10} max={24} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-20 bg-neutral-900 border border-neutral-800 rounded p-1" />
            </label>
            <label className="flex items-center justify-between gap-3 py-1">
              <span>Tab size</span>
              <input type="number" min={2} max={8} value={tabSize} onChange={(e) => setTabSize(Number(e.target.value))} className="w-20 bg-neutral-900 border border-neutral-800 rounded p-1" />
            </label>
          </div>
          <div>
            <div className="text-neutral-400 mb-2">Approval Queue ({approvalQueue.length})</div>
            <div className="space-y-2 max-h-40 overflow-auto pr-1">
              {approvalQueue.length === 0 && <div className="text-neutral-500 text-sm">No requests</div>}
              {approvalQueue.map((u) => (
                <div key={u.id} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded p-2">
                  <span>{u.name}</span>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 rounded bg-white text-black" onClick={() => approve(u.id)}>Approve</button>
                    <button className="px-2 py-1 rounded border border-neutral-700" onClick={() => reject(u.id)}>Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Top toolbar */}
      <header className="lg:col-span-1 lg:row-span-1 rounded-lg border border-neutral-800 bg-neutral-950 p-2 flex items-center gap-2 flex-wrap">
        <button className="px-3 py-1 rounded bg-white text-black" onClick={onRun}>Run</button>
        <button className="px-3 py-1 rounded border border-neutral-700" onClick={onStep}>Step</button>
        <button className="px-3 py-1 rounded border border-neutral-700" onClick={onSave}>Save</button>
        <button className="px-3 py-1 rounded border border-neutral-700" onClick={onShare}>Share</button>
        <div className="ml-auto text-neutral-400 text-sm hidden sm:block">Cursors: 1/5</div>
        <button className="lg:hidden px-2 py-1 rounded border border-neutral-700" onClick={() => setSidebarOpen(true)}>☰</button>
        <button className="lg:hidden px-2 py-1 rounded border border-neutral-700" onClick={() => setVideoOpen(true)}>📹</button>
      </header>

      {/* Editor */}
      <main className="lg:col-span-1 lg:row-span-1 rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden relative flex-1 min-h-[400px]">
        <Monaco
          height="100%"
          defaultLanguage={language === "web" ? "javascript" : language}
          defaultValue={language === "python" ? `print('Hello, world!')` : ""}
          theme="vs-dark"
          options={{ fontFamily: 'JetBrains Mono, monospace', fontSize, tabSize }}
        />
        <div className="absolute right-2 top-2 flex flex-col items-center gap-2">
          {["A", "B", "C"].slice(0, 3).map((label) => (
            <div key={label} className="w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700 grid place-items-center text-xs">
              {label}
            </div>
          ))}
        </div>
      </main>

      {/* Video panel */}
      <section className={`${videoOpen ? 'flex' : 'hidden'} lg:flex lg:col-span-1 lg:row-span-2 rounded-lg border border-neutral-800 bg-neutral-950 p-2 flex-col`}>
        <div className="grid grid-cols-2 gap-2 flex-1">
          {["Alex", "Sam", "You", "Guest"].map((name) => (
            <div key={name} className={`relative rounded aspect-video ${activeSpeaker === name ? "ring-2 ring-emerald-400" : ""} bg-neutral-900`}>
              <div className="absolute bottom-1 left-1 text-xs px-1.5 py-0.5 rounded bg-black/60 border border-neutral-800">{name}{name === "You" && !camOn ? " (cam off)" : ""}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex gap-2">
            <button className={`px-3 py-1 rounded border ${micOn ? "border-neutral-700" : "border-red-700 text-red-300"}`} onClick={toggleMic}>{micOn ? "Mic" : "Mic Off"}</button>
            <button className={`px-3 py-1 rounded border ${camOn ? "border-neutral-700" : "border-red-700 text-red-300"}`} onClick={toggleCam}>{camOn ? "Video" : "Video Off"}</button>
            <button className={`px-3 py-1 rounded border ${screenOn ? "border-emerald-700 text-emerald-300" : "border-neutral-700"}`} onClick={toggleScreen}>{screenOn ? "Sharing" : "Share"}</button>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-neutral-700" onClick={() => setChatOpen(true)}>Chat</button>
            <button className="px-3 py-1 rounded border border-neutral-700" onClick={raiseHand}>Raise</button>
          </div>
        </div>
        {waitingApproval && (
          <div className="mt-2 text-xs text-yellow-300 bg-yellow-950/30 border border-yellow-800 rounded px-2 py-1 w-fit">Waiting for approval...</div>
        )}
        <button className="lg:hidden mt-2 px-3 py-1 rounded border border-neutral-700" onClick={() => setVideoOpen(false)}>Close Video</button>
      </section>

      {/* Bottom resizable terminal placeholder */}
      <footer className="lg:col-span-1 lg:row-span-1 rounded-lg border border-neutral-800 bg-neutral-950 p-2">
        <div className="flex items-center gap-2 mb-2">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-neutral-900 border border-neutral-800 rounded p-1">
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="web">Web</option>
          </select>
          <button className="px-3 py-1 rounded bg-white text-black" onClick={onRun}>Run</button>
          <button className="px-3 py-1 rounded border border-neutral-700" onClick={onStep}>Step</button>
          <label className="ml-auto flex items-center gap-2 text-sm text-neutral-300">
            <input type="checkbox" checked={aiChecker} onChange={(e) => setAiChecker(e.target.checked)} /> AI Checker
          </label>
        </div>
        <div className="h-56 lg:h-40">
          <PanelGroup direction="horizontal">
            <Panel defaultSize={aiChecker ? 50 : 100} minSize={20} className="bg-neutral-900 rounded p-2 text-neutral-300 text-sm overflow-hidden">
              <div className="h-full w-full flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">STDIN</span>
                  <textarea
                    value={stdinValue}
                    onChange={(e) => setStdinValue(e.target.value)}
                    rows={1}
                    placeholder="Provide stdin..."
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded p-1 text-xs"
                  />
                </div>
                <div className="flex-1 min-h-0 rounded border border-neutral-800 overflow-hidden">
                  <div ref={termContainerRef} className="h-full w-full" />
                </div>
              </div>
            </Panel>
            {aiChecker && (
              <>
                <PanelResizeHandle className="w-1 bg-neutral-800 hover:bg-neutral-700 transition-colors" />
                <Panel minSize={20} className="bg-neutral-900 rounded p-2 text-neutral-300 text-sm">AI suggestions...</Panel>
              </>
            )}
          </PanelGroup>
        </div>
      </footer>

      {chatOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setChatOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[420px] max-w-full bg-neutral-950 border-l border-neutral-800 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">Chat</span>
              <button className="px-2 py-1 rounded border border-neutral-700" onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <div className="flex-1 overflow-auto space-y-3 pr-1">
              {messages.map((m) => (
                <div key={m.id} className="bg-neutral-900 border border-neutral-800 rounded p-2">
                  <div className="text-xs text-neutral-400 mb-1">{m.author}</div>
                  <div className="text-sm whitespace-pre-wrap break-words">
                    {m.text.split(/(\s+)/).map((tok, i) =>
                      tok.startsWith("@") ? (
                        <span key={i} className="text-emerald-300">{tok}</span>
                      ) : (
                        <span key={i}>{tok}</span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-neutral-800 mt-3">
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                rows={3}
                placeholder="Message... (markdown, use @ to mention)"
                className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-sm"
              />
              <div className="mt-2 flex items-center justify-end gap-2">
                <button className="px-3 py-1 rounded border border-neutral-700" onClick={() => setChatInput("")}>Clear</button>
                <button className="px-3 py-1 rounded bg-white text-black" onClick={sendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setDrawerOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-neutral-950 border-r border-neutral-800 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">Controls</span>
              <button className="px-2 py-1 rounded border border-neutral-700" onClick={() => setDrawerOpen(false)}>✕</button>
            </div>
            {/* Reuse simple controls for mobile */}
            <div className="space-y-4 text-sm text-neutral-300">
              <div>
                <div className="text-neutral-400 mb-1">Project / Language</div>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded p-2">
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="web">Web Dev</option>
                </select>
              </div>
              <div>
                <div className="text-neutral-400 mb-1">AI</div>
                <label className="flex items-center justify-between gap-2 py-1">
                  <span>Suggestor</span>
                  <input type="checkbox" checked={aiSuggestor} onChange={(e) => setAiSuggestor(e.target.checked)} />
                </label>
                <label className="flex items-center justify-between gap-2 py-1">
                  <span>Ghostwriter</span>
                  <input type="checkbox" checked={aiGhostwriter} onChange={(e) => setAiGhostwriter(e.target.checked)} />
                </label>
              </div>
              <div>
                <div className="text-neutral-400 mb-1">Editor Settings</div>
                <label className="flex items-center justify-between gap-3 py-1">
                  <span>Font size</span>
                  <input type="number" min={10} max={24} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-20 bg-neutral-900 border border-neutral-800 rounded p-1" />
                </label>
                <label className="flex items-center justify-between gap-3 py-1">
                  <span>Tab size</span>
                  <input type="number" min={2} max={8} value={tabSize} onChange={(e) => setTabSize(Number(e.target.value))} className="w-20 bg-neutral-900 border border-neutral-800 rounded p-1" />
                </label>
              </div>
              <div>
                <div className="text-neutral-400 mb-2">Approval Queue ({approvalQueue.length})</div>
                <div className="space-y-2 max-h-48 overflow-auto pr-1">
                  {approvalQueue.length === 0 && <div className="text-neutral-500 text-sm">No requests</div>}
                  {approvalQueue.map((u) => (
                    <div key={u.id} className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded p-2">
                      <span>{u.name}</span>
                      <div className="flex gap-2">
                        <button className="px-2 py-1 rounded bg-white text-black" onClick={() => approve(u.id)}>Approve</button>
                        <button className="px-2 py-1 rounded border border-neutral-700" onClick={() => reject(u.id)}>Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


