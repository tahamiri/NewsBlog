import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import News from "./component/news";
import ErrorPage from "./component/common/errorPage";
import NavBar from "./component/common/navbar";
import PostDetails from "./component/postDetails";
import SavedPosts, { loader as savedPostsLoader } from "./component/savedPosts";
// import { loader as postsLoader } from "./component/news";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/posts" />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/posts",
        element: <News />,
        // loader: postsLoader,
      },
      {
        path: "/saved-posts",
        element: <SavedPosts />,
        loader: savedPostsLoader,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <main>
        <RouterProvider router={router} />
        {/* <Routes>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts" element={<News />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
          <Route path="/not-found" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes> */}
      </main>
    </div>
  );
}
export default App;
