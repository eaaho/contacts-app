using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Controllers;
using WebApplication1.Controllers.Model;

namespace WebApi.Services
{
    public interface IUserService
    {

        User FindUserByUsername(string username);
        User FindUserByUsernameAndPassword(string username, string password);
    }
}
