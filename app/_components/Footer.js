import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import MailButton from './MailButton';

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center items-center py-4 bg-gray-800 text-white z-10">
            <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/allin1-media" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 hover:text-gray-400" />
                </a>
                <a href="https://www.instagram.com/allin1mediain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 hover:text-gray-400" />
                </a>

                <MailButton />
            </div>
        </footer>
    );
}
