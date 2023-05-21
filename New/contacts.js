window.addEventListener("DOMContentLoaded", () => {
    const queryParams = window.location.search
    const urlParams = new URLSearchParams(queryParams)
    const contactId = urlParams.get('id')
    const contacts = getFromStorage('phonebook')


    const contactNameElement = document.getElementById('contact-name')
    const contactPhoneElement = document.getElementById('contact-phone')
    const contactWorkElement = document.getElementById('contact-work')
    const contactAddressElement = document.getElementById('contact-address')

    const selectedContact = contacts.find((contact) => {
        return contact.id === Number(contactId)
    })

    contactNameElement.innerHTML = selectedContact.contactName
    contactPhoneElement.innerHTML = selectedContact.phoneNumber
    contactWorkElement.innerHTML = selectedContact.work
    contactAddressElement.innerHTML = selectedContact.address
})

