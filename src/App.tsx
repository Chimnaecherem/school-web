import Body from './components/newfile/Body'
import Footer from './components/newfile/Footer'
import Nav from './components/newfile/Nav'
import TableOfContent from './components/newfile/TableOfContent'

// import Home from "./components/newfile/pages/Home"


function App() {
  return (
    <div>
      {/* <Home/> */}
      <Nav />
      <TableOfContent />
      <Body />
      <Footer />
    </div>
  )
}

export default App