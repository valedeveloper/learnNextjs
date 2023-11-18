import { useState, useEffect } from 'react';

const url: string = "http://localhost:3000/api/avo"

export const useProduct = (idAvo: string | null) => {
    const [avos, setAvos] = useState([]);
    const [avo, setAvo] = useState({})
    const [isLoading,setIsLoading]=useState(false)

    const getAvos = async () => {
        setIsLoading(true)
        try {
            const url: string = "http://localhost:3000/api/avo";
            const response = await fetch(url);
            const responseData = await response.json();
            const products = await responseData.data
            setAvos(products); // Establece el estado con los datos obtenidos
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }finally{ 
            setIsLoading(false)
        }
    };
    const getAvoDetail = async (id: string) => {
        setIsLoading(true)
        if (idAvo === null) return
        try {
            const url: string = `http://localhost:3000/api/avo/${id}`;
            const response = await fetch(url)
            const avoDetail = await response.json()
            setAvo(avoDetail)

        } catch (e) {
            console.log(e);
        }finally{ 
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAvos();
    }, []); // El segundo argumento, una matriz vacía, asegura que

    useEffect(() => {
        if (idAvo !== null) {
            getAvoDetail(idAvo)
        }
        return;
    }
        , [idAvo])
    return {
        avos,
        avo,
        isLoading
    }
}