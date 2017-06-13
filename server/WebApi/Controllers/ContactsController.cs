using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApi.Controllers.Model;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private static IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET api/contacts
        [HttpGet]
        public List<Contact> Get()
        {
            return _contactService.FindAllContacts();
        }

        // GET api/contacts/1
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _contactService.FindContactById(id);
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        { 
            _contactService.SaveContact(contact);      
        }

        // PUT api/contacts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Contact contact)
        {
            var item = _contactService.FindContactById(id);
            item.FirstName = contact.FirstName;
            item.LastName = contact.LastName;
            item.PhoneNumber = contact.PhoneNumber;
            item.StreetAddress = contact.StreetAddress;
            item.City = contact.City;
            _contactService.UpdateContact(item);
        }

        // DELETE api/contacts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactService.DeleteContact(id);
        }
    }
}
