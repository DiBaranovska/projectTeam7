import React from 'react';
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from './animation_lly6poxa.json';

const Skeleton = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
};

export default Skeleton;
