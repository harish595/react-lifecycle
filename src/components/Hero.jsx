// import React from 'react'

// const Hero = ({heroname}) => {
//     if (heroname === "joker") {
//         throw new Error ("you are not a hero")
//     }
//   return (
//       <div>
//           <h2>Hero:{heroname}</h2>
//     </div>
//   )
// }

// export default Hero

// ***************///

import React from 'react'

const Hero = ({ heroname }) => {
  if (heroname === "joker") {
    throw new Error("you're not a hero")
  }
  return (
    <h1>Hero:{ heroname}</h1>
  )
}
export default Hero
