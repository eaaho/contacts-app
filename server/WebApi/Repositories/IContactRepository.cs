using System.Collections.Generic;
using WebApi.Controllers.Model;

namespace WebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> FindAll();
        Contact FindById(int id);
        void Create(Contact contact);
        void Update(Contact contact);
        bool Delete(int id);
    }
}
