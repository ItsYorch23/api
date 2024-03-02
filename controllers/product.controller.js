export default class ProductController{
      getProduct = (req, res) =>{
        res.status(200).json({msg: "esto es un get"})
    
    }
    
      postProduct = (req, res) => {
        res.status(200).json({msg: "esto es un post para prueba"})
    }
}


