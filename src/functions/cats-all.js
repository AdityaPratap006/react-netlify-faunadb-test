/**
 * GET ALL THE CATS!!!
 */

 //import the faunadb package
const faunadb = require('faunadb');
    
 
 //connect to faunadb
 const q = faunadb.query
 const client = new faunadb.Client({
   secret: process.env.FAUNADB_SERVER_SECRET
 })

//  console.log('Hello!!', q, client)

 //get all the cats from faunadb    
 exports.handler = async (event, context) => {
   console.log('Function `cats-all` invoked')
   return client.query(q.Paginate(q.Match(q.Ref('indexes/all_cats'))))
     .then((response) => {
       const catRefs = response.data;


       console.log('Cat refs', catRefs)
       console.log(`${catRefs.length} cats found`)
       
       // create new query out of todo refs. http://bit.ly/2LG3MLg
       const getAllCatsDataQuery = catRefs.map((ref) => {
         return q.Get(ref)
       })


       // then query the refs
       return client.query(getAllCatsDataQuery).then((ret) => {
         return {
           statusCode: 200,
           body: JSON.stringify(ret)
         }
       })
       


     }).catch((error) => {
       console.log('error', error)
       return {
         statusCode: 400,
         body: JSON.stringify(error)
       }
     })
 }