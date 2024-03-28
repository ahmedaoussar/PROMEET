import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Formulaire() {
  return (
    <Card color="#002C77" shadow={false} className="p-8">
      <Typography variant="h4" className="text-center mb-8 text-bleuFonce">
        Un problème ? Une idée ?
      </Typography>
      <div className="border border-bleuFonce p-4 rounded-xl">
        <form className="mt-8" style={{ backgroundColor: "#F8F7FF" }}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Typography variant="h6" className="text-bleuFonce mb-3">Nom</Typography>
              <Input
                size="lg"
                className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" className="text-bleuFonce mb-3">Prénom</Typography>
              <Input
                size="lg"
                className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" className="text-bleuFonce mb-3">Email</Typography>
              <Input
                size="lg"
                className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" className="text-bleuFonce mb-3">Téléphone portable</Typography>
              <Input
                size="lg"
                className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="mb-4" style={{ backgroundColor: "#F8F7FF", border: "1px solid #B0BEC5", borderRadius: "0.375rem" }}>
            <Typography variant="h6" className="text-bleuFonce mb-3">Votre message</Typography>
            <textarea
              rows={4}
              className="px-3 py-2 rounded-md bg-F8F7FF focus:outline-none focus:ring-2 focus:ring-lightBlue-500 w-full !border-t-blueGray-300 focus:!border-t-blueGray-500"
              style={{ backgroundColor: "#F8F7FF", border: "none" }}
            />
          </div>
          <Button
            size="sm" 
            color="blueFonce" 
            buttonType="filled"
            ripple="light"
            className="float-right bg-bleuFonce hidden lg:inline-block" 
          >
            Envoyer
          </Button>
        </form>
      </div>
    </Card>
  );
}
