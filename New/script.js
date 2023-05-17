window.addEventListener('DOMContentLoaded', () => {
    const createContactForm = document.getElementById('createContactForm')

    createContactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const contact = createContactForm.elements['contactName'].value;
        const phone = createContactForm.elements['phone'].value;
        const work = createContactForm.elements['work'].value;
        const address = createContactForm.elements['address'].value;

        console.log(contact, phone, work, address)
    })



    // function dataGet() {
    //     const contactName = document.getElementById("contactName").value;
    //     const phone = document.getElementById("phone").value;
    //     const work = document.getElementById("work").value;
    //     const address = document.getElementById("address").value

    //     // console.log("dumb bitch")
    //     console.log(contactName, phone)
    //     console.log(work, address)
    // };
})