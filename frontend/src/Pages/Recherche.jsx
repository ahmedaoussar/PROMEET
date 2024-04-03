import SearchBar from '../Composants/SearchBar.jsx';
import CardProfile from '../Composants/CardProfile.jsx';
import {
    Typography
  } from "@material-tailwind/react";

export const Recherche = () => {
    return (
        <div>
            <Typography variant="h2" className="mb-8 text-bleuFonce">
                Recherche
            </Typography>
            <SearchBar/>
            <div class="flex flex-wrap justify-center">
                    
                {[...Array(6)].map((_, index) => (
                    <CardProfile></CardProfile>
                ))}
                    

            </div>
        </div>
    )
}

