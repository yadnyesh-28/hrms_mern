const isAdmin = (req, res, next) => {
  const role=req.headers['role']
  if (role !== "Admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};


module.exports={
  isAdmin
}