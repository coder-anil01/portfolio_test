import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../../style/Loading.css'

const CheackOut = () => {
    window.document.title = 'Avanshika-checkout';
    const params = useParams();

    useEffect(() => {
            window.location.href = `https://avanshika.onrender.com/checkout/${params.id}`;
      }, []);

  return (
    <>
    <div className='loading'>
      <div></div>
      <img src="https://res.cloudinary.com/coderanil/image/upload/v1710069081/logio_yv2dvh.png" alt="" />
    </div>
    </>
  )
}

export default CheackOut
