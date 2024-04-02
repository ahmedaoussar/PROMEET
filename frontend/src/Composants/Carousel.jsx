import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
export function CarouselDefault() {
  return (
    <Carousel id="carous" className="relative h-84 w-84 rounded-xl">
      <div className="flex">
        <Card className="mt-6 w-1/3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="public/image1ProMeet.jpg"
                    alt="card-image"  className="img-responsive"></img>
                </CardHeader>
                <CardBody>
                    <p>Coach de carrière:
                    Un professionnel expérimenté dans son domaine.
                    Il peut vous aider à identifier vos objectifs de carrière, 
                    à élaborer des plans d'action, à améliorer vos compétences en recherche d'emploi et à surmonter
                    les obstacles sur le chemin de votre progression professionnelle.
                    </p>
                </CardBody>
        </Card>
        <Card className="mt-6 w-1/3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                   src="public/image2ProMeet.jpg"
                    alt="card-image"  className="object-cover"></img>
                </CardHeader>
                <CardBody>
                  <p>
                  Mentor:
                  Un mentor professionnel est une personne ayant une vaste expérience dans un domaine spécifique 
                  et qui offre des conseils, un soutien et des conseils à des professionnels moins expérimentés. 
                  Les mentors peuvent partager leurs connaissances, leurs compétences et leur réseau professionnel pour aider les autres à progresser dans leur carrière.
                  </p>
                </CardBody>
        </Card>
        <Card className="mt-6 w-1/3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="public/image3ProMeet.jpg"
                    alt="card-image"  className="img-responsive"></img>
                </CardHeader>
                <CardBody>
                  <p>
                  Conseiller:  
                  Les conseillers en orientation professionnelle sont formés pour aider les individus à explorer leurs intérêts, 
                  leurs valeurs, leurs compétences et leurs objectifs professionnels. 
                  Ils fournissent un soutien personnalisé pour aider les individus à prendre des décisions éclairées concernant leur carrière.
                  </p>
                </CardBody>
        </Card>
        {/* 2me slide */}
      </div>
      <div className="flex">
      <Card className="mt-6 w-1/3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="public/image4ProMeet.png"
                    alt="card-image"  className="img-responsive"></img>
                </CardHeader>
                <CardBody>
                  <p>
                  Expert en reconversion professionnelle:
                  Les experts en reconversion professionnelle aident les professionnels à naviguer dans des transitions de carrière importantes, 
                  telles que le changement de secteur d'activité ou le passage à une nouvelle carrière. 
                  </p>
                </CardBody>
        </Card>
        <Card className="mt-6 w-1/3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="public/image5ProMeet.jpg"
                    alt="card-image"  className="img-responsive"></img>
                </CardHeader>
                <CardBody>
                  <p> Formateur:
                  Ces professionnels offrent des programmes de formation, des ateliers et des conseils sur des sujets liés au développement professionnel, 
                  tels que le perfectionnement des compétences, la gestion du temps, la communication efficace et le leadership.
                  </p>
                </CardBody>
        </Card>
        <Card className="mt-6 w-1/3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                  src="public/image6ProMeet.jpeg"
                  alt="card-image"  className="object-cover"></img>
                </CardHeader>
                <CardBody>
                  <p>
                  Expert en ressources humaines : Les experts en ressources humaines peuvent fournir des conseils sur une variété de sujets liés à la carrière, y compris les meilleures pratiques en matière de recrutement, 
                  la gestion des performances,
                  le développement du personnel et la résolution de problèmes en milieu de travail.
                  </p>
                </CardBody>
        </Card>
      </div>
    </Carousel>
  );
}