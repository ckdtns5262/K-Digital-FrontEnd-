import {useState, useEffect, useRef} from 'react'
import { Link, useParams } from 'react-router-dom' ;

function MvInfoMain26() {
  

  const mvcd = useParams().mvcd;
  const [mv, setMv] =useState();
  
  useEffect(()=>{
    let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=' + mvcd ;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
    //console.log(data.movieInfoResult.movieInfo.movieCd)
      let cd = data.movieInfoResult.movieInfo.movieCd
      
    })
    .catch((error)=>console.log(error))
  },[])
  
  
  
  
  
  
  return ( 
    <>
    <h1>MyInfoMain</h1>
    {mvcd}
 
    </>
  );
}

export default MvInfoMain26;