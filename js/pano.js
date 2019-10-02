pannellum.viewer('panoramaCH', {
    "default": {
        "firstScene": "circle",
        "author": "Pabel Andino",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Divina Providencia",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "img/divprov.JPG",

        },


    }
});

pannellum.viewer('panoramaBS', {
    "default": {
        "firstScene": "circle",
        "author": "Pabel Andino",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Estadio de Base Ball",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "img/stbase.JPG",

        },


    }
});

pannellum.viewer('panoramaFT', {
    "default": {
        "firstScene": "circle",
        "author": "Pabel Andino",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Estadio De FootBall",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "img/stfoot.JPG",

        },


    }
});

pannellum.viewer('panoramaMR', {
    "default": {
        "firstScene": "circle",
        "author": "Pabel Andino",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Tiendas y variedades",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "img/mercado.JPG",
            "hotSpots": [
                {
                    "pitch": 4,  //Y
                    "yaw":-845,  //X
                    "type": "scene",
                    "text": "Comidas y Sopas",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "title": "Comidas el Mercado",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "img/mercadocomida.JPG",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 825,
                    "type": "scene",
                    "text": "Tiendas Variadas",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});

pannellum.viewer('panoramaPF', {
    "default": {
        "firstScene": "circle",
        "author": "Pabel Andino",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Parque de Feria",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "img/parquef.JPG",

        },


    }
});