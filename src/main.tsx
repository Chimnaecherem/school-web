import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





// import React, { createContext, useState } from 'react'
// import Component1 from './components/contextAPI/Component1'

// export const EffectAllStyle = createContext()
// function App() {
//   const [data, setData] =useState("light")
//   return (
//    <EffectAllStyle.Provider value={data}>
//      <div>
//       <p>HELLO WORLD 🙌 </p>




//       <Component1 />
//     </div>
//    </EffectAllStyle.Provider>
//   )
// }

// export default App