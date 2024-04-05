import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

export const CardProfile = ({ data }) => {
    const profil = data 
    let competencesArray; // Define competencesArray in the outer scope
    if(profil.competences){
        competencesArray = profil.competences.split(',');
    }
    else{
        competencesArray =[""]
    }
    console.log(profil.prenom)
    console.log(competencesArray);

    const maxLength = 100; // the maximum length
    const truncatedDescription = profil.description.length > maxLength ? profil.description.slice(0, maxLength) + '...' : profil.description;

    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader>

            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                {profil.prenom + " " + profil.nom}{/*on affiche les infos de chaque objet*/}
                </Typography>

                <Typography>
                {profil.domaine + " - " + profil.sous_domaine + " - "}
                <div className="flex flex-wrap items-end gap-2">
                {competencesArray.map((competence, index) => (
                    <Chip className=" bg-bleuFonce hidden lg:inline-block" key={index} value={competence.trim()} />
                ))}
                </div>
                </Typography>

                <p>
                {truncatedDescription}
                </p>
            </CardBody>

            <CardFooter className="pt-0">
                <Button>View profile</Button>
            </CardFooter>
        </Card>
   );
};

export default CardProfile;