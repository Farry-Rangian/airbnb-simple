import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from './components/Card';
import data from "./data"

export default function App() {
  const cardElement = data.map(card => {
    return <Card
              key={card.id} 
              {...card}
            />
  })


  return (
    <div>
        <Navbar />
        <section className="cards-list">
            {cardElement}
        </section>
    </div>
)
}

