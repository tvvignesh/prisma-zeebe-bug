const { BpmnParser } = require('zeebe-node-next');
const { Photon } = require('@generated/photon');

async function test(){

    let store = new Photon();
    console.log(store);

    let definitions = await BpmnParser.generateConstantsForBpmnFiles(
        './arithmetic-operations.bpmn'
    );

    console.log(definitions);

    return definitions;
}

test();