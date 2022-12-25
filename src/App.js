import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="e/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
