import { Injectable } from '@nestjs/common';
import {CreateContactDto} from "./dto/create-contact.dto";
import {contact} from "./utils/contact";
import * as process from "process";
import {lead} from "./utils/lead";

interface Params {
    path: string
    method: string
    body?: any
    query?: string
    id?: string
}

@Injectable()
export class ContactsService {
    async createContact(dto: CreateContactDto) {
        const { first_name, last_name, phone, email } = dto
        let user: null
        const contacts = await Promise.all([
            this.getOneContact(phone),
            this.getOneContact(email)
        ])
        const users = contacts.filter(Boolean)
        if (users.length === 0) {
            const body = contact(first_name, last_name, phone, email)
            user = await this.fetchData({ path: 'contacts', body, method: 'POST'})
        } else {
            const id = users[0]['_embedded']['contacts'][0].id
            const body = contact(first_name, last_name, phone, email, id)
            await this.fetchData({ path: 'contacts', body, id, method: 'PATCH'})
            user = await this.getOneContact(phone)
        }
        const {_page, _links, ...userContact} = user
        const body = lead("Название сделки", 1000, userContact['_embedded'])
        return await this.fetchData({path: 'leads/complex', body, method: 'POST'})
    }

    async getAll() {
        return await this.fetchData({path: 'contacts', method: 'GET'})
    }

    async getOneContact(query: string) {
        return await this.fetchData({path: 'contacts', method: 'GET', query})
    }

    private async fetchData(parameters: Params) {
        const { path, method, body, query, id } = parameters
        const queryStr = query ? `?query=${query}` : ''
        const idStr = id ? `/${id}` : ''
        try {
            const res = await fetch(
                `${process.env.BASE_URL}${path}${queryStr}${idStr}`,
                {
                    method,
                    headers: {
                        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify(body)
                }
            )
            return res.body ? await res.json() : null
        } catch (error) {
            console.log(error)
        }
    }
}
