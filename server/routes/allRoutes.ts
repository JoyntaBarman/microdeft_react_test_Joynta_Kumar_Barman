import express, { Router, Request, Response } from "express";
import { projectData } from "../constant/data";
import { connectDB } from "../db/connectDB";
import { Project } from "../model/ProjectSchema";
import { Message } from "../model/messageSchema";

const AllRoute: Router = express.Router();
// single project
AllRoute.get("/project/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;
  const index = parseInt(id) - 1;

  if (!process.env?.DB_CONNECTION_URL) {
    res.json({
      success: true,
      message: "All project data from locally.",
      data: projectData[index],
    });
    return;
  } else {
    try {
      await connectDB();
      const data = await Project.findOne({ id });
      res.json({
        success: true,
        message: "All project data from database.",
        data,
      });
    } catch (error) {
      console.log("some thing is worong.", error);
    }
  }
});
// all projects
AllRoute.get("/projects", async (req: Request, res: Response) => {
  if (!process.env?.DB_CONNECTION_URL) {
    res.json({
      success: true,
      message: "All project data.",
      data: projectData,
    });
    return;
  } else {
    try {
      await connectDB();
      const data = await Project.find({ type: "project" });
      res.json({ success: true, message: "All project data.", data });
    } catch (error) {
      console.log("some thing is worong.", error);
    }
  }
});
// work data
AllRoute.get("/work", async (req: Request, res: Response) => {
  if (!process.env?.DB_CONNECTION_URL) {
    res.json({
      success: true,
      message: "All project data.",
      data: projectData,
    });
    return;
  } else {
    try {
      await connectDB();
      const data = await Project.find({});
      res.json({ success: true, message: "All project data.", data });
    } catch (error) {
      console.log("some thing is worong.", error);
    }
  }
});
AllRoute.post("/message", async (req: Request, res: Response) => {
  const { name, subject, message } = req?.body;
  console.log(name)
  try {
    await connectDB();


    if (!name || !subject || !message) {
      res.json({ success: true, message: "Input valid data" });
      return;
    }

    const messageData = new Message({ name, subject, message });
    await messageData.save();

    res.json({ success: true, message: "successfully add data" });
  } catch(err) {
    console.log("somethitng wrong.", err)
  }
});

export default AllRoute;
