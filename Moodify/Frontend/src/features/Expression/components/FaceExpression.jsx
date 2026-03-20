import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({ onClick = () => { } }) {

  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const animationRef = useRef(null);
  const streamRef = useRef(null);
  const [expression, setExpression] = useState("Detecting...")


  useEffect(() => {


    init({ videoRef, landmarkerRef, streamRef });

    return () => {

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }

    };

  }, []);

  async function handleClick() {
    const expression = detect({ videoRef, landmarkerRef, setExpression, animationRef })
    onClick(expression)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{ width: "400px", borderRadius: "12px" }}
        playsInline
      // autoPlay
      />
      <h2>{expression}</h2>
      <button onClick={handleClick} >
        Detect Expression
      </button>
    </div>
  );
}