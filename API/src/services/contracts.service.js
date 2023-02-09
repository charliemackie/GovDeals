const nlp = require('./cohere.service')
const axios = require('axios');
const { contractsService } = require('.');

const getContracts = async (params) => {

    // get topic embeddings for the query
    var topicEmbedding = await nlp.getTopicEmbedding([
        params.input
    ])

    var contracts = []

    // // get a list of contracts for a certain query from gov API
    await axios.get(`https://api.sam.gov/prod/opportunities/v2/search?limit=1000&api_key=${process.env.GOV_KEY}&postedFrom=01/01/2022&postedTo=10/10/2022`, {
    headers: {
        'Authorization': `Bearer ${process.env.GOV_KEY}`
    }
    }).then(async (response) => {
        await response.data.opportunitiesData.map(opp => {
            contracts.push({
                Link: opp.uiLink,
                Description: opp.fullParentPathName
            })
        })
    }).catch((error) => {
        console.log(error)
    })

    console.log(contracts)

    // get similarity scores
    var similarities = await nlp.getSimilarities(contracts, topicEmbedding)

    // rank the contracts
    similarities.sort((a, b) => b.similarityScore - a.similarityScore);
    var shortList = similarities.slice(0, 10);

    return shortList;
};
  
module.exports = {
    getContracts 
};
  