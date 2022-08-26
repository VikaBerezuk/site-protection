import {IServiceInformation} from "../interface/interface";

export const servicesInformation:IServiceInformation[] = [
    {
        img: '/audit.svg',
        title: 'УСЛУГИ АУДИТА',
        description: 'Аудит информационной безопасности – ключевая составляющая для правильного функционирования всей ' +
            'информационной системы предприятия.'
    },
    {
        img: '/crypto.svg',
        title: 'КРИПТОЗАЩИТА',
        description: 'Разработка программных (программно-аппаратных) комплексов защиты каналов в Wi-Fi на основе VPN-роутера.'
    },
    {
        img: '/authentication.svg',
        title: 'АУТЕНТИФИКАЦИЯ',
        description: 'Разработка программного пакета Цифровой подписи на основе DSA на ККК с ЕС, МЕС, ущербными кодами, ' +
            'c хеш-кодом на основе алгоритма модифицированного UMAC на ККК.'
    },
]