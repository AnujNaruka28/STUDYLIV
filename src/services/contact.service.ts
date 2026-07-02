import Contact, { IContact } from "../models/Contact";
import { ContactInput } from '../validations/contact.validation';

const contactCreater = async (contactInput: ContactInput): Promise<IContact | null> => {
    return await Contact.create(contactInput);
}

export {
    contactCreater
}