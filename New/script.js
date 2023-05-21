window.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded')

    const demo = getFromStorage('phonebook')

    const contactsElement = document.getElementById('contacts-list')

    demo.forEach((c) => {
        contactsElement.innerHTML += `
        <a href="contacts.html?id=${c.id}" class="logs1" id="${c.phoneNumber}">
            <img src="grandma.svg" alt="grandma" width="40" height="40" />
            <p>${c.contactName}</p>
            <div class="contact-photos">
                <img src="star.svg" alt="Star" />
                <img src="phone.svg" alt="phone" />
                <img src="email.svg" alt="email" />
            </div>
        </a>`
    })
});