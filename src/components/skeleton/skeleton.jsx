import React from 'react';
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from './animation_lly6poxa.json';
import styles from './skeleton.module.scss';
const Skeleton = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div className={styles.wrap}>{View}</div>;
};

export default Skeleton;
