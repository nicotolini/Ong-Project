
// import React ,{useState , useEffect} from 'react'
// import useFetch from '../Hooks/useFetch';
// import { CardJob } from './CardJob';

// const dataFetch = () => {
//     const [users, loading, error] = useFetch('https://remoteok.com/api?ref=producthunt')
  
//   return (
//     <section className='bg-white-200'>
//         <div className='flex flex-col '>
//             {
//                 error ? <h2>NOT FOUND</h2> : null
//             }
//         {
//             loading ? <p className='flex justify-center items-center'>Loading...</p>
//             : users.slice(1, 5).map((user, index) => (
//                 <CardJob key={index} image={user.logo} date={user.date.substring(0, 10)} jobTitle={user.position} modality="Full Time"/>
//             ))
//         }
//         </div>
//     </section>
//   )
// }

// export default dataFetch