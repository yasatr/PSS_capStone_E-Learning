import React from "react";
import {BlobLoader} from "react-loaders-kit";
import styles from '../../Pages/Teacher/AddCourse.module.css'

function Loader() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2,
  };

  return (
    <div className={styles.centerloader}>
      <BlobLoader {...loaderProps} />
    </div>
  );
}


export default Loader;
