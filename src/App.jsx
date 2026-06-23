import React, { useState } from 'react'
import iPhone17Frame from './components/iPhone17Frame'
import HomeScreen from './screens/HomeScreen'
import CardsScreen from './screens/CardsScreen'
import AddCardScreen from './screens/AddCardScreen'
import LocationScreen from './screens/LocationScreen'
import SecurityScreen from './screens/SecurityScreen'
import GoldenCircleScreen from './screens/GoldenCircleScreen'

const screens = [
  { id: 'home', name: 'Home', component: HomeScreen },
  { id: 'cards', name: 'Meine Karten', component: CardsScreen },
  { id: 'add', name: 'Karte hinzufügen', component: AddCardScreen },
  { id: 'location', name: 'In deiner Nähe', component: LocationScreen },
  { id: 'security', name: 'Sicherheit', component: SecurityScreen },
  { id: 'golden', name: 'Golden Circle', component: GoldenCircleScreen },
]

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home')

  const CurrentComponent = screens.find(s => s.id === currentScreen)?.component || HomeScreen

  return (
    <div className="min-h-screen w-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* iPhone 17 */}
        <iPhone17Frame>
          <CurrentComponent onNavigate={setCurrentScreen} />
        </iPhone17Frame>

        {/* Bottom Navigation Overlay */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex gap-2 bg-black/80 backdrop-blur-3xl rounded-full px-4 py-3 border border-white/30">
            {screens.map(screen => (
              <button
                key={screen.id}
                onClick={() => setCurrentScreen(screen.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentScreen === screen.id
                    ? 'bg-white/30 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {screen.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
