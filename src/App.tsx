import { Suspense,FC } from "react";
import { useRoutes } from "react-router-dom";

import router from './router'

import Loading from './components/Loading'

const  App:FC = ()=> {

  const element = useRoutes(router)
  return (
    <div className="App">
        <Suspense fallback={<Loading/>}>
          {element}
        </Suspense>
    </div>
  );
}

export default App
