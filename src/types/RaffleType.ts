export default interface RaffleType {
    _id: string,
    title: string,
    ticket_tot: number,
    price_unitary: string,
    image: string,
    user_id: string,
    bilhetes_vendidos: number,
    bilhetes_sobrando: number,
    valor_arrecadado: string,
}