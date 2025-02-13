"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "ew nooo",
      "Are you sure?",
      "MA TIMI LAI BIRSANA SAKDINA",
      "Oh no timi yo k vandaichau pari",
      "haat khutta joddiii",
      "What about a kisssiiiiee",
      "FAGUNIYAAAA",
      "EHHH FAGUNIYAAAA",
      "TUU HAMARA JAAAN HEY REY",
      "JAAAAAAN ❤️ ",
      "AMISHAAA PLEASE",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "I will cry",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img 
  src="https://i.ibb.co/KpbjqvGn/476807842-597633863151553-3839185870232821858-n.jpg" 
  alt="Valentine" 
  className="w-1/2 max-w-[300px] rounded-lg"
/>

          <div className="my-4 text-4xl font-bold">Woooooooo now you may kiss your Valentine ;)</div>
        </>
      ) : (
        <>
          <img
            className="h-[600px]"
            src="https://i.ibb.co/Z1JjjRJL/Group-344.png"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
