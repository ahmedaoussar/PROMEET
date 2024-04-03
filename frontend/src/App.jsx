
import { BarreNavigation } from "./Composants/BarreNavigation"
import { Footer } from "./Composants/Footer";


function App() {

    return (
        <div className={'w-10/12 md:container mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <Accueil></Accueil>
        </div>
    )
}

export default App
