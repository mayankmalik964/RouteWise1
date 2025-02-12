const userService=require('../services/userService');
exports.register=async(req,res)=>{
    try{
        const user=await userService.register(req.body);
        res.status(201).json(user);
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }
};
exports.login=async(req,res)=>{
   try{
     const token=await userService.login((req.body));
     res.status(201).json(token);
   }catch(error){
    res.status(400).json({message:error.message});
   }
}
