import React from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./App.css";

function App(): JSX.Element {
  const pokemons = useSelector(
    (state: any) => state.data.pokemons,
    shallowEqual
  );

  const loading = useSelector((state: any) => state.ui.loading);

  const dispatch: any = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin size="large" spinning></Spin>
        </Col>
      ) : (
        <PokemonList pokemons={pokemons}></PokemonList>
      )}
    </div>
  );
}

// forma antigua de crear state en redux, en el componente require de props
// { pokemons, setPokemons }: any

// const mapStateToProps = (state: any) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   setPokemons: (value: any) => dispatch(setPokemonsActions(value)),
// });

export default //  connect(mapStateToProps, mapDispatchToProps)
App;
