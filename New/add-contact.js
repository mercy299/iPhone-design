window.addEventListener("DOMContentLoaded", () => {
  const createContactForm = document.getElementById("createContactForm");

  createContactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const contact = createContactForm.elements["contactName"].value;
    const phone = createContactForm.elements["phone"].value;
    const work = createContactForm.elements["work"].value;
    const address = createContactForm.elements["address"].value;

    const savedPhoneContacts = getFromStorage("phonebook");

    const contacts = savedPhoneContacts ? savedPhoneContacts : [];

    contacts.push({
      contactName: contact,
      phoneNumber: phone,
      work: work,
      address: address,
      id: contacts.length + 1
    });

    saveToStorage("phonebook", contacts);
  });
});
