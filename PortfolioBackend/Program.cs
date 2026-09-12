using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Data;
using PortfolioBackend.Models;

var builder = WebApplication.CreateBuilder(args);

// Ensure the app listens on the PORT provided by Railway/Render
var port = Environment.GetEnvironmentVariable("PORT") ?? "5243";
builder.WebHost.UseUrls($"http://*:{port}");

// Add services to the container
builder.Services.AddControllers();

// Connect SQLite database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=portfolio.db"));

// Add CORS
builder.Services.AddCors(options =>
{
    var allowedOrigins = builder.Configuration["CORS_ALLOWED_ORIGINS"]?.Split(',') 
                         ?? new[] { "http://localhost:5173", "https://portfolio-frontend-v1.vercel.app" };

    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins(allowedOrigins)
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Seed sample data
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureDeleted();
    db.Database.EnsureCreated();

    if (!db.Projects.Any())
    {
        db.Projects.AddRange(
            new Project
            {
                Title = "AI-Powered Smart Parking with ANPR",
                Subtitle = "Computer Vision + IoT + Full Stack",
                Description = "An AI-powered smart parking system combining Computer Vision, IoT, and Full-Stack development with ANPR, booking, alerts, and payment integration.",
                TechStack = "Python, React, Node.js, Flask, MongoDB, YOLOv8, OpenCV, ESP32",
                ImageUrl = "",
                VideoUrl = "parking-system.mp4",
                GithubUrl = "https://github.com/kalanas210/anpr-ai-parking-system",
                LiveDemoUrl = "",
                Duration = "9 Months"
            },
            new Project
            {
                Title = "LittleSparks",
                Subtitle = "ChildCare Management System",
                Description = "A childcare management platform for admins, staff, and parents with child profiles, attendance, communication, and secure role-based access.",
                TechStack = "React, Spring Boot, MySQL, Firebase",
                ImageUrl = "",
                VideoUrl = "recording.mp4",
                GithubUrl = "https://github.com/DevSpark-LittleSparks",
                LiveDemoUrl = "",
                Duration = " 12 Months",
                IsMaintenance = true
            },
            
            new Project
            {
                Title = "SpeakUp",
                Subtitle = "Blog Website",
                Description = "A modern blog-style web platform with a clean interface, user-friendly design, and engaging content presentation.",
                TechStack = "HTML, CSS, JavaScript, PHP, MySQL",
                ImageUrl = "",
                VideoUrl = "speakup.mp4",
                GithubUrl = "https://github.com/AnjanaJayamaha/SpeakUp",
                LiveDemoUrl = "",
                Duration = "2 Months"
            },
            new Project
            {
                Title = "Photography Web",
                Subtitle = "Service Platform",
                Description = "A clean photography website with booking and payment flow and high-resolution galleries for professional photographers.",
                TechStack = "React, Material UI, Stripe API, Cloudinary",
                ImageUrl = "",
                VideoUrl = "",
                GithubUrl = "https://github.com",
                LiveDemoUrl = "",
                Duration = "3 Months",
                IsMaintenance = true
            },
            new Project
            {
                Title = "My Portfolio",
                Subtitle = "React • TypeScript",
                Description = "A modern personal portfolio website built with React and Framer Motion to showcase my skills, education, and professional projects.",
                TechStack = "React, TypeScript, Framer Motion, Vite, .NET Core",
                ImageUrl = "portfolio.png",
                VideoUrl = "",
                GithubUrl = "https://github.com/AnjanaJayamaha/newPortfolio",
                LiveDemoUrl = "",
                Duration = "2 Months"
            },
            new Project
            {
                Title = "ANJ Chatbot",
                Subtitle = "Mood-Aware AI Companion",
                Description = "A deeply personalized AI companion that shifts its entire vibe and response tone based on the user's emotional state. Features dynamic themes and mindfulness micro-goals.",
                TechStack = "React.js, TypeScript, Vite, Vercel Edge API, Groq Cloud, Llama 3.3",
                ImageUrl = "projects/anj-chatbot.png",
                VideoUrl = "",
                GithubUrl = "https://github.com/AnjanaJayamaha/ANJ-chatbot",
                LiveDemoUrl = "https://anj-chatbot.vercel.app/",
                
            }
        );

        db.SaveChanges();
        Console.WriteLine("--- Database Content Verification ---");
        foreach (var p in db.Projects.ToList())
        {
            Console.WriteLine($"Project: {p.Title} | Duration: {p.Duration}");
        }
        Console.WriteLine("-------------------------------------");
    }
}

// Configure the HTTP request pipeline
// app.UseHttpsRedirection();

app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();