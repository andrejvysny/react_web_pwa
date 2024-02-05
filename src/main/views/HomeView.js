import React from 'react';

import getEnv from "../../core/helpers/Env";
export default function HomeView() {

    return (
        <>
            <h1 className="text-center mt-5 fonts_size_2rem">React PWA Template</h1>
            <p>HOST={getEnv("VITE_HOST") ?? "null"}</p>
            <p>NODE_ENV={getEnv("NODE_ENV")}</p>
        </>
    );
}