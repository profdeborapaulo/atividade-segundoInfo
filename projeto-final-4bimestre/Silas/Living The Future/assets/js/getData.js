const categories = [
    {
        id: 1,
        name: "Coupè"
    },
    {
        id: 2,
        name: "SUV"
    },
    {
        id: 3,
        name: "Sport"
    }
];

const cars = [
    {
        id: 1,
        name: "LTF Veriun",
        description: "O LTF Veriun 2035 é um carro coupè com um motor V14 3.5, com 1000 cavalos de potência e 1200 Nm de torque. Ele é capaz de atingir 100 km/h em 2.5 segundos e uma velocidade máxima de 400 km/h.",
        price: 0.5,
        categoryId: 1,
        image: "/assets/imgs/cars/lft-veriun.png",
        colors: [
            {
                name: "Azul",
                hex: "#0000FF",
                image: "/assets/imgs/cars/lft-veriun/blue.png"
            },
            {
                name: "Preto",
                hex: "#000000",
                image: "/assets/imgs/cars/lft-veriun/black.png"
            },
            {
                name: "Roxo",
                hex: "#800080",
                image: "/assets/imgs/cars/lft-veriun/violet.png"
            },
            {
                name: "Torino",
                hex: "#FF0000",
                image: "/assets/imgs/cars/lft-veriun/torino.png"
            }
        ]
    },
    {
        id: 2,
        name: "LTF Colibri",
        description: "O LTF Colibri 2035 é um SUV com um motor V10 3.0, com 700 cavalos de potência e 900 Nm de torque. Ele é capaz de atingir 100 km/h em 3.5 segundos e uma velocidade máxima de 300 km/h.",
        price: 0.47,
        categoryId: 2,
        image: "/assets/imgs/cars/lft-colibri.png",
        colors: [
            {
                name: "Azul",
                hex: "#0000FF",
                image: "/assets/imgs/cars/lft-colibri/blue.png"
            },
            {
                name: "Cinza",
                hex: "#808080",
                image: "/assets/imgs/cars/lft-colibri/gray.png"
            },
            {
                name: "Branco",
                hex: "#FFFFFF",
                image: "/assets/imgs/cars/lft-colibri/white.png"
            }
        ]
    },
    {
        id: 3,
        name: "LTF Vinius",
        description: "O LTF Vinius 2035 é um carro sport com um motor V16 4.0, com 1200 cavalos de potência e 1500 Nm de torque. Ele é capaz de atingir 100 km/h em 2.0 segundos e uma velocidade máxima de 450 km/h.",
        price: 0.57,
        categoryId: 3,
        colors: [
            {
                name: "Preto",
                hex: "#000000",
                image: "/assets/imgs/cars/lft-vinius/black.png"
            },
            {
                name: "Neve",
                hex: "#FFFFFF",
                image: "/assets/imgs/cars/lft-vinius/snow.png"
            },
            {
                name: "Torino",
                hex: "#FF0000",
                image: "/assets/imgs/cars/lft-vinius/torino.png"
            }
        ]
    }
];