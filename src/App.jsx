import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Landing, Learning, SharedLayout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <SharedLayout />
          }
        >
          <Route index element={<Landing />} />
          <Route path="/learning" element={<Learning />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
