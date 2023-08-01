import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        /**
         * Se reemplaza la información que proporciona el desafió ya que algunas imágenes, nombres, y discos están repetidos 
         * por un nuevo arreglo de música proporcionado por los compañeros de curso. 
         */
        pop:[
        {
            id:1,
            artist:"Michel Jackson",
            category:"pop",
            album:"Thriller",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/90/3c/60/903c6069-b321-563c-bbc5-28e26f8fb1bd/074643811224.jpg/1000x1000bb.webp"
        },
        {
            id:2,
            artist:"Michel Jackson",
            category:"pop",
            album:"Bad",
            image:"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/d2/97/4c/d2974cc9-19cc-09a2-a359-7b8fe8cae377/886443546264.jpg/1000x1000bb.webp"
        },
        {
            id:3,
            artist:"Madonna",
            category:"pop",
            album:"Madonna",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.ykiinwgl.jpg/1000x1000bb.webp"
        },
        {
            id:4,
            artist:"Madonna",
            category:"pop",
            album:"Like a Virgin",
            image:"https://is5-ssl.mzstatic.com/image/thumb/Music/y2005/m09/d19/h20/mzi.wxptosaa.jpg/1000x1000bb.webp"
        },
        {
            id:5,
            artist:"Adele",
            category:"pop",
            album:"21",
            image:"https://m.media-amazon.com/images/I/61lMwNQGYbL._SL1200_.jpg"
        },
        {
            id:6,
            artist:"Adele",
            category:"pop",
            album:"Easy On Me",
            image:"https://m.media-amazon.com/images/I/71kk7KF6fiL._SL1500_.jpg"
        },
        {
            id:7,
            artist:"Bruno Mars",
            category:"pop",
            album:"Doo-Wops & Hooligans",
            image:"https://upload.wikimedia.org/wikipedia/en/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png"
        },
        {
            id:8,
            artist:"Bruno Mars",
            category:"pop",
            album:"Unorthodox Jukebox",
            image:"https://upload.wikimedia.org/wikipedia/en/7/77/BrunoMarsUJAlbumCover.png"
        },
        {
            id:9,
            artist:"Coldplay",
            category:"pop",
            album:"Viva la Vida or Death and All His Friends",
            image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
        },
        {
            id:10,
            artist:"Coldplay",
            category:"pop",
            album:"Music of the Spheres",
            image:"https://upload.wikimedia.org/wikipedia/commons/3/37/Music_Of_The_Spheres_%28Album%29_2021.jpg"
        },
        ],

        rock:[
        {
            id:11,
            artist:"The Police",
            category:"rock",
            album:"Synchronicity",
            image:"https://www.todomusica.org/imagenes/the_police/synchronicity.jpg"
        },
        {
            id:12,
            artist:"Metallica",
            category:"rock",
            album:"Master of Puppets",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/69/f9/05/69f905ed-ff04-58a2-8de2-1b5338745f19/858978005226.png/1000x1000bb.webp"
        },
        {
            id:13,
            artist:"AC/DC",
            category:"rock",
            album:"Highway to Hell",
            image:"https://is4-ssl.mzstatic.com/image/thumb/Features6/v4/ee/bd/69/eebd6962-9b25-c177-c175-b3b3e641a29d/dj.edqjfvzd.jpg/1000x1000bb.webp"
        },
        {
            id:14,
            artist:"AC/DC",
            category:"rock",
            album:"Back in Black",
            image:"https://is1-ssl.mzstatic.com/image/thumb/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.jpg/1000x1000bb.webp"
        },
        {
            id:15,
            artist:"Deep Purple",
            category:"rock",
            album:"Machine Head",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/8b/1e/fa/8b1efa15-24c4-2190-5d7b-22e2945e281a/603497877393.jpg/1000x1000bb.webp"
        },
        {
            id:16,
            artist:"Queen",
            category:"rock",
            album:"A Night at the Opera",
            image:"https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png",

        },
        {
            id:17,
            artist:"Queen",
            category:"rock",
            album:"Made in Heaven",
            image:"https://upload.wikimedia.org/wikipedia/en/0/03/Madeinheaven.jpg",

        },
        {
            id:18,
            artist:"The Beatles",
            category:"rock",
            album:"The Beatles / White Album",
            image:"https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg",

        },
        {
            id:19,
            artist:"The Beatles",
            category:"rock",
            album:"Abbey Road",
            image:"https://images.radiox.co.uk/images/67203?crop=16_9&width=660&relax=1&format=webp&signature=qOb_EZ2EgdnqBM4qgJHAbpOhxeM=",

        },
        {
            id:20,
            artist:"Slippery When Wet",
            category:"rock",
            album:"Slippery When Wet",
            image:"https://upload.wikimedia.org/wikipedia/en/a/ab/Bon_jovi_slippery_when_wet.jpg",
        },
        ],

        rap:[
        {
            id:21,
            artist:"Tupac",
            category:"rap",
            album:"All Eyez on Me",
            image:"https://is5-ssl.mzstatic.com/image/thumb/Music/4f/49/20/dj.lbjggise.jpg/1000x1000bb.webp"
        },
        {
            id:22,
            artist:"Tupac",
            category:"rap",
            album:"Greatest Hits",
            image:"https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/ad/46/6f/ad466f7b-848b-c565-47af-6c97bb104055/00602527051840.rgb.jpg/1000x1000bb.webp"
        },
        {
            id:23,
            artist:"Kendrick Lamar",
            category:"rap",
            album:"DAMN.",
            image:"https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/05/b1/f6/05b1f61d-944e-2699-7f08-ac195bfed8d2/00602557608717.rgb.jpg/1000x1000bb.webp"
        },
        {
            id:24,
            artist:"Kendrick Lamar",
            category:"rap",
            album:"good kid, m.A.A.d city",
            image:"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/15/c2/d7/15c2d7eb-06f8-464d-fe40-18a2de2ca191/00602537362769.rgb.jpg/1000x1000bb.webp"
        },
        {
            id:25,
            artist:"Eminem",
            category:"rap",
            album:"The Marshall Mathers LP",
            image:"https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/a6/5d/28/a65d286d-549b-777c-9bab-092397c8758f/00606949062927.rgb.jpg/1000x1000bb.webp"
        },
        ],
    },
    getters: {
        /**
         * Los getters en vuex son muy similares a una propiedad computada de un componente. Esto significa que se pueden tomar 
         *      estados y hacer cierta lógica con ellos.
         * En este caso, se crean getters para obtener el total de elementos dentro de cada state por separado y luego se crea
         *      uno que suma el total de todos los getters anteriores.
         */
        contadorAlbumesPop: function(state) {
            return state.pop.length;
        },
        contadorAlbumesRock: function(state) {
            return state.rock.length;
        },
        contadorAlbumesRap: function(state) {
            return state.rap.length;
        },
        totalAlbums: function(state, getters) {
            return getters.contadorAlbumesPop + getters.contadorAlbumesRock + getters.contadorAlbumesRap;
        },
    },
    mutations: {
        /**
         * Las mutaciones son métodos de vuex, para realizar cambios en los estados del "store" (almacén de datos). Ademas, son
         *      la única forma de realizar modificaciones de los "states".
         * En algunas ocasiones, es necesario pasar datos externos a la mutación, para así poder generar alguna lógica y modificar 
         *      algún dato del almacén, esto se conoce como "Mutaciones con payload" (payload = parámetros). Para este caso, dentro
         *      de AGREGAR_ALBUM el payload sera el objeto "album", y dentro de ese objeto, se utilizara la propiedad "category" 
         *      para crear una validación del genero que elija el usuario, para posteriormente agregarlo dentro del state que
         *      corresponda.
         * Un consejo del profesor es escribir las mutaciones en mayúscula y que el nombre indique lo que realmente hace, entre 
         *      mas especifico mejor, ya que asi otro programador lo puede leer y entender que es lo que hace.
         */
        AGREGAR_ALBUM: function(state, album) {
            if (album.category == 'rock') {
                return state.rock.push(album);
            }
            if (album.category == 'pop') {
                return state.pop.push(album);
            }
            if (album.category == 'rap') {
                return state.rap.push(album);
            }
        }
    },
    actions: {
        /**
         * Las acciones sirven para realizar operaciones asíncronas y ejecutar mutaciones.
         * Una buena practica es declarar la acción con el mismo nombre que la mutación pero en minúscula, asi se puede entender
         *      que están enlazadas y pertenecen al mismo proyecto.
         * commit es un método propio de vuex, es una palabra reservada por lo que no se puede usar en cualquier contexto o 
         *      declararla como una variable. Se utiliza entre llaves {} para destructuring una instancia un método o propiedad que
         *      exista en este documento store.js (En este caso es como decir que busque dentro del documento algo que se llame
         *      AGREGAR_ALBUM y luego lo ejecute junto al objeto album).
         */
        agregar_album({commit}, album){
            commit('AGREGAR_ALBUM', album)
        }
    },
    modules: {
    }
})
