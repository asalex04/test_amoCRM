export const contact = (first_name, last_name, phone, email, id?) => {
    return [
        {
            "id": `${id}`,
            "first_name": `${first_name}`,
            "last_name": `${last_name}`,
            "custom_fields_values": [
                {
                    "field_id": 2189311,
                    "values": [
                        {
                            "value": `${phone}`
                        }
                    ]
                },
                {
                    "field_id": 2189313,
                    "values": [
                        {
                            "value": `${email}`
                        }
                    ]
                }
            ]
        }
    ]
}