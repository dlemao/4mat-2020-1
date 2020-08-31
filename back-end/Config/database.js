const mongoose = require ('mongoose')

module.exports = uri => {
    mongoose.connect(uri,{
useNewUrlParser: true,
 useUnifiedTopology: true
    })


    mongoose.connection.on('connected', () =>
    console.log('==> Mongoose! Conectado com sucesso ao servidor')
    )

    // Capturamos um sinal de encerramento (SIGINT), Ctrl+C   
    process.on('SIGINT', () =>       
    mongoose.connection.close(() => {         
        console.log('* Mongoose! Desconectado pelo término da aplicação');         
        // 0 indica que a finalização ocorreu sem erros          
        process.exit(0);      
        })   
        )

        mongoose.connection.on('disconnected', () =>
    console.log('==> Mongoose! Desconectado do servidor')
    )

}