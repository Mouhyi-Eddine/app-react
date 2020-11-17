import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found'
import PokemonEdit from './pages/pokemon-edit'
import PokemonAdd from './pages/pokemon-add'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

  
const App: FunctionComponent = () => {
    
 return (
    <Router>
      <div>
         {/* la bare de navigation */}
         <nav>
            <div className="naw-wrapper teal">
               <Link to="/" className="brand-logo center">Pokédex</Link>
            </div>
         </nav>
         {/* le système de gestion des routes dans notre application */}
         <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemons" component={PokemonList} />
            <Route exact path="/pokemons/add" component={PokemonAdd} />
            <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
            <Route path="/pokemons/:id" component = {PokemonsDetail} />
            <Route component = {PageNotFound} />
         </Switch>
      </div>
   </Router>
    )
 }
  
export default App;