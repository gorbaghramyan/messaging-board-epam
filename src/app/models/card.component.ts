import { ICard } from './../interfaces/card.interface';

export class Card implements ICard {
    subject: string;
    description: string;
    comments: string[];

    // dateStart: Date;
    // dateEnd: Date;

    constructor(subject: string, description: string, comments: string[]) {
        this.subject = subject;
        this.description = description;
        this.comments = comments;
    }
}