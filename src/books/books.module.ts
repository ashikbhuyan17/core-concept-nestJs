/* eslint-disable prettier/prettier */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from 'src/logger.middleware';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    imports: [],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('book');
        // .forRoutes({ path: 'book', method: RequestMethod.ALL });

    }
}
