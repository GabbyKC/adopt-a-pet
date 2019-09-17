import { Client } from "@petfinder/petfinder-js";

const client = new Client({apiKey: "Puy3fIqnfC6zp1ZRxwCQXHJ9zPaFWetKggFX78leCV7WZtQa61", secret: "qCycVDErMAKaQsKaSpMnabPW65zFue0SQQAyrVFz"});

const Animals = {
    dogs: () =>
        client.animal.search({type: 'cat'&'dog', location: 'hawaii', status: 'adoptable'})
        .then(response => response.data.animals)
        .catch(error => error),
};

export default {
    Animals
};
