import React from "react";
import { BiLoaderAlt } from 'react-icons/bi'
import style from './loading.module.css'


function Loading() {
  return ( 
    <div className={style.container__loading}>
      <BiLoaderAlt  className={style.loading} />
    </div>
   );
}

export default Loading;