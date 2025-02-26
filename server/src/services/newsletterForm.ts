import NewsletterForm, { TNewsletterForm } from "../models/newsletterForm";

export async function saveNewsletterForm(newsletterField: TNewsletterForm) {

    try {
        const newsletterForm = new NewsletterForm(newsletterField);

        //await newsletterForm.save().then(return newsletterForm)

        return newsletterForm;

    } catch (err: any) {
        throw new Error("Server error");
    }
}

export async function getAll() {

    try {
    
        return await NewsletterForm.find();

    } catch (err: any) {
        throw new Error("Server error");
    }
}