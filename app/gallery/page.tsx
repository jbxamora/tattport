import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View My Artwork Through Different Styles.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">My Work</h1>
      <div className="w-full flex flex-col">
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1688532425/Jen/IMG_5813_pbuz9k.png" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1688532424/Jen/IMG_5814_f3lksf.png" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512430/Jen/IMG_4605_ac478g.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512424/Jen/IMG_3895_dgxawj.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512424/Jen/IMG_3993_mgm3al.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512429/Jen/IMG_6141_flwkc9.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512429/Jen/IMG_4553_qljps5.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512427/Jen/IMG_4408_emza2p.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512428/Jen/IMG_6822_es0wiv.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512426/Jen/IMG_4457_kcycue.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512426/Jen/IMG_3989_lf18ti.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512425/Jen/IMG_4264_wcntwa.jpg" />
        <br />
        <img src="https://res.cloudinary.com/dlkopl59p/image/upload/v1686512429/Jen/IMG_3996_ay8dec.jpg" />
      </div>
    </section>
  );
}
