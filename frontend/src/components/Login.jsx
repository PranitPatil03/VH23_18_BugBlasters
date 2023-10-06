// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [user, setUser] = useState({
//     email: "",
//     username: "",
//     password: "",
//   });

//   const onSignUp=()=>{

//   }

//   return (
//     <div className="flex items-center min-h-screen bg-white">
//       <div className="container mx-auto">
//         <div className="max-w-md mx-auto my-10">
//           <div className="text-center">
//             <h1 className="my-3 text-3xl text-gray-700 dark:text-gray-900">
//               Signup
//             </h1>
//             <p className="text-gray-500 dark:text-gray-600">
//               register to new account
//             </p>
//           </div>
//           <div className="m-7">
//             <form action="">
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm text-gray-600 dark:text-gray-600"
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   placeholder="username"
//                   value={user.username}
//                   onChange={(e) =>
//                     setUser({ ...user, username: e.target.value })
//                   }
//                   className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-200 dark:focus:border-gray-500"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm text-gray-600 dark:text-gray-600"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="you@company.com"
//                   value={user.email}
//                   onChange={(e) => setUser({ ...user, email: e.target.value })}
//                   className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-200 dark:focus:border-gray-500"
//                 />
//               </div>
//               <div className="mb-6">
//                 <div className="flex justify-between mb-2">
//                   <label
//                     htmlFor="password"
//                     className="text-sm text-gray-600 dark:text-gray-600"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="password"
//                   value={user.password}
//                   onChange={(e) =>
//                     setUser({ ...user, password: e.target.value })
//                   }
//                   className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-200 dark:focus:border-gray-500"
//                 />
//               </div>
//               <div className="mb-6">
//                 <button
//                   type="button"
//                   onClick={onSignUp}
//                   className="w-full px-3 py-4 text-white bg-indigo-600 rounded-md focus:bg-indigo-600 focus:outline-none"
//                 >
//                   Sign in
//                 </button>
//               </div>
//               <p className="text-sm text-center text-gray-400">
//                 already have a account?{" "}
//                 <Link
//                   href="/login"
//                   className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
//                 >
//                   Login
//                 </Link>
//                 .
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const Login = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login
