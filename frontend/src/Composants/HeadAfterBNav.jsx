import { Button } from '@material-tailwind/react';
import React from 'react';

export function HeadAfterBNav() {
    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-row mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row-reverse gap-10 lg:gap-12">
                    <div className="lg:w-1/3 mt-4">
                        <img src="/public/img_pageAccueil.jpg" alt="Hero image" className="rounded-lg max-w-full h-auto h-80" />
                    </div>
                    <div className="lg:w-2/3 relative">
                        <div className="flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0">
                            <h1 className="text-2xl leading-tight sm:text-4xl md:text-3xl xl:text-3xl font-bold text-gray">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue via-30% to-blue">ProMeet is the Best Ever</span>
                                
                            </h1>
                            <p id="texte" className="mt-8 text-gray-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
                                quis voluptatum porro incidunt,
                                libero sequi quos eos velit jkdhjdhjhdjhfdjkfhsdkjfhskdfhskdjdjfhksdfhsjdfhksdfhksdfhsdkfhsdkfhskfhskdjf
                            </p>
                        </div>
                        <div className="mt-4 w-full flex max-w-md mx-auto lg:mx-0">
                            <div className="flex sm:flex-row flex-col gap-4 "> </div>
                            
                                <Button className="ml-4 flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#002C77] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue border-transparent hover:border-[#002C77]">
                                    <span className="hidden sm:flex relative z-[5]">
                                        Trouver un Pro
                                    </span>
                                    <span className="flex sm:hidden relative z-[5]">
                
                                    </span>
                                </Button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
