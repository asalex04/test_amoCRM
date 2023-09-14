import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateContactDto} from "./dto/create-contact.dto";
import {ContactsService} from "./contacts.service";

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @ApiOperation({ summary: 'Получение всех пользователей' })
    @ApiResponse({ status: 200})
    @Get('/')
    async getAllContacts(){
        return this.contactsService.getAll()
    }

    @ApiOperation({ summary: 'Создание контакта' })
    @ApiResponse({ status: 200})
    @Post('/')
    async createContact(@Body() dto: CreateContactDto){
        return await this.contactsService.createContact(dto)
    }
}
