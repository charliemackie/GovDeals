const cohere = require('cohere-ai');
const similarity = require('compute-cosine-similarity')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// get similarity scores for each contract
const getSimilarities = async (contracts, topicEmbedding) => {
  
  cohere.init(process.env.COHERE)
  var contractText = []
  var contractID = []

  await contracts.forEach(contract => {
    contractText.push(contract.Description)
    contractID.push(contract.Link)
  })

  var contractEmbeddings = await cohere.embed({
    texts: contractText,
    model: 'large'
  })

  var similarityScores = []

  // for each contract we got 
  for (var i = 0; i < contractEmbeddings.body.embeddings.length; i++) {
    
    // get the similarity to the query
    var similarityScore = similarity(contractEmbeddings.body.embeddings[i], topicEmbedding[0])
    var link = contractID[i]
    var text = contractText[i]

    similarityScores.push({
        link: link,
        similarityScore: similarityScore,
        text: text
    })
  }

  return similarityScores

}

// get topic strings we want similarities for
async function getTopicEmbedding(topic) {
  cohere.init(process.env.COHERE)

  var response = await cohere.embed({
    texts: topic,
    model: 'large'
  })
  response = response.body.embeddings

  return response
}

module.exports = {
    getTopicEmbedding,
    getSimilarities
  };