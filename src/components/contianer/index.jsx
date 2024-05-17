import React from "react";

export default function Container({ children }) {
    return (
        <div className="flex-1 flex justify-center min-h-0 w-full ">
            <div className="overflow-y-auto w-full z-[18] ">
                    {children}
            </div>
        </div>
    )
}