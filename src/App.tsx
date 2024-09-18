import { useState } from 'react'
import reactLogo from './assets/react.svg'
import electronLogo from './assets/electron.svg'
import shadcnLogo from './assets/shadcn.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModeToggle />

      <div className='logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://electronjs.org" target="_blank">
          <img src={electronLogo} className="logo electron" alt="Electron logo" />
        </a>
        <a href="https://ui.shadcn.com/" target="_blank">
          <div className="logo shadcn text-black dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-12 w-12" >
              <rect width="256" height="256" fill="none"></rect>
              <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
              <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            </svg>
          </div>
        </a>
      </div>
      <h1>Vite + React + Electron + Shadcn</h1>
      <div className="card">
        <Button variant="outline" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
