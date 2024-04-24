export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
    }).format(price / 100);
}