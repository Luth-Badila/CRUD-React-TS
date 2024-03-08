import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

// import Root from "./routes/root";
// import ErrorPage from "./pages/error-page";
// import Contact from "./routes/contacts";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <Root />,
//   // },
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
//   // {
//   //   path: "contacts/:Id",
//   //   element: <Contact />,
//   // },
// ]);

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
