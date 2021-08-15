import React from "react";
import Image from "next/image";

function ProfileCard() {
  return (
    <div className="my-10 p-10 flex flex-col md:flex-wrap md:flex-row items-center mx-auto">
      <div className="w-64 h-64 md:w-128 md:h-128 rounded-full mx-auto sticky top-0 md:relative z-50">
        <Image
          src="/blob.svg"
          layout="fill"
          objectFit="cover"
          className="rounded-full m-5 p-5"
        />
        <Image
          src="/profile_photo-removebg.png"
          layout="fill"
          objectFit="cover"
          className="rounded-full m-5 p-5"
        />
      </div>
      <div class="pt-6 text-center space-y-4">
        <blockquote>
          <p class="text-lg font-semiboldtext-gray-500">
            "I love building well engineered solutions"
          </p>
        </blockquote>
        <figcaption class="font-small">
          <p class="text-gray-500">Mohammed Abdalla</p>
          <p class="text-gray-500">
            I'm a <span className="text-green-400">Mecharonic</span> Engineer
            and a <span className="text-yellow-500">Full-Stack</span> developer.
          </p>
        </figcaption>
      </div>
      <div className="py-20 items-center flex flex-col mx-auto space-y-5 min-w-full">
        <button>Resume</button>
        <button>Projects</button>
      </div>
    </div>
  );
}

export default ProfileCard;
