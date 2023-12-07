import React from "react";
import {BlobLoader} from "react-loaders-kit";
import styles from '../../Pages/Teacher/AddCourse.module.css'
import { useState, useEffect } from "react";


function Loader({children}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2,
  };


  return (
    // <div className={styles.centerloader}>
    //   <BlobLoader {...loaderProps} />
    // </div>
    <>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className={styles.centerloader}>
          <BlobLoader {...loaderProps} />
          </div>
        </div>
      )}
      {!loading && children}
    </>
  );
}


export default Loader;
