import { SetStateAction, createContext, useState } from "react";
import RaffleType from "../types/RaffleType";
import { http } from "../http";
import PromoType from "../types/PromoType";

type Raffle_Type = {
    raffles: RaffleType[] | null,
    raffle: RaffleType | undefined,
    promotions: PromoType[],
    getPromotions: (id_raffle: string | undefined) => void,
    createRaffle: (data: any, image: any) => void,
    getRaffles: () => void,
    getRaffle: (id_raffle: string | undefined) => void,
    createNumbersThisRaffle: (quantityCotas: number, tot: string, id_raffle: string | undefined) => void,
    generate_pix: (tot: string, id_raffle: string | undefined) => void,
    myRaffles: RaffleType[] | undefined,
    getMyRaffles: () => void,
    deleteRaffle: (raffle_id: string) => void,
    delete_promo: (id_promo: string) => void,
    createPromo: (data: any) => void,
    setRaffId: React.Dispatch<SetStateAction<string>>,
}

export const RaffleContext = createContext<Raffle_Type>(null!);

export const RaffleProvider = ({children}: {children: JSX.Element}) => {

    const [raffles, setRaffles] = useState<RaffleType[]>([]);

    const [raffle, setRaffle] = useState<RaffleType>();

    const [myRaffles, setMyRaffles] = useState<RaffleType[]>([]);

    const [promotions, setPromotions] = useState<PromoType[]>([]);

    const [raffId, setRaffId] = useState('');

    const createRaffle = (data: any, image: any) => {
        
        const new_data = new FormData();

        const promotions = [
            {
                ticket_quantity: data.ticket_quantity_1,
                price_together: data.price_together_1,
            },
            {
                ticket_quantity: data.ticket_quantity_2,
                price_together: data.price_together_2,
            },
            {
                ticket_quantity: data.ticket_quantity_3,
                price_together: data.price_together_3,
            },
            {
                ticket_quantity: data.ticket_quantity_4,
                price_together: data.price_together_4,
            }
        ]

        new_data.append('title', data.title);
        new_data.append('ticket_tot', data.ticket_tot);
        new_data.append('price_unitary', data.price_unitary);
        new_data.append('image', image);
        new_data.append('promotions', JSON.stringify(promotions));

        http.request({
            url: '/create_raffle',
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: new_data,
        }).then((response) => {
            setRaffles([response.data.raffles]);
            window.location.href = `/${true}/${true}`
        })
        

    }

    const getRaffles = () => {
        http.get('/raffles').then((response) => {
            setRaffles([...response.data.raffles]);
        })
    }

    const getRaffle = (id_raffle: string | undefined) => {
        http.get(`/raffle/${id_raffle}`).then((response) => {
            setRaffle(response.data.raffle);
        })
    }

    const getMyRaffles = () => {
        http.get('/getMyRaffles').then((response) => {
            setMyRaffles([...response.data.myRaffles]);
        })
    }

    const getPromotions = (id_raffle: string | undefined) => {

        http.get(`/getPromotions/${id_raffle}`).then((response) => {
            setPromotions([...response.data.promotions]);
        })
    
    }

    const generate_pix = (tot: string, id_raffle: string | undefined) => {
        
        http.post('/generate_pix', {tot, id_raffle}).then((response) => {
        
            console.log(response.data);
        
        })
    
    }

    const createNumbersThisRaffle = (quantityCotas: number, tot: string, id_raffle: string | undefined) => {

        http.post('/createNumbersThisRaffle', {quantityCotas,tot, id_raffle}).then((response) => {

            console.log(response.data);

        })

    }

    const deleteRaffle = (raffle_id: string) => {

        http.delete(`/deleteRaffle/${raffle_id}`).then((response) => {
            setMyRaffles([...response.data.myRaffles]);
            setRaffles([...response.data.allRaffles]);
        })

    }

    const delete_promo = (id_promo: string) => {
    
        http.post(`/delete_promo`, {id_promo}).then((response) => {
            setPromotions([...response.data.allPromo]);
        })

    }

    const createPromo = (data: any) => {
        
        http.post('/createPromo', {data, raffId}).then((response) => {

            setPromotions([...response.data.promotions]);

        })
    
    }

    return (
        <RaffleContext.Provider value={{ 
            raffles, 
            createRaffle, 
            getRaffles, 
            getRaffle, 
            raffle, 
            promotions, 
            getPromotions, 
            createNumbersThisRaffle,
            generate_pix,
            myRaffles,
            getMyRaffles,
            deleteRaffle,
            delete_promo,
            createPromo,
            setRaffId,
        }}>
            {children}
        </RaffleContext.Provider>
    );

}