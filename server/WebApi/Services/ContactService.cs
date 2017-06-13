using System.Collections.Generic;
using WebApi.Controllers.Model;
using WebApi.Repositories;

namespace WebApi.Services
{
    public class ContactService : IContactService
    {

        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindAllContacts()
        {
            return _contactRepository.FindAll();
        }

        public Contact FindContactById(int id)
        {
            return _contactRepository.FindById(id);
        }

        public void SaveContact(Contact contact)
        {
            _contactRepository.Create(contact);
        }

        public void DeleteContact(int id)
        {
            _contactRepository.Delete(id);
        }

        public void UpdateContact(Contact contact)
        {
            _contactRepository.Update(contact);
        }
    }
}
