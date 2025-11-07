import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import nodemailer from "nodemailer";

let emailTransporter: nodemailer.Transporter | null = null;

function getEmailTransporter() {
  if (!process.env.MY_EMAIL || !process.env.MY_EMAIL_PASS) {
    throw new Error("Email credentials not configured. Please set MY_EMAIL and MY_EMAIL_PASS environment variables.");
  }

  if (!emailTransporter) {
    emailTransporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });
  }

  return emailTransporter;
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/portfolio", async (_req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching portfolio projects:", error);
      res.status(500).json({ error: "Failed to fetch portfolio projects" });
    }
  });

  app.get("/api/portfolio/:id", async (req, res) => {
    try {
      const project = await storage.getProject(req.params.id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      console.error("Error fetching project:", error);
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const result = insertLeadSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid lead data", details: result.error });
      }

      const leadData = result.data;
      const { name, email, phone, businessName, service, message } = leadData;

      const transporter = getEmailTransporter();

      const serviceMap: Record<string, string> = {
        website: "Website Design",
        "social-media": "Social Media Management",
        both: "Both Services",
      };

      const emailBody = `
New Contact Form Submission from WebGlow

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Business Name: ${businessName || "Not provided"}
Service Interest: ${serviceMap[service] || service}

Message:
${message || "No message provided"}

---
This email was sent from the WebGlow contact form.
      `.trim();

      await transporter.sendMail({
        from: process.env.MY_EMAIL,
        replyTo: email,
        to: process.env.MY_EMAIL,
        subject: `New Contact Message from ${name}`,
        text: emailBody,
      });

      const lead = {
        id: Date.now().toString(),
        ...leadData,
        createdAt: new Date().toISOString(),
      };

      res.status(201).json(lead);
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send email. Please try again.";
      res.status(500).json({ error: errorMessage });
    }
  });

  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
