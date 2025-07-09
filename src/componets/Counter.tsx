import { useEffect, useRef, useState } from 'react'

// export default function Counter() {
//     const [count, setCount] = useState(0)

//     function handleClickPlus() {
//         setCount(count + 1)
//     }

//     function handleClickMinus() {
//         setCount(count - 1)
//     }

//     return (
//         <div>
//             <button onClick={handleClickPlus}> 
//                 +
//             </button>

//             <button onClick={handleClickMinus}> 
//                 -
//             </button>
//             You pressed me {count} times
//         </div>
//     )
// }

// export default function Counter(){
//     let ref = useRef(0);

//     function handleClick() {
//         ref.current = ref.current + 1;
//         alert('You clicked' + ref.current + 'times!');
//     }

//     return (
//         <button  onClick={handleClick}>
//            Click me !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         </button>
//     );
// }


// export default function Counter(){
//     const [count, setCount] = useState(0)

//        useEffect(() => {
//         setCount(c => clearIntervalid); {
//             setCount(c => c + 1);
//         } 1000);
//            return () => clearInterval(intervalid);
//        } []);
        
//     return <h1>{count}</h1>
//     }