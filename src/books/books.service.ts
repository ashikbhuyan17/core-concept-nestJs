/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    getBook(): string {
        return 'take book!';
    }
    Bye(): string {
        return 'bye bye!';
    }
}
