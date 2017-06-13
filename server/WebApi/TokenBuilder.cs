using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Security.Principal;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Controllers.Model;

namespace WebApi
{
    public class TokenBuilder
    {
        public static string Build(User user)
        {
            var handler = new JwtSecurityTokenHandler();
            var expires = DateTime.Now + TokenOptions.ExpiresSpan;

            var identity = new ClaimsIdentity(
                new GenericIdentity(user.userName, "TokenAuth"),
                new[] { new Claim("ID", user.id.ToString()) }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenOptions.Issuer,
                Audience = TokenOptions.Audience,
                SigningCredentials = TokenOptions.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
