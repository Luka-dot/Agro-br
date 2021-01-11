const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const State = require('../models/State');
const User = require('../models/User');
const Ad = require('../models/Ad');
const Category = require('../models/Category');


const { validationResult, matchedData} = require('express-validator');


module.exports = {
    getCategories: async (req, res) => {
        const cats = await Category.find();
      


        let categories = [];

        for(let i in cats){
            categories.push({
                ...cats[i]._doc,
                img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
            })
        }

        res.json({categories});    

       
    },
    addAction: async (req, res) =>{
    //******************   I made changes to models/Ad.js  **********************************/

        const { title, price, priceneg, desc, cat } = req.body;
        
        console.log(title, price, priceneg, desc, cat);

        const newAdd = new Ad({
            title,
            price,
            priceneg,
            desc,
            cat,
            images: req.files.img
        })

        await newAdd.save(function(err){
            console.log('saved, err = ' + err);
            if(err) throw err;
            console.log('echoeing back data =' + err);
        });
       
        // const ads = new Ad();                                   
       
        // ads.description = req.body.description  
        // ads.save()
        // .then(x => {
        //     res.status(201).send({
        //         message: 'Produto cadastrado com sucesso'
        //     });
        // }).catch(e => {
        //     res.status(400).send({
        //         message: 'Falha ao cadastrar'
        //     });
        // });        
    },
    getList: async (req, res, next) => {

        //************************************** SAMPLE of request  ****************************************/
        //**********************          http://localhost:5000/ad/list         ****************************/

        let ads;

        try {
            ads = await Ad.find();
        } catch (err) {
            const error = new HttpError('Getting adds failed, please try again later.', 500);
            return next(error);
        }
    
        res.json({ ads: ads.map(ad => ad.toObject({ getters: true }))});
    
    
            // let ads = await Ad.find();
            // res.json({ads});
               
               
        // const ads = await Ad.find();
        // const total = await Ad.count();
      
        // let adList = [];

        // for(let i in ads){
        //     const cat = await Category.findById(ads[i].category);
        //     const state = await User.find({id: ads.idUser.toString()});
        //    // const img = await Ad.find(ads[i].images);
        //     adList.push({
        //         id: ads[i]._id,
        //         title: ads[i].title,
        //         price: ads[i].price,
        //         priceNegotiable: ads[i].priceNegotiable,                
        //         //image: ads[i].images    
        //         image: `${process.env.BASE}/media/${ads.images}.jpg` , 
        //         state: state.name       
        //        // img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`     
        //     })  
        // } 

        // res.json({ads: adList , total});    
       
    }, 
    getItem: async (req, res) =>{  

        //************************************** SAMPLE of request  ****************************************/
        //**********          http://localhost:5000/ad/item?id=5ffb4efd7cfcf969740bbe52         ************/

        let id = req.query.id;

        try {
            item = await Ad.findById(id)
        } catch (err) {
            const error = new HttpError('Could not find item with this ID.', 500); 
            return next(error);
        }
    
        if (!item) {
            const error = new HttpError('Could not find item with this ID.');
            return next(error);
        };

        res.status(201).json({item: item });

        // const ad = await Ad.findById(id);
        // const user = await User.findById(ad.idUser);
        // const state = await State.findById(user.state);
        // const cat = await Category.findById(ad.category);
        //const adInfo = await Ad.findById(ad.idUser);
 


            // let userInfo = {};
            // for(let i in user){

            //     userInfo.push({
            //         name: user[i].name,
            //         email: user[i].email
            //     });
            // }

           

        //    let others = null;
            // for (let i in ad){
            //     adInfo({
            //         id: ad[i]._id,
            //         title: ad[i].title,
            //         price: ad[i].price,
            //         priceNegotiable: ad[i].priceNegotiable,
            //         images: ad[i].images         
            //     })
            // } 

        
    //    res.json({
    //        id: ad.id,  
    //        title: ad.title, 
    //        price: ad.price,
    //        priceNegotiable: ad.priceNegotiable,
    //        description: ad.description,
    //        dateCreated: ad.dateCreated,           
    //        views: ad.views,          
    //        category: cat,
    //        userInfo: user,           
    //        stateName: state.name,
    //        images: ad.images,
    //       // images: `${process.env.BASE}/media/teste.jpg`  ,
    //        others
    //   });
        


       
    },
    editAction: async (req, res) =>{
        
    }
};