const registerPatient = async(req,res)=>{
    try {
  const {firstName, lastName, age , phoneNo}= req.body



        
    } catch (error) {
        res.status(500).json({message:"server error"})
        
    }

}

