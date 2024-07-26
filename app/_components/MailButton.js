"use client";

import { FaGoogle } from "react-icons/fa";
import copy from 'clipboard-copy';
import { useState } from "react";

export default function MailButton() {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'allin1mediain@gmail.com'; // Define the email address to be copied

    const handleCopyClick = async () => {
        try {
            await copy(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
        } catch (error) {
            console.error('Failed to copy text to clipboard', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            {isCopied &&
                <span className="absolute top-[93%] sm:top-[85%] bg-white rounded-full text-main px-3 py-1">
                    Copied!
                </span>}
            <FaGoogle
                onClick={handleCopyClick}
                className="w-6 h-6 hover:text-gray-400 hover:cursor-pointer"
            />
        </div>
    );
}
