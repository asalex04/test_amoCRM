import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
      ContactsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
