import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="fixed top-0 left-0 z-50 w-full bg-white">
          <Head />
        </div>
        <div className="pt-12">
          <Body />
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "result",
        element: <MainContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      {/*
       * Head
       * Body
       *   Sidebar
       *     Menu Items
       *   Main Container
       *     Buttons list
       *     Video Container
       *       Video Card
       */}
    </Provider>
  );
}

export default App;
