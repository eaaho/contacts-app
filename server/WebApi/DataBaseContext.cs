using Microsoft.EntityFrameworkCore;
using WebApi.Controllers.Model;
using WebApplication1.Controllers.Model;

namespace WebApi
{
        public class DatabaseContext : DbContext
        {
            public DatabaseContext(DbContextOptions<DatabaseContext> options)
                : base(options) { }

            public DbSet<Contact> Contact { get; set; }
            public DbSet<User> User { get; set; }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<Contact>().ToTable("Contact");
                modelBuilder.Entity<User>().ToTable("User");
            }
        }
}
