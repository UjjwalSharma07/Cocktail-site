import React from 'react'

const loading = () => {
  return (
    <div className='container' style={{height:475}}>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_kxsd2ytq.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
    </div>
  )
}

export default loading
