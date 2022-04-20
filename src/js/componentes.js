
//Esto lo permite el 'style-loader', 'css-loader'
import '../css/componentes.css';

//Esto lo permite el 'file-loader'
// import webpacklogo from '../assets/img/webpack-logo.png';


export const saludar = (nombre) => {

    console.log( 'Creando etiqueta h1');


    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!`;

    document.body.append( h1 );



    //Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}

