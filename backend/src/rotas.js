import produtosController from './controller/produtosController.js'


export default function adiconarRotas (servidor) {
    servidor.use(produtosController);
}