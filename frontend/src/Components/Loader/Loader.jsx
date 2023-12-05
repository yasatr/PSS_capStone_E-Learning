import React, { useEffect, useState } from "react";
import {BlobLoader} from "react-loaders-kit";
import styles from '../../Pages/Teacher/AddCourse.module.css'

const Loader = ({onLoadingComplete}) => {
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    },1500)

    return() => clearTimeout(timer);
  },[onLoadingComplete]);

  const loaderProps = {
    loading: true,
    size: 80,
    duration: 1.5,
    color: '#4d5499'
  };

  return (
    <div className={styles.centerloader}>
      {isLoading? (
        <BlobLoader {...loaderProps} />
      ): null}
    </div>
  );
}


export default Loader;
