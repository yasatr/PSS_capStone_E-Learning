import React, { useEffect, useState } from "react";
import {BlobLoader} from "react-loaders-kit";
import styles from '../../Pages/Teacher/AddCourse.module.css'


function Loader({children,dataLoaded}) {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      if(dataLoaded){
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading,dataLoaded]);

  const loaderProps = {
    loading: true,
    size: 80,
    duration: 1.5,
    color: '#4d5499'
  };


  return (
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
