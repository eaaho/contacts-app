using System.Collections.Generic;
using WebApi.Controllers.Model;

namespace WebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        Contact FindContactById(int id);
        void SaveContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
    }
}
