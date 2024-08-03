import React from "react";

interface CardInterface {
    qty?: string;
    text?: string;
    icon?: React.ReactNode;
}

export function Card({ qty, text, icon }: CardInterface) {
    return (
        <div className="bg-[rgb(68,68,68)] border-b-[rgb(218,0,55)] border-b-4 p-6 flex gap-2 rounded-xl">
            <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold text-white">{qty}</strong>
                <span className="text-sm text-zinc-300">{text}</span>
            </div>
            {icon}
        </div>
    );
}
