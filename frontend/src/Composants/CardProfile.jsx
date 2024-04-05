import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

export const CardProfile = ({ data }) => {//= (key, item) => {
    const profil = data //key.data
    /*
    if(profil.competences){
    const competencesArray = profil.competences.split(',');
    }
    else{
        competencesArray =[""]
    }*/
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
                {profil.domaine + " - " + profil.sous_domaine + " - " /*+ (profil.competences != null? profil.competences : "")*/}
                <div className="flex flex-wrap items-end gap-2">
                {/*competencesArray.map((competence, index) => (
                /*<li key={index}>{competence.trim()}</li>*/
                    <Chip className=" bg-bleuFonce hidden lg:inline-block" value={"hs"/*competence.trim()*/} />
                /*))*/}
                </div>
                </Typography>

                <p>
                {
                console.log(profil)/* ASUPP */}
                {console.log(profil.description)/*ASUPP */}
                {profil.description}
                </p>
            </CardBody>

            <CardFooter className="pt-0">
                <Button>View profile</Button>
            </CardFooter>
        </Card>
   );
};

export default CardProfile;