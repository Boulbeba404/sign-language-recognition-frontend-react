import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Select from "react-select";
import { Container, Image } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { ModelAPI } from "../../apis/modelApi/ModelApi";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const modelApi = new ModelAPI();
  const [model, setModel] = useState(null);
  const [modelOptions, setModelOptions] = useState([
    { value: 1, label: "SL-CNN-LSTM" },
  ]);
  const [selectedModel, setSelectedModel] = useState(1);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const modelUrl =
          "https://raw.githubusercontent.com/Boulbeba404/sign-language-recognition-frontend-react/main/src/assets/model.json";
        const loadedModel = await tf.loadLayersModel(modelUrl);
        console.log(loadedModel, "loadedModel");
        setModel(loadedModel);
        console.log("Model loaded successfully");
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, [selectedModel]);

  // useEffect(() => {
  //   const loadModel = async () => {
  //     try {
  //       const response = await modelApi.getModelById(selectedModel);
  //       const modelJson = response.data;

  //       const loadedModel = await tf.loadLayersModel(
  //         tf.io.fromMemory(modelJson)
  //       );
  //       setModel(loadedModel);
  //     } catch (error) {
  //       console.error("Error loading model:", error);
  //     }
  //   };

  //   loadModel();
  // }, [selectedModel]);

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
    <Container className="py-4 px-2">
      <div className="d-flex justify-content-between">
        <div>
          <div className="d-flex justify-content-center">
            <Image src={logo} alt="App Logo" width={200} />
          </div>
          <h1 className="text-center">Start Classification</h1>
          <div className="mt-4 d-flex justify-content-center">
            <Select
              value={selectedModel}
              onChange={(value) =>setSelectedModel(value)}
              options={modelOptions}
              placeholder="Select a model..."
            />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "740px",
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
      </div>
    </Container>
  );
}

export default App;
