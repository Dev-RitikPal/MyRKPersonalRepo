import React, { Suspense } from 'react'

import LinearLodder from './container/lodder/linearLodder/LinearLodder';
import Scroller from "./container/scroller/Scroller";

// import "./App.css";

const AllRoutes = React.lazy(() => import('./routes/Routes'))

function App() {
  return (
    <>
    <Suspense fallback={ <LinearLodder/> }>
      <AllRoutes />
      <Scroller showBelow={250} />
    </Suspense>
    </>
  );
}

export default App;
