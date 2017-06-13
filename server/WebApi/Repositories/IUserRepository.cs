using WebApplication1.Controllers.Model;

namespace WebApi.Repositories
{
    public interface IUserRepository
    {
        User FindByUsername(string username);
        User FindByUsernameAndPassword(string username, string password);
    }
}
