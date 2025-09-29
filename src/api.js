import axios from "axios";

const serverDomain = 'https://premium-mebel-back.onrender.com'

class API {

    createApplication = async (name, phone, type, typeOfNewFurniture, typeOfRestFurniture, sleepingPlaceSize, message) => {
        let data = {}

        if(type==='new'){
            data = {
                name: name,
                phone: phone,
                type: 'Заказ новой мебели',
                typeOfNewFurniture: typeOfNewFurniture,
                typeOfRestFurniture: '',
                sleepingPlaceSize: sleepingPlaceSize,
                messageText: message.length === 0 ? 'Пустое сообщение.' : message,
            }
        } else {
            data = {
                name: name,
                phone: phone,
                type: 'Заказ реставрации мебели',
                typeOfNewFurniture: '',
                typeOfRestFurniture: typeOfRestFurniture,
                messageText: message.length === 0 ? 'Пустое сообщение.' : message
            }
        }

        await axios.post(`${serverDomain}/createNewApplication/`, data, { useCredentails: true })
    }


    createNewApplicationToConsultation = async (name, phone, message) => {
        let data = {
            name: name,
            phone: phone,
            messageText: message.length === 0 ? 'Пустое сообщение.' : message
        }

        await axios.post(`${serverDomain}/createNewApplicationToConsultation/`, data, { useCredentails: true })
    }

    createOrderToMattress = async (name, phone, type, length, width, message) => {
        let data = {
            name: name,
            phone: phone,
            type: type,
            length: length,
            width: width,
            messageText: message.length === 0 ? 'Пустое сообщение.' : message
        }

        await axios.post(`${serverDomain}/createOrderToMattress/`, data, { useCredentails: true })
    }
}

export default API;