import Image from 'next/image';
import {
  ArrowIcon,
} from '../components/icons';
import { name, about, bio, avatar } from '../lib/info';
import React from 'react';

export const revalidate = 60;

export default async function HomePage() {
  
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="border grayscale"
          src={avatar}
          width={500}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
  
          
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="/about"
          >
            <ArrowIcon />
            <p className="h-7">See More</p>
          </a>
        </li>
        <li>
        </li>
      </ul>
    </section>
  );
}
