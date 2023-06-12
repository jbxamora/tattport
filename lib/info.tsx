import React from 'react';
import me from "../app/avatar.jpg";
import Link from 'next/link';


export const avatar = me;
export const about = () => {
  return (
    <>
      I am a tattoo apprentice specialing in black and grey work at
      Lyfestyle Ink. 
      
      <br />
      <br />
      <Link href="https://www.google.com/maps/place/Lyfestyle+Ink/@37.5493592,-122.3127853,17z/data=!4m15!1m8!3m7!1s0x808f9ef7d8493717:0x9642cf49a6a3151a!2s1923+S+El+Camino+Real,+San+Mateo,+CA+94403!3b1!8m2!3d37.5493592!4d-122.3105966!16s%2Fg%2F11b8v5s7tt!3m5!1s0x808f9ef7d86d9da5:0x9b614684f2a078b2!8m2!3d37.5493212!4d-122.3106029!16s%2Fg%2F1hf4fddng?entry=ttu">
        1923 S El Camino Real
        <br />
        San Mateo, CA 94403
      </Link>
      <br />
      <br />
      My Shop Hours:
      <br />
      Monday - Friday: 11AM - 7PM
      <br />
      <br />
      <Link href="tel:650-315-2330">
        You can call the shop number and ask for Jen to set up a consultation
        <br />
        <br />
        (650) 315-2330
      </Link>
      <br />
      <br />
    </>
  );
};
export const bio = () => {
  return (
   <>
   
   </>
  );
};
