import testeController from './controller/testeController.js'


export default function adiconarRotas (servidor) {
    servidor.use(testeController);
}