const { NlpManager } = require('node-nlp');

export default async function BotResponse(message) {

    const manager = new NlpManager({ languages: ['es'], forcesER: true });

    let product = {
        price: 26,
        boxquantity:30,
        totalperbag:6,
        totalperbox:function() {
            return this.boxquantity * this.totalperbag
          }
    }


    //saludos
    manager.addDocument('es', 'Hola que tal', 'contexto.saludos');
    manager.addDocument('es', 'como estas', 'contexto.saludos');
    manager.addDocument('es', 'Hola', 'contexto.saludos');
    manager.addDocument('es', 'Buenos dias', 'contexto.saludos');
    manager.addDocument('es', 'Buenas tardes', 'contexto.saludos');
    manager.addDocument('es', 'holaaa', 'contexto.saludos');
    manager.addDocument('es', 'hooola', 'contexto.saludos');
    manager.addDocument('es', 'bueeenas', 'contexto.saludos');
    manager.addDocument('es', 'quee tal???', 'contexto.saludos');
    manager.addDocument('es', 'como estas?', 'contexto.saludos');
    manager.addDocument('es', 'hey', 'contexto.saludos');
    manager.addDocument('es', 'hi', 'contexto.saludos');

    //pedidos
    manager.addDocument('es', 'necesito hacer un pedido', 'contexto.pedidos');
    manager.addDocument('es', 'pedidos', 'contexto.pedidos');
    manager.addDocument('es', 'quiero comprar', 'contexto.pedidos');
    manager.addDocument('es', 'comprar pan', 'contexto.pedidos');
    manager.addDocument('es', 'pedir pan', 'contexto.pedidos');
    manager.addDocument('es', 'comprar cajas', 'contexto.pedidos');
    manager.addDocument('es', 'comprar pan pita', 'contexto.pedidos');
    



    //info*************************************************
    manager.addDocument('es', 'cuanto vale la caja de pan', 'contexto.preciocaja');
    manager.addDocument('es', 'cuanto cuesta la caja de pan', 'contexto.preciocaja');
    manager.addDocument('es', 'cuanto cuesta la caja', 'contexto.preciocaja');
    manager.addDocument('es', 'cuanto cuesta cada caja', 'contexto.preciocaja');
    manager.addDocument('es', 'cuanto cuesta 1 caja', 'contexto.preciocaja');
    manager.addDocument('es', 'cuanto cuesta una caja', 'contexto.preciocaja');

    manager.addDocument('es', 'cuantos panes trae una caja caja', 'contexto.panesxcaja');
    manager.addDocument('es', 'cuantos pitas trae una caja caja', 'contexto.panesxcaja');
    manager.addDocument('es', 'cuantos pitas hay en total en una caja', 'contexto.panesxcaja');
    manager.addDocument('es', 'cuantos panes tiene una caja', 'contexto.panesxcaja');



    manager.addDocument('es', 'cuantas bolsas trae una caja', 'contexto.bolsasxcaja');
    manager.addDocument('es', 'cuantas bolsas tiene una caja', 'contexto.bolsasxcaja');
    manager.addDocument('es', 'bolsas por caja', 'contexto.bolsasxcaja');


    // Train NLG***************************
    manager.addAnswer('es', 'contexto.saludos', 'Hola, mi nombre es Louis, soy un agente virual creado para ofrecerte información sobre nuestro producto, ¿ en que puedo ayudarte ?');
    //pedidos
    manager.addAnswer('es', 'contexto.pedidos', 'Para hacer un pedido puedes dirigirte a la seccion de pedidos');
    //precio caja
    manager.addAnswer('es', 'contexto.preciocaja', 'El precio de cada caja de pan es '+ product.price + '€');
     //panes x caja
     manager.addAnswer('es', 'contexto.panesxcaja', 'La caja trae un total de ' + product.totalperbox() + ' pitas por caja');
    //bolsas x caja
     manager.addAnswer('es', 'contexto.bolsasxcaja', 'La caja trae un total de ' + product.boxquantity + ' bolsas por caja');


     
    // Train and save the model.
    await manager.train();

    manager.save();
    
    const response = await manager.process('es', message);

    if ((response.answers).length === 0){
        return 'Lo siento ! estoy en etapa de aprendizaje, creo que no te estoy entendiendo....'
    }
    
    let answers = response.answers
    answers = answers[0].answer;
    return (answers);

}
/*


    const manager = new NlpManager({ languages: ['es'], forcesER: true });
    // Adds the utterances and intests for the NLP
    manager.addDocument('es', 'Hola que tal', 'contexto.saludos');
    manager.addDocument('es', 'como estas', 'contexto.saludos');
    manager.addDocument('es', 'Hola', 'contexto.saludos');
    manager.addDocument('es', 'Buenos dias', 'contexto.saludos');
    manager.addDocument('es', 'Buenas tardes', 'contexto.saludos');
    manager.addDocument('es', 'Buenas noches', 'contexto.hello');

    // Train also the NLG
   
    manager.addAnswer('es', 'contexto.saludos', 'Hola, mi nombre es Louis, soy un agente virual que puede ofrecerte información sobre nuestro producto,¿que deseas exactamente?');
  
    // Train and save the model.
    

    await manager.train();
    manager.save();
    const response = await manager.process('es', message);
    
    return response
    

*/