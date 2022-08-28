import {IServiceInformation} from "../interface/interfaceHome";

export const servicesInformation:IServiceInformation[] = [
    {
        img: '/audit.png',
        title: 'УСЛУГИ АУДИТА',
        description: 'Аудит информационной безопасности – ключевая составляющая для правильного функционирования всей ' +
            'информационной системы предприятия.'
    },
    {
        img: '/crypto.png',
        title: 'КРИПТОЗАЩИТА',
        description: 'Разработка программных (программно-аппаратных) комплексов защиты каналов в Wi-Fi на основе VPN-роутера.'
    },
    {
        img: '/authentication.png',
        title: 'АУТЕНТИФИКАЦИЯ',
        description: 'Разработка программного пакета Цифровой подписи на основе DSA на ККК с ЕС, МЕС, ущербными кодами, ' +
            'c хеш-кодом на основе алгоритма модифицированного UMAC на ККК.'
    },
]