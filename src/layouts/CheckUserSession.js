import { useEffect } from "react";
import { useRouter } from "next/router";
import UserNavbar from "../components/Navbar/UserNavbar";
import Layout from "@/layouts/Layout";

const Protection = () => {
  const router = useRouter();

  return (
    <>
      <UserNavbar />
      <Layout>
        <div className="text-2xl font-semibold text-dark dark:text-light">
          {`Sorry, you don't have access. Return to the `}
          <span
            className="cursor-pointer underline hover:text-primary dark:hover:text-primaryDark"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            home page
          </span>
        </div>
      </Layout>
    </>
  );
};

export default function CheckUserSession({
  checkUserSession,
  children,
  pageProps,
}) {
  const router = useRouter();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <UserNavbar />
      {children}
    </>
  );
}
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import AdminNavbar from '../components/Navbar/AdminNavbar';
// import UserNavbar from '../components/Navbar/UserNavbar';
// import Layout from '@/layouts/Layout';

// const Protection = () => {
//   const router = useRouter();

//   return (
//     <>
//       <UserNavbar />
//       <Layout>
//         <div className="text-2xl font-semibold text-dark dark:text-light">
//           {`Sorry, you don't have access. Return to the `}
//           <span
//             className="cursor-pointer underline hover:text-primary dark:hover:text-primaryDark"
//             onClick={(e) => {
//               e.preventDefault();
//               router.push('/');
//             }}
//           >
//             home page
//           </span>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default function CheckUserSession({
//   checkUserSession,
//   admin,
//   children,
//   pageProps,
// }) {
//   const router = useRouter();
//   const isAdminRoute = router.pathname === '/admin';

//   useEffect(() => {
//     checkUserSession();
//   }, [checkUserSession]);

//   return pageProps.protected ? (
//     admin === 'admin' ? (
//       <>
//         <AdminNavbar />
//         {children}
//       </>
//     ) : (
//       <Protection />
//     )
//   ) : (
//     <>
//       <UserNavbar />
//       {children}
//     </>
//   );
// }
