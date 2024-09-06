import { error, log } from 'console';

import { buscarCategoriaAsyncAwait, buscarDeporteAsyncAwait, fetcdata, IPost } from './ejemplos';



(async ()=> {
    const response=await fetcdata<IPost>('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
})()

// import { buscarCategoriaPromise, buscarDeportePromise } from './ejemplos';


// buscarDeportePromise(1)
//     .then(deporte => {
//         console.log(deporte);
//         return buscarCategoriaPromise(deporte.categoriaId);
//     })
//     .then(categoria => {
//         console.log(categoria);
//     })
//     .catch(error => console.error(error));



// import { buscarCategoria, buscarDeporte, buscarPais } from './ejemplos';
// buscarDeporte(1, (error, deporte) => {
//     if (error) {
//         console.error(error);
//         return;
//     }
//     console.log(deporte);
//     buscarCategoria(deporte!.categoriaId, (error, categoria) => {
//         if (error) {
//             console.error(error);
//             return;
//         }
//         console.log(categoria);
//         buscarPais(categoria!.paisId, (error, pais) => {
//             if (error) {
//                 console.error(error);
//                 return;
//             }
//                   console.log(pais);
//         })
//     });
// });

// import { operationGenerica } from './ejemplos';
// operationGenerica(1, 2, (a, b) => a * b, (result) => console.log(result));
// import { deportes } from './ejemplos';
// console.log(deportes);
// import { nombreAplicacion, operation } from './ejemplos';
// console.log(nombreAplicacion); // Ej
// console.log( operation({a: 1, b: 2, operator: '+'}))