const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

//#region Connection
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
const CosmosClient = require('@azure/cosmos').CosmosClient

const config = require('./config')
const url = require('url')

const endpoint = config.endpoint
const key = config.key

const databaseId = config.database.id
const vibar_db = config.database.vibar_db
const containerId = config.container.id
const vibarArtistsContainer = config.container.vibar_artists
const partitionKey = { kind: 'Hash', paths: ['/Country'] }

const options = {
    endpoint: endpoint,
    key: key,
    userAgentSuffix: 'CosmosDBJavascriptQuickstart'
};

const client = new CosmosClient(options)

//#endregion

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../vibar-app/build')));

app.get('/api/artists', async (req, res) => {
    console.log('api/artists called!!')

    // query to return all children in a family
    // Including the partition key value of lastName in the WHERE filter results in a more efficient query
    const querySpec = {
        query: 'SELECT c.id, c.name, c.following, c.bio, c.isFavourite, c.Country, c.imageUrl FROM c'
    }

    try {
        const { resources: results } = await client
            .database(vibar_db)
            .container(vibarArtistsContainer)
            .items.query(querySpec)
            .fetchAll()
        for (var queryResult of results) { //remove for loop
            var resultString = JSON.stringify(queryResult)
            console.log(`\tQuery returned ${resultString}\n`);
            //setPageState(resultString);
            return res.json(results);
        }
    } catch (e) {
        console.log('Get all artists ERROR:: ', e)
        return res.json('ERROR:: Failed to get all artists')
    }

});

app.get('/api/users', async (req, res) => {
  console.log('api/users called!')
    //res.json(tasks);

    // query to return all children in a family
    // Including the partition key value of lastName in the WHERE filter results in a more efficient query
    const querySpec = {
        query: 'SELECT VALUE r.children FROM root r WHERE r.lastName = @lastName',
        parameters: [
            {
                name: '@lastName',
                value: 'Andersen'
            }
        ]
    }

    const { resources: results } = await client
        .database(databaseId)
        .container(containerId)
        .items.query(querySpec)
        .fetchAll()
    for (var queryResult of results) {
        var resultString = JSON.stringify(queryResult)
        console.log(`\tQuery returned ${resultString}\n`);
        //setPageState(resultString);
        res.json(queryResult);
    }
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});


//#region DB Functions
/**
 * Create the database if it does not exist
 */
async function createDatabase() {
    const { database } = await client.databases.createIfNotExists({
        id: databaseId
    })
    console.log(`Created database:\n${database.id}\n`)
}

/**
 * Read the database definition
 */
async function readDatabase() {
    const { resource: databaseDefinition } = await client
        .database(databaseId)
        .read()
    console.log(`Reading database:\n${databaseDefinition.id}\n`)
}

/**
 * Create the container if it does not exist
 */
async function createContainer() {
    const { container } = await client
        .database(databaseId)
        .containers.createIfNotExists(
            { id: containerId, partitionKey },
            { offerThroughput: 400 }
        )
    console.log(`Created container:\n${config.container.id}\n`)
}

/**
 * Read the container definition
 */
async function readContainer() {
    const { resource: containerDefinition } = await client
        .database(databaseId)
        .container(containerId)
        .read()
    console.log(`Reading container:\n${containerDefinition.id}\n`)
}

/**
 * Scale a container
 * You can scale the throughput (RU/s) of your container up and down to meet the needs of the workload. Learn more: https://aka.ms/cosmos-request-units
 */
async function scaleContainer() {
    const { resource: containerDefinition } = await client
        .database(databaseId)
        .container(containerId)
        .read()
    const { resources: offers } = await client.offers.readAll().fetchAll();

    const newRups = 500;
    for (var offer of offers) {
        if (containerDefinition._rid !== offer.offerResourceId) {
            continue;
        }
        offer.content.offerThroughput = newRups;
        const offerToReplace = client.offer(offer.id);
        await offerToReplace.replace(offer);
        console.log(`Updated offer to ${newRups} RU/s\n`);
        break;
    }
}

/**
 * Create family item if it does not exist
 */
async function createFamilyItem(itemBody) {
    const { item } = await client
        .database(databaseId)
        .container(containerId)
        .items.upsert(itemBody)
    console.log(`Created family item with id:\n${itemBody.id}\n`)
}

/**
 * Query the container using SQL
 */
async function queryContainer() {
    console.log(`Querying container:\n${config.container.id}`)

    // query to return all children in a family
    // Including the partition key value of lastName in the WHERE filter results in a more efficient query
    const querySpec = {
        query: 'SELECT VALUE r.children FROM root r WHERE r.lastName = @lastName',
        parameters: [
            {
                name: '@lastName',
                value: 'Andersen'
            }
        ]
    }

    const { resources: results } = await client
        .database(databaseId)
        .container(containerId)
        .items.query(querySpec)
        .fetchAll()
    for (var queryResult of results) {
        let resultString = JSON.stringify(queryResult)
        console.log(`\tQuery returned ${resultString}\n`)
    }
}

/**
 * Replace the item by ID.
 */
async function replaceFamilyItem(itemBody) {
    console.log(`Replacing item:\n${itemBody.id}\n`)
    // Change property 'grade'
    itemBody.children[0].grade = 6
    const { item } = await client
        .database(databaseId)
        .container(containerId)
        .item(itemBody.id, itemBody.Country)
        .replace(itemBody)
}

/**
 * Delete the item by ID.
 */
async function deleteFamilyItem(itemBody) {
    await client
        .database(databaseId)
        .container(containerId)
        .item(itemBody.id, itemBody.Country)
        .delete(itemBody)
    console.log(`Deleted item:\n${itemBody.id}\n`)
}

/**
 * Cleanup the database and collection on completion
 */
async function cleanup() {
    await client.database(databaseId).delete()
}

/**
 * Exit the app with a prompt
 * @param {string} message - The message to display
 */
function exit(message) {
    console.log(message)
    console.log('Press any key to exit')
    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.on('data', process.exit.bind(process, 0))
}

//createDatabase()
//    .then(() => readDatabase())
//    .then(() => createContainer())
//    .then(() => readContainer())
//    .then(() => scaleContainer())
//    .then(() => createFamilyItem(config.items.Andersen))
//    .then(() => createFamilyItem(config.items.Wakefield))
//    .then(() => queryContainer())
//    .then(() => replaceFamilyItem(config.items.Andersen))
//    .then(() => queryContainer())
    //.then(() => deleteFamilyItem(config.items.Andersen))
    //.then(() => {
    //    exit(`Completed successfully`)
    //})
    //.catch(error => {
    //    exit(`Completed with error ${JSON.stringify(error)}`)
    //})
//#endregion