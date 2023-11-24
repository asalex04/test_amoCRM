export const contact = (first_name, last_name, phone, email, id?) => {
    return [
        {
            "id": `${id}`,
            "first_name": `${first_name}`,
            "last_name": `${last_name}`,
            "custom_fields_values": [
                {
                    "field_id": 1536179,
                    "values": [
                        {
                            "value": `${phone}`
                        }
                    ]
                },
                {
                    "field_id": 1536181,
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