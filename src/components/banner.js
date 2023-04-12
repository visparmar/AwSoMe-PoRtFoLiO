import React, { useEffect, useState } from 'react'
// import Banner from '../Assets/pexels-luis-gomes-546819.jpg'
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {SiCodechef, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import viss from "../Assets/profile2-removebg-preview.png"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Footer from './footer'



function Banner() {
  const [isContainerActive, setIsContainerActive] = useState(false);
  useEffect(() => {
    const allElements = document.querySelectorAll(".animated-text");

    // It checks if there is at least one element
    if (allElements.length > 0) {
      //It runs the script for each found element
      allElements.forEach((element) => {
        const txtElement = element,
          wordsList = txtElement.getAttribute("data-words"),
          words = wordsList.split(", "); // It makes an array of words from data attribute

        let wordsCount = 0;

        entry();

        // Initial function
        function entry() {
          if (wordsCount < words.length) {
            // It runs the code for each word
            let word = words[wordsCount],
              txtArr = word.split(""), // It makes an array of letters in the word
              count = 0;

            txtElement.textContent = ""; // It removes the previous text from the element

            // For each letter in the array
            txtArr.forEach((letter) => {
              // It replaces the empty space for the "non-break-space" HTML...
              // ... This is needed to separate the words properly
              let _letter = letter === " " ? "&nbsp;" : letter;

              // It wraps every letter with a "span" and puts all they back to the element
              txtElement.innerHTML += `<span>${_letter}</span>`;
            });

            let spans = txtElement.childNodes;

            // It sets the interval between each letter showing
            const letterInterval = setInterval(activeLetter, 70);

            function activeLetter() {
              spans[count].classList.add("active");
              // console.log(spans[count])
              count++;

              if (count === spans.length) {
                clearInterval(letterInterval);

                // It waits 4 seconds to start erasing the word
                setTimeout(() => {
                  eraseText();
                }, 600);
              }
            }

            function eraseText() {
              // It sets the interval between each letter hiding
              let removeInterval = setInterval(removeLetter, 40);
              count--;

              function removeLetter() {
                spans[count].classList.remove("active");
                count--;

                if (count === -1) {
                  clearInterval(removeInterval);
                  wordsCount++;

                  // After removing the last letter,  call the initial function again
                  entry();
                }
              }
            }
          } else {
            // If the code reaches the last word
            // It resets the words counter...
            wordsCount = 0;
            // ...and calls the initial function again.
            entry();
          }
        }
      });
    }
  }, [])





  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);
  return (
    <div className='outer'>

      <div className='info'>
        <h1 > Hi <span >&#128075;</span> , i am <span className='name'> vikas Parmar</span> </h1>
        <div className="profile-image">
          <img src={viss} alt="" />
        </div>
        <div className="word">
          <span className='i-am-into'>I am into <span className="animated-text"
            data-words="Designing, UI/UX, Competative Programming, Web Development, Open Source"></span>
          </span>

    
        </div>
        <div className="icons">
          <a href="https://github.com/visparmar" target='_blank'><AiFillGithub className='icon-image' id='github'/></a>
<a href="https://www.linkedin.com/in/vikas-parmar-2492b91ba/" target='_blank'><AiFillLinkedin className='icon-image' id='linkedin'/></a>
<a href="https://www.codechef.com/users/visparmar119" target='_blank'>< SiCodechef className='icon-image' id='codechef'/></a>
 <a href="https://leetcode.com/Visparmar119/" target='_blank'>< SiLeetcode className='icon-image' id='leetcode'/></a>
 <a href="https://auth.geeksforgeeks.org/user/visparmar119/" target='_blank'> <SiGeeksforgeeks className='icon-image' id='gfg'/></a>
 

          </div>
      </div>

      <div id="particle">



        <Particles
         style= { { minHeight: '100px' }} 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 50,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 16,
                },
                repulse: {
                  distance: 200,
                  duration: 0,
                },
              },
            },
            particles: {
              color: {
                value: ["#8a2be2", "#00ffff", "#ffff00", "#008000", "#ff00ff"],
              },
              links: {
                color: "#dcdcdc",
                distance: 150,
                enable: true,
                opacity: 0.8,
                width: 2,
              },
              collisions: {
                enable: false,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 500,
                },
                value: 80,
              },
              opacity: {
                value: 0.9,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 9 },

              },
            },
            detectRetina: true,
          }}
        />

      </div>
    </div>
  )
}

export default Banner
