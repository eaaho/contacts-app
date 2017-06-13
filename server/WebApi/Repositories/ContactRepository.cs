using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Controllers.Model;

namespace WebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly DatabaseContext _context;

        public ContactRepository(DatabaseContext context)
        {
            _context = context;
        }

        public List<Contact> FindAll()
        {
            var contacts = _context.Contact.ToList();
            return contacts;
        }

        public Contact FindById(int id)
        {
            var contacts = _context.Contact.FirstOrDefault(c => c.Id == id);
            return contacts;
        }

        public void Create(Contact contact)
        {
            _context.Contact.Add(contact);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contact.Update(contact);
            _context.SaveChanges();
        }

        public bool Delete(int id)
        {
            var contact = _context.Contact.FirstOrDefault(c => c.Id == id);
            if (contact != null)
            {
                _context.Contact.Remove(contact);
                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
