import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DeafultLayout/DefaultLayout';
import { Historico } from './pages/Historico';
import { Home } from './pages/Home/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Historico" element={<Historico />} />
      </Route>
    </Routes>
  );
}
