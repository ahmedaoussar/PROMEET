import {Formulaire} from "../Composants/Formulaire"
import SearchBar from '../Composants/SearchBar.jsx'; // Importez le composant de barre de recherche

export const Accueil = () => {
    return (
        <div>
            <SearchBar/>
            <Formulaire/>
        </div>
    )
}

