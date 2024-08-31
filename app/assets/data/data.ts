import git from "@/app/assets/images/git.svg";
import javascript from "@/app/assets/images/javscript.svg";
import tailwind from "@/app/assets/images/tailwindcss.svg";
import react from "@/app/assets/images/react.svg";
import typescript from "@/app/assets/images/typescript.svg";
import mongodb from "@/app/assets/images/mongodb.svg";
// import postgres from "@/app/assets/images/postgresql.svg";
import express from "@/app/assets/images/express.svg";
import sass from "@/app/assets/images/sass.svg";
import next from "@/app/assets/images/nextjs.svg";
// import socket from "@/app/assets/images/socket.svg";
import node from "@/app/assets/images/nodejs.svg";
import Avira from "@/app/assets/images/Avira.png";
import OpenTable from "@/app/assets/images/openTable.png";
import Pictura from "@/app/assets/images/pictura.png";
import Crop from "@/app/assets/images/crop.png";
import Space from "@/app/assets/images/space.png";
// import Summarizer from "@/app/assets/images/summarizer.png";
import Summarizer from "@/app/assets/images/summarizertwo.png";

export const skillData = [
  {
    id: 1,
    icon: git,
    name: "git",
  },
  {
    id: 2,
    icon: javascript,
    name: "javascript",
  },
  {
    id: 3,
    icon: typescript,
    name: "typescript",
  },
  {
    id: 4,
    icon: react,
    name: "react",
  },
  {
    id: 5,
    icon: sass,
    name: "sass",
  },
  {
    id: 6,
    icon: tailwind,
    name: "tailwindCSS",
  },
  {
    id: 7,
    icon: express,
    name: "express",
  },
  {
    id: 8,
    icon: node,
    name: "node",
  },
  {
    id: 9,
    icon: mongodb,
    name: "mongodb",
  },
  // {
  //   id: 10,
  //   icon: postgres,
  //   name: "postgres",
  // },
  // {
  //   id: 11,
  //   icon: socket,
  //   name: "socket",
  // },
  {
    id: 12,
    icon: next,
    name: "next",
  },
];

export const projectData = [
  {
    id: "01",
    image: Avira,
    url: "https://dev-front-seven.vercel.app/",
    title: "Avira Clothing Store",
    desc: "A fully responsive Clothing Store using MERN stack with features like User Authentication, Product browsing and Search-Filtering, WishListing and Cart management.Technologies used: React,TailwindCSS,NodeJs, ExpressJS, MongoDB ",
  },
  {
    id: "02",
    image: OpenTable,
    url: "https://open-table-clone-tp1t.vercel.app/",
    title: "OpenTable - Clone",
    desc: "An OpenTable clone, replicating some of the important features like User Authentication and Authorization, Table Availability and Reservation at your favourite restaurants near you.Technologies used: React,NextJS,Prisma, PostgresSQL",
  },
  {
    id: "03",
    image: Crop,
    url: "https://plant-disease-detection-frontend-eight.vercel.app/",
    title: "CropGuard Insight",
    desc: "A web app made for allowing people and specifically farmers to know about the details of plant disease and provide prevention measures. Also provides the feature for translating text to both Hindi and English languages.",
  },
  {
    id: "04",
    image: Space,
    url: "https://reactspace-app.netlify.app/",
    title: "Space-App",
    desc: "A React JS Fully Responsive static website with immersive UI for all screen sizes implementing Flexbox Layout using SCSS.",
  },
  {
    id: "05",
    image: Summarizer,
    url: "https://pictura-ten.vercel.app/",
    title: "Youtube Video Summariser",
    desc: "Youtube Video Summarizer is a Chrome extension built using React.js on the frontend and Node.js on the backend, enabling users to get quick summarization of youtube vidoes.",
  },
  // {
  //   id: "05",
  //   image: Pictura,
  //   url: "https://pictura-ten.vercel.app/",
  //   title: "Pictura",
  //   desc: "Pictura is an AI Image generator web app that allows you to Create original, realistic images and art from a simple text description.",
  // },
];
