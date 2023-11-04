import React from 'react'

export const HomeMap = () => {
 return (
    <div className="map_container" style={{}}>

      <iframe src="https://mapa.tutiempo.net/#-24.52713;-43.59375;2" 
      className='map'
        
      ></iframe>
      {/*<iframe src="https://mapa.tutiempo.net/#-38.27269;-52.73437;3" ></iframe>Muestra mapa mas enfocado en bs as*/}

    </div>
  )
}