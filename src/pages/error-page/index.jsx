import React from "react";
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="w-full min-h-screen flex flex-col items-center text-center justify-center gap-8">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="text-2xl ">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl text-rose-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}