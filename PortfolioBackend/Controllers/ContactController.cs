using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Data;
using PortfolioBackend.Models;

namespace PortfolioBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(ContactMessage message)
        {
            if (message == null) return BadRequest("Invalid message data");

            _context.ContactMessages.Add(message);
            await _context.SaveChangesAsync();

            Console.WriteLine($"New Contact Message from: {message.FullName}");

            return Ok(new { message = "Message received and saved successfully!" });
        }
    }
}