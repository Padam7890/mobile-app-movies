import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <>
    <Link href={'/(tabs)'} asChild className="flex flex-col w-1/3 p-2">
      <TouchableOpacity className=" w-[30%]">
        <Image source={{
            uri: poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "https://placeholder.co/600x400/1a1a1a/ffffff.png",
        }} className=" w-full h-52 rounded-lg" resizeMode="cover" />
        <Text className=" text-white text-sm font-semibold mt-2">{title}</Text>
      </TouchableOpacity>

      {/* <Text className=" text-white text-sm">MovieCard</Text> */}
    </Link>
    </>
    
  );
};

export default MovieCard;
