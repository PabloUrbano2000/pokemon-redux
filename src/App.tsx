import React from "react";
// import { connect } from "react-redux";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import "./App.css";
import { getPokemons } from "./api";
import {
  getPokemonWithDetails,
  setLoading,
  // setPokemons,
  //  as setPokemonsActions
} from "./actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function App(): JSX.Element {
  // forma de redux con hooks
  // const pokemons = useSelector((state: any) => state.pokemons);

  // CON IMMUTABLE => OBTENEMOS POKEMONS EN FROMJS PERO CON TOJS NOS LA ARREGLAMOS
  // shallowEqual nos ayuda a que no haya rerenders innecesarios
  const pokemons = useSelector((state: any) =>
    state.getIn(["data", "pokemons"], shallowEqual)
  ).toJS();

  // const loading = useSelector((state: any) => state.loading);

  // CON IMMUTABLE EL TOJS SOLO SIRVE PARA CUANDO ES UN ARREGLO PARA OBJETO
  const loading = useSelector((state: any) => state.getIn(["ui", "loading"]));
  const dispatch: any = useDispatch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonRes: any = await getPokemons();
      dispatch(getPokemonWithDetails(pokemonRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
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
