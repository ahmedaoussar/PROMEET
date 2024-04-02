import {BarreNavigation} from "./Composants/BarreNavigation"
import {Accueil} from "./Pages/Accueil.jsx";


function App() {

    return (
        <div className={'max-w-screen-2xl mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <Accueil></Accueil>
        </div>
    )
}

export default App
