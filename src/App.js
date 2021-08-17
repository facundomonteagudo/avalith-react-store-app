import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Catalog from './Components/Catalog/Catalog';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Form from './Components/Form/Form';
import NotFound from './Components/404/NotFound';
//import withContext from './Components/HOC/withContext';
import { ProductContext } from './Util/ProductContext';

function App() {
  const [value, setValue] = useState(null);

  /* const EnhancedCatalog = () => withContext(Catalog);
     const EnhancedForm = () => withContext(Form); 
     TODO: implement HOC for context ? */

  return (
    <div className="container">
      <Header />
      <ProductContext.Provider value={{ value, setValue }}>
        <Switch>
          <Route exact path="/avalith-react-store-app" component={Catalog} />
          <Route path="/add-Product" component={Form} />
          <Route path="/" component={NotFound} />
        </Switch>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
