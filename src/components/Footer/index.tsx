"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-200 py-6">
      {/* <div className="container mx-auto px-4 flex flex-col items-center sm:flex-row justify-between">
        
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Food-Fans. All rights reserved.
          </p>
        </div>

       
        <div className="flex space-x-4 items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Terms and Conditions</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Privacy policy</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Contact</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.917 9.917 0 01-2.828.775A4.928 4.928 0 0023.337 3a9.865 9.865 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.957 13.957 0 011.64 3.157a4.917 4.917 0 001.523 6.574 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.924 4.924 0 004.6 3.416A9.869 9.869 0 010 19.54a13.9 13.9 0 007.548 2.213c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
        </div>
      </div> */}
      <div className="container mx-auto px-4 flex flex-col items-center sm:flex-row justify-between gap-3 sm:gap-0">
        <div className="text-center sm:text-left mb-4 sm:mb-0 order-2 sm:order-1">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Food-Fans. All rights reserved.
          </p>
        </div>

        <div className="flex flex-row space-x-4 items-center order-1 sm:order-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Terms and Conditions</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Privacy policy</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Contact</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
