import React, { useState } from 'react';
import './Newtab.css';
import './Newtab.scss';
import { Box, Heading, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
var pos = require('pos');

const Newtab = () => {
  const getData = async () => {
    const data = await fetch('https://www.reddit.com/r/UpliftingNews.json');
    const json = await data.json();

    const title =
      json.data.children[Math.floor(Math.random() * json.data.children.length)]
        .data.title;

    const titleClean = title.replace(/[^a-zA-Z ]/g, '');

    var words = new pos.Lexer().lex(titleClean);

    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);

    const gmm = taggedWords.filter((word) => word[1] === 'NN');

    const noun = gmm[0][0];

    const image = await fetch(
      `https://api.unsplash.com/search/photos?client_id=4R_WFGZxzdEW5imhr_k-fnpSPgJINGGTIMnMNKuaLkU&page=1&query=${noun}&count=1`
    );
    const jsonImage = await image.json();

    console.log('jsonImage', jsonImage.results.length);
    const randomIndex = Math.floor(Math.random() * jsonImage.results.length);

    console.log(jsonImage.results[randomIndex].urls.raw);

    return {
      title,
      noun,
      image: jsonImage.results[randomIndex].urls.raw,
    };
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <Heading position="absolute">{data.title}</Heading>
      <Box width="100vw" height="100vh">
        <Image width="100%" height="100%" src={data.image} alt={data.title} />
      </Box>
    </div>
  );
};

export default Newtab;
