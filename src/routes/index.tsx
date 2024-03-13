import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainLayout from '@layouts/MainLayout/MainLayout';
import LazyLoad from './LazyLoad/lazy';

console.log('routes/index.tsx');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<MainLayout />}>
      <Route
        path="*"
        element={LazyLoad(() => import('@pages/Home/Home'), true, '/')}
      ></Route>
      <Route path="register" element={<>Register</>}></Route>
      <Route path="login" element={<>Login</>}></Route>
      {/* <Route
        path="login"
        element={LazyLoad(
          () => import('@pages/Login/Login'),
          localStorage.getItem('token') ? false : true,
          '/'
        )}
      /> */}
    </Route>
  )
);

function LoadRoute() {
  return <RouterProvider router={router}></RouterProvider>;
}

export { LoadRoute, router };

//usage: import {router} from '@/routes/index.jsx'
// const navigate = router.navigate

// using createBrowserRouter and createRoutesFromElements to create a router
// instead of using BrowserRouter and Routes
// using const navigate = useNavigate() might lead to rerendering
// by import router and use router.navigate instead can avoid rerendering

// export function LoadRoute() {

//   return (
//     <BrowserRouter>
//       <Routes>
//          <Route path="*" element={<MainLayout />}>
//             <Route path="*" element={<Home />}></Route>
//             <Route path="register" element={<>Register</>}></Route>
//             <Route path="login" element={<>Login</>}></Route>
//          </Route>;
//       </Routes>
//     </BrowserRouter>
//   );
// }
