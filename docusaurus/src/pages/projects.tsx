import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Human Pose Estimation",
    description: "Human Pose Estimation with OAKD-lite and DepthAI.",
    url: "docs/human-pose",
    image: "https://docs-old.luxonis.com/projects/sdk/en/latest/_images/sdk_human_pose.gif",
  },
  {
    title: "ReMEmbR",
    description: "Re-implementation of Retrieval-augmented Memory for Embodied Robots using Jetson Nano",
    url: "docs/remember",
    image: require(`${assetsDir}/remember.png`),
  },
  {
    title: "Roboflow",
    description: "Roboflow computer  vision, more description later, incomplete",
    url: "docs/roboflow",
    image: "https://media.tenor.com/DM7SdBiQKhEAAAAM/cat-underwater.gif",
  },
  {
    title: "Autonomous Lane Tracking",
    description: "Autonomous driving via lane tracking using ROS2, OpenCV2, and PID Tuning",
    url: "docs/lane-tracking",
    image: "https://i.gyazo.com/4dd8359c56e1894caa49be319a9fa37a.gif",
  },
  {
    title: "Autonomous via GPS",
    description: "Autonomous driving via PointOneNav and PID tuning to navigate autonomously a recorded path",
    url: "docs/gps",
    image: "https://i.gyazo.com/ce6b0ffe765551108b0e7f624c65a144.gif"
  },
  {
    title: "Deep Learning Autonomy",
    description: "Deep Learning Model utilizing Donkeycar framework to autonomously drive around a given track after being trained on collected data",
    url: "docs/deep-learning",
    image: "https://i.gyazo.com/91f2f352d4704252230281c60c67eeb3.gif"
  },
  {
    title: "Remote Deep Learning Simulator",
    description: "All the same, but this time, on Twitch.",
    url: "docs/deep-learning",
    image: "https://i.gyazo.com/63fbb655fcb58cbbfcc851a8407cebce.gif",
  },
  {
    title: "Deep Learning Simulator",
    description: "Deep Learning Model utilizing Donkeycar framework to autonomously drive around a given track in a simulator",
    url: "docs/deep-learning",
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
