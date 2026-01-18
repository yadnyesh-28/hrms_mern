const jwt = require("jsonwebtoken");

// exports.verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // { userId, role }
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };



const ensureAuthenticated=(req,res,next)=>{
  const auth=req.headers['authorization'];
  if(!auth){
    return res.status(401).json({
      message:'unauthorised , JWT token is require'
    })
  }
  try{
    const decoded=jwt.verify(auth,process.env.JWT_SECRET);
    req.user=decoded;
    next();

  }catch(err){
     return res.status(401).json({
      message:'unauthorised , JWT token is wrong'
    })
  }

}

module.exports={
  ensureAuthenticated
}