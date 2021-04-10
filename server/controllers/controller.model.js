
const People = require('../model/model.schema.js')


module.exports = {



    getAllPeople : async(req, res) =>{
        try {
            const personsDetails = await People.find()
                  res.send(personsDetails)
        } catch (error) {
            res.send(error)
            
        }
      

    },




    postPeople : async(req, res) =>{

    try {
        
        const user = req.body;
        console.log(user)
        const postUser = new People(user)
        const myPost = await postUser.save()
        res.status(200).send(myPost)
    } catch (error) {
        res.status(400).send(error)
        
    }

    },




    getSinglePeople : async(req, res) =>{

        try {
            const _id = req.params.id;
            const myUser = await People.findOne({_id})
             res.send(myUser);

        } catch (error) {

            res.send(error)
            
        }


    },




    deletePeople : async(req, res) =>{
       try {
       // const id = req.params.id;
        const deleteId = await People.findByIdAndDelete(req.params.id)
        if(!req.params.id){
           return res.status(400).send()

        }
        res.send(deleteId)
       } catch (error) {
           res.status(500).send(error)
           
       }

    },



    patchPeople : async(req, res) =>{

      try {
        const _id = req.params.id;
       const updatePerson = await People.findByIdAndUpdate(_id, req.body,{
           new: true
       })
       res.send(updatePerson)

      } catch (error) {
          res.status(404).send(error)
          
      }

    }






}


