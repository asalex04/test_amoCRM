export const lead = (name, price, contact) => {
    return [
        {
            "name": `${name}`,
            "price": Number(`${price}`),
            "_embedded": [`${contact}`]
        }
    ]

}