import { type User, type InsertUser, type PortfolioProject, type InsertPortfolioProject, type Lead, type InsertLead, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllProjects(): Promise<PortfolioProject[]>;
  getProject(id: string): Promise<PortfolioProject | undefined>;
  createProject(project: InsertPortfolioProject): Promise<PortfolioProject>;
  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, PortfolioProject>;
  private leads: Map<string, Lead>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.leads = new Map();
    this.testimonials = new Map();
    this.initializePortfolio();
    this.initializeTestimonials();
  }

  private initializePortfolio() {
    const portfolioData: InsertPortfolioProject[] = [
      {
        title: "Swaaddesh - Bihar themed restaurant",
        description: "Swaddesh is a high-quality, Bihar-themed restaurant website designed to provide users with an immersive village ambiance, smooth navigation, and seamless food-ordering integration. The website delivers a premium feel with modern UI/UX, optimized performance, and SEO-friendly structure.",
        category: "Restaurant",
        image: "/attached_assets/generated_images/Restaurant_website_showcase_9f99e5da.png",
        liveUrl: "https://swaadeshpatna.netlify.app/"
      },
      {
        title: "Glamour Beauty Salon",
        description: "Elegant salon website featuring service bookings, before-after gallery, and staff profiles.",
        category: "Beauty & Wellness",
        image: "/attached_assets/generated_images/Beauty_salon_website_e37da707.png",
        liveUrl: "https://example.com/salon"
      },
      {
        title: "Urban Fashion Store",
        description: "E-commerce website with product catalog, shopping cart, and secure checkout for local boutique.",
        category: "Retail",
        image: "/attached_assets/generated_images/Retail_store_website_c4b5a5d3.png",
        liveUrl: "https://example.com/fashion"
      },
      {
        title: "ProConsult Services",
        description: "Professional consulting firm website with team showcase, service overview, and client contact form.",
        category: "Professional Services",
        image: "/attached_assets/generated_images/Professional_services_website_b348f4e7.png",
        liveUrl: "https://example.com/consulting"
      },
      {
        title: "PowerFit Gym",
        description: "Dynamic fitness center website with class schedules, trainer profiles, and membership plans.",
        category: "Fitness",
        image: "/attached_assets/generated_images/Fitness_gym_website_418d1cd0.png",
        liveUrl: "https://example.com/gym"
      },
      {
        title: "Sweet Crust Bakery",
        description: "Warm and inviting bakery website with product showcase, online ordering, and delivery information.",
        category: "Food & Beverage",
        image: "/attached_assets/generated_images/Bakery_website_showcase_d8c9713f.png",
        liveUrl: "https://example.com/bakery"
      }
    ];

    portfolioData.forEach(project => {
      const id = randomUUID();
      this.projects.set(id, { ...project, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<PortfolioProject | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertPortfolioProject): Promise<PortfolioProject> {
    const id = randomUUID();
    const project: PortfolioProject = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const lead: Lead = {
      id,
      name: insertLead.name,
      email: insertLead.email,
      phone: insertLead.phone ?? null,
      businessName: insertLead.businessName ?? null,
      service: insertLead.service,
      message: insertLead.message ?? null,
      createdAt,
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  private initializeTestimonials() {
    const testimonialsData: InsertTestimonial[] = [
      {
        name: "Rajesh Kumar",
        business: "Spice Garden Restaurant",
        role: "Owner",
        content: "WebGlow transformed our business! The website they created is beautiful and our online orders have doubled. The team was professional and delivered ahead of schedule.",
        rating: "5",
        image: null,
      },
      {
        name: "Priya Sharma",
        business: "Glamour Beauty Salon",
        role: "Founder",
        content: "Absolutely thrilled with our new website! Our bookings increased by 40% in the first month. The social media management service has been a game-changer for us.",
        rating: "5",
        image: null,
      },
      {
        name: "Amit Patel",
        business: "Urban Fashion Store",
        role: "Co-Founder",
        content: "The e-commerce website WebGlow built for us is fantastic. Easy to manage, looks professional, and our customers love it. Highly recommend their services!",
        rating: "5",
        image: null,
      },
      {
        name: "Neha Gupta",
        business: "ProConsult Services",
        role: "Managing Director",
        content: "Working with WebGlow was seamless. They understood our needs perfectly and delivered a website that truly represents our brand. Client inquiries have increased significantly.",
        rating: "5",
        image: null,
      },
      {
        name: "Vikram Singh",
        business: "PowerFit Gym",
        role: "Head Trainer",
        content: "Our new website has helped us attract so many new members! The booking system works perfectly and the design is modern and energetic. Thank you WebGlow!",
        rating: "5",
        image: null,
      },
    ];

    testimonialsData.forEach(testimonial => {
      const id = randomUUID();
      const createdAt = new Date().toISOString();
      this.testimonials.set(id, {
        id,
        name: testimonial.name,
        business: testimonial.business,
        role: testimonial.role,
        content: testimonial.content,
        rating: testimonial.rating,
        image: testimonial.image ?? null,
        createdAt,
      });
    });
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const testimonial: Testimonial = {
      id,
      name: insertTestimonial.name,
      business: insertTestimonial.business,
      role: insertTestimonial.role,
      content: insertTestimonial.content,
      rating: insertTestimonial.rating,
      image: insertTestimonial.image ?? null,
      createdAt,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
