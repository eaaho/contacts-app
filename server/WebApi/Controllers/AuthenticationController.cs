using Microsoft.AspNetCore.Mvc;
using WebApi.Controllers.Communication;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {

            _userService = userService;

        }

        public IActionResult Authenticate([FromBody] AuthRequest authRequest)
        {

            var user = _userService.FindUserByUsernameAndPassword(authRequest.userName, authRequest.passWord);
            if (user == null) return Unauthorized();
            var token = TokenBuilder.Build(user);
            return new JsonResult(new AuthResponse(user.id.ToString(), token)); 
        }
    }
}