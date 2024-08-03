/** FEEDBACK: Your code is super clean and overall great use of regex! You're a superstar!!!! */
class Phone {
  constructor(phoneNumber){
    this.contacts = []
    this.phoneNumber = phoneNumber
  }
  addContact(contact){
    if(!(contact) || !(contact.name) || !(contact.phoneNumber)) return 'Invalid'
    const number = contact.phoneNumber
    const isValid =  /^\d{10}$/.test(number) 
    if(!(isValid)) return 'Invalid'
    this.contacts.push(contact)
    return `${contact.name} added.`
  }
  makeCall(contact) {
    if (typeof contact === 'string' && /^\d{10}$/.test(contact)) {
      const callThis = this.contacts.find((person) => person.phoneNumber === contact)
      if (callThis) {
        return `Calling ${callThis.name}...`
      } else {
        return `Calling ${contact}...`
      }
    } else if (typeof contact === 'string') {
      const callThis = this.contacts.find((person) => person.name === contact)
      if (callThis) {
        return `Calling ${callThis.name}...`
      } else {
        return 'Invalid'
      }
    }
    return 'Invalid'
  }
  removeContact(contact){
    const deleteThis = this.contacts.find((person) => person.name === contact)
    if(!deleteThis) return `Contact not found.`
    this.contacts.splice(this.contacts.indexOf(deleteThis),1)
    return `${deleteThis.name} removed.`
  }
}

class AppleIPhone extends Phone{
  constructor(phoneNumber,model){
    super(phoneNumber)
    this.model = model
  }
  sendIMessage(contact, message){
    if(!(contact instanceof AppleIPhone)) return 'Message could not be sent.'
    return `Message: ${message} - sent from ${this.model}`
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};