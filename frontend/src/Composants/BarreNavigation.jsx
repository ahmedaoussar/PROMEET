import React from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function BarreNavigation() {
    // State pour gérer l'ouverture/fermeture de la navigation sur mobile
    const [openNav, setOpenNav] = React.useState(false);
 
    // Effet pour fermer la navigation lorsque la largeur de la fenêtre dépasse 1000px
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 1000 && setOpenNav(false),
      );
    }, []);
   
    // Liste des éléments de navigation
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    
      </ul>
    );
 
  return (
    // Barre de navigation principale
    <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Logo ou nom de votre site */}
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-blue"
        >
          ProMeet
        </Typography>
        {/* Affichage de la liste des éléments de navigation (visible uniquement sur grand écran) */}
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {/* Bouton pour la recherche */}
          <Button variant="blue-500" 
          size="sm" 
          className= " bg-blue hidden lg:inline-block">
            <span className="text-white" >Recherche</span>
          </Button>
          {/* Bouton pour se connecter */}
          <Button
            variant="blue"
            size="sm"
            className=" bg-blue hidden lg:inline-block"
          >
            <span className="text-white">Login</span>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
