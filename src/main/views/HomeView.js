import React from 'react';


function getEnv(env){

    if(process.env.NODE_ENV === "production"){
        return window?._env_[env]
    }else{
        return 
    }

}


export default function HomeView() {


    return (
        <>
         
            <h1 className="text-center mt-5 fonts_size_2rem">React PWA Template</h1>
            <p>HOST={getEnv("HOST")}</p>
            <p>NODE_ENV={getEnv("NODE_ENV")}</p>
        </>
    );

}