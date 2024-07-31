import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import axios from "axios";
import Select from "react-select";
import { Container } from "react-bootstrap";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [modelOptions, setModelOptions] = useState([]);
  const [selectedModel, setSelectedModel] = useState(1);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/get-model/1"
        );
        const modelJson = response.data;

        const loadedModel = await tf.loadLayersModel(
          tf.io.fromMemory(modelJson)
        );
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, []);

  const detect = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      const predictions = await model.predict(tf.browser.fromPixels(video));
      const ctx = canvasRef.current.getContext("2d");
      drawPredictions(predictions, ctx);
    }
  };

  const drawPredictions = (predictions, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log(predictions);
  };

  useEffect(() => {
    if (model) {
      const interval = setInterval(() => {
        detect();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [model]);

  return (
    <Container className="p-4">
      <div
        style={{
          position: "relative",
          width: "640px",
          height: "480px",
          margin: "0 auto",
        }}
      >
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            background: "black",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: "100%",
            height: "100%",
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 10,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <Select
          value={selectedModel}
          onChange={() => {}}
          options={modelOptions}
          placeholder="Select a model..."
        />
        </div>
    </Container>
  );
}

export default App;
