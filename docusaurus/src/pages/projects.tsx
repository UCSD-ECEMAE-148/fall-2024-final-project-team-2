import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Human Pose Estimation",
    description: "Human Pose Estimation with OAKD-lite and DepthAI.",
    url: "https://github.com/liuyuweitarek/Kebbi-Remote-Control-System",
    image: require(`${assetsDir}/Robot-Remote-Control-System.png`),
  },
  {
    title: "ReMEmbR",
    description: "Re-implementation of Retrieval-augmented Memory for Embodied Robots using Jetson Nano",
    url: "https://github.com/kevshin2002/Coding-Journey/tree/main/Tools",
    image: require(`${assetsDir}/remember.png`),
  },
  {
    title: "Roboflow",
    description: "Roboflow computer  vision, more description later, incomplete",
    url: "https://github.com/kevshin2002/Software-Development/tree/main/Relational%20Database",
    image: "https://media.tenor.com/DM7SdBiQKhEAAAAM/cat-underwater.gif",
  },
  {
    title: "Autonomous Lane Tracking",
    description: "Autonomous driving via lane tracking using ROS2, OpenCV2, and PID Tuning",
    url: "https://github.com/kevshin2002/Software-Development/tree/main/Relational%20Database",
    image: "https://i.gyazo.com/4dd8359c56e1894caa49be319a9fa37a.gif",
  },
  {
    title: "Autonomous via GPS",
    description: "Autonomous driving via PointOneNav and PID tuning to navigate autonomously a recorded path",
    url: "https://github.com/kevshin2002/ML-AI/tree/main",
    image: "https://i.gyazo.com/ce6b0ffe765551108b0e7f624c65a144.gif"
  },
  {
    title: "Deep Learning Autonomy",
    description: "Deep Learning Model utilizing Donkeycar framework to autonomously drive around a given track after being trained on collected data",
    url: "https://github.com/kevshin2002/ML-AI/tree/main/Classifiers%20with%20MNIST",
    image: "https://i.gyazo.com/91f2f352d4704252230281c60c67eeb3.gif"
  },
  {
    title: "Remote Deep Learning Simulator",
    description: "All the same, but this time, on Twitch.",
    url: "https://github.com/kevshin2002/ML-AI/blob/main/Variational%20Autoencoder/VAE.ipynb",
    image: "https://i.gyazo.com/63fbb655fcb58cbbfcc851a8407cebce.gif",
  },
  {
    title: "Deep Learning Simulator",
    description: "Deep Learning Model utilizing Donkeycar framework to autonomously drive around a given track in a simulator",
    url: "https://github.com/kevshin2002/ML-AI/blob/main/Variational%20Autoencoder/VAE.ipynb",
    image: "https://i.gyazo.com/5bdd62438fe8c628cfbc38516377c1b6.gif",
  }
];

const title = "Projects";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
