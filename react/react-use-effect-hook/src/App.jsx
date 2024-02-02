
import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <h1>Merhaba useEffect hook</h1>
      <button onClick={() => { setIsPlaying(!isPlaying) }}> {isPlaying ? "Pause" : "Play"}  </button>
      <VideoPlayer isPlaying={isPlaying} />
    </>
  )
}
//https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4

function VideoPlayer({ isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {

    /* render işlemi bittikten sonra */
    console.log("Render bitti sideEffect gelsin", videoRef.current)
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

  });

  console.log("Rendering ", videoRef.current);

  return (
    <video ref={videoRef} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" loop width={300} />


  )

}

export default App
