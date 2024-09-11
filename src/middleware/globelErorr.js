
export const globelErorr= (err,req,res,next)=>{
    err.erorrState=err.erorrState||500
    res.status(err.erorrState).json({error:err.message,at:err.stack})
}