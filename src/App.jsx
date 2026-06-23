import { useState, useEffect } from "react";
import { CreditCard, User, Plus } from "lucide-react";

// DEMO DATEN
const demoCards = [
  {
    id: 1,
    name: "Fitinn Gym",
    type: "NFC",
    color: "from-green-400 to-emerald-600",
    info: "Mitglied seit 2024",
    qr: "FIT123",
  },
  {
    id: 2,
    name: "JÖ Karte",
    type: "QR",
    color: "from-red-400 to-pink-500",
    info: "Punkte: 1240",
    qr: "JOE999",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Phone>
        <HomeScreen />
      </Phone>
    </div>
  );
}

// ✅ Splash Screen
function SplashScreen() {
  return (
    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-pulse">
      Tascherl
    </div>
  );
}

// ✅ iPhone Look
function Phone({ children }) {
  return (
    <div className="w-[320px] h-[680px] bg-neutral-900 rounded-[40px] overflow-hidden shadow-xl border border-neutral-800">
      {children}
    </div>
  );
}

// ✅ Home Screen
function HomeScreen() {
  const [tab, setTab] = useState("cards");
  const [cards, setCards] = useState(demoCards);
  const [selected, setSelected] = useState(null);

  return (
    <div className="h-full flex flex-col text-white">
      <Header />

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {tab === "cards" && <Cards cards={cards} onClick={setSelected} />}
        {tab === "settings" && <Settings />}
      </div>

      {selected && (
        <CardDetail card={selected} onClose={() => setSelected(null)} />
      )}

      <BottomBar setTab={setTab} cards={cards} setCards={setCards} />
    </div>
  );
}

// ✅ Header (bunt)
function Header() {
  return (
    <div className="p-4 text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
      Tascherl
    </div>
  );
}

// ✅ Kartenübersicht
function Cards({ cards, onClick }) {
  return (
    <div className="space-y-3">
      {cards.map((c) => (
        <div
          key={c.id}
          onClick={() => onClick(c)}
          className={`p-4 rounded-2xl bg-gradient-to-br ${c.color} shadow-lg cursor-pointer transform hover:scale-105 transition`}
        >
          <div className="text-lg font-semibold">{c.name}</div>
          <div className="text-sm opacity-80">{c.type}</div>
        </div>
      ))}
    </div>
  );
}

// ✅ Detailansicht (sehr wichtig!)
function CardDetail({ card, onClose }) {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm">
      <div className={`p-5 rounded-2xl w-[260px] bg-gradient-to-br ${card.color}`}>
        <div className="text-xl font-bold mb-2">{card.name}</div>
        <div className="text-sm mb-3 opacity-90">{card.info}</div>

        {/* QR Darstellung */}
        <div className="bg-white text-black p-4 rounded-xl text-center font-mono">
          {card.qr}
        </div>

        {/* NFC Button */}
        <button className="mt-3 w-full bg-black/30 py-2 rounded-xl">
          NFC aktivieren
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full bg-white/20 py-2 rounded-xl"
        >
          schließen
        </button>
      </div>
    </div>
  );
}

// ✅ Bottom Bar + Add Karte
function BottomBar({ setTab, cards, setCards }) {
  return (
    <div className="flex justify-around p-3 bg-white/10 backdrop-blur-xl border-t border-white/10">
      <button onClick={() => setTab("cards")}>
        <CreditCard />
      </button>

      <button
        onClick={() =>
          setCards([
            ...cards,
            {
              id: Date.now(),
              name: "Neue Karte",
              type: "QR",
              color: "from-blue-400 to-indigo-600",
              info: "neu hinzugefügt",
              qr: "NEW123",
            },
          ])
        }
        className="scale-110"
      >
        <Plus />
      </button>

      <button onClick={() => setTab("settings")}>
        <User />
      </button>
    </div>
  );
}

// ✅ Settings (wichtig für real feel)
function Settings() {
  return (
    <div className="space-y-3">
      <div className="p-3 rounded-xl bg-white/10">
        🌙 Dark Mode aktiv
      </div>

      <div className="p-3 rounded-xl bg-white/10">
        🔒 Daten sicher in EU/Ö Servern
      </div>

      <div className="p-3 rounded-xl bg-white/10">
        📱 Version 1.0 Demo
      </div>

      <div className="p-3 rounded-xl bg-white/10">
        ℹ️ Tascherl vereint alle Karten an einem Ort
      </div>
    </div>
  );
}
