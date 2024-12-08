import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {
    const entries = data.map((entry) => 
      <Entry 
        key={entry.id}    
        entry={entry}
      />
    )
    console.log(entries)
    return (
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    )
}