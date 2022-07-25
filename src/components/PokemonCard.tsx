import React from "react";
import { Card } from "antd";
import StarButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";
import { useDispatch } from "react-redux";

const PokemonCard = ({ pokemon }: any) => {
  const dispatch = useDispatch();

  const {
    name,
    sprites: { front_default },
    abilities,
    types,
    id,
    favorite = false,
  } = pokemon || {};

  const handleOnFavorite = () => {
    dispatch(
      setFavorite({
        pokemonId: id,
      })
    );
  };

  const allAbilities = abilities
    .map((ability: any) => ability.ability.name)
    .join(", ");

  const allTypes = types.map((type: any) => type.type.name).join(", ");
  return (
    <Card
      style={{ width: 250 }}
      title={name}
      cover={<img src={front_default} alt={name} />}
      extra={
        <StarButton isFavorite={favorite} onClick={() => handleOnFavorite()} />
      }
    >
      <Card.Meta description={allTypes} style={{ fontWeight: 600 }} />
      <Card.Meta description={allAbilities} />
    </Card>
  );
};

export default PokemonCard;
