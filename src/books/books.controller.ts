/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
    //dependance conjection
    constructor(private readonly booksService: BooksService) { }

    @Get()
    getBook(): string {
        // console.log(this.booksService.getBook())
        return this.booksService.getBook();
    }
    @Get('bye')
    Bye(): string {
        return this.booksService.Bye();
    }
}
