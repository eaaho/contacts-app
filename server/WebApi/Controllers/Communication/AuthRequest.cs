namespace WebApi.Controllers.Communication
{
    public class AuthRequest
    {
        public string userName { get; set; }
        public string passWord { get; set; }

        public AuthRequest(string username, string password)
        {
            userName = username;
            passWord = password;
        }

    }

}
