// Typed.js
import React from "react";
import Typewriter from "typewriter-effect";

const Typed = () => {
  return (
    <div className="typed-text">
      <Typewriter
        options={{
          strings: [
            "Turning code into magic ✨",
            "Creating pastel perfection 🎨",
            "Building digital dreams 💻",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 30,
          pauseFor: 2000,
        }}
      />
    </div>
  );
};

export default Typed;
