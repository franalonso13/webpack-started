const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    //Por defecto estará en mode: 'production'
    mode: 'development',

    //Para no tener que borrar la carpeta dist, 
    //ya que dist si no lo borramos se actualiza pero lo antiguo se queda
    //Así es como si lo borraramos y se crea de nuevo la carpeta dist
    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            //Con esto cargamos con js los estilos tanto en desarrollo como al crear el build
            //En el main.js veremos que se meten los estilos
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            //Esto es si queremos un archivo concreto de css y no por cada componente que lo inyecte
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPackPlugin(
          //Definimos el comportamiento al crear el bundle de la aplicación para el html
            // Esto inyectará en mi html el js que me generará webpack, puedo indicar el nombre final
            {
                title: 'Mi Webpack App',
                //filename: 'miArchivo.html',
                template: './src/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            ignoreOrder: true
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" }
            ],
          }),

    ],

}