using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers.Model
{
    public class User
    {

        public User(int id, string userName, string passWord, string email)
        {
            this.id = id;
            this.userName = userName;
            this.passWord = passWord;
        }
        public User() { }

        [Key]
        public int id { get; set; }
        public string userName { get; set; }
        public string passWord { get; set; }
    }
}
