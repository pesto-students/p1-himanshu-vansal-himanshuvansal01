import jwt from "jsonwebtoken";

export function verifyToken(req, res, next){
    const token = req.cookies
    console.log(token);
    if (token === null) res.sendStatus(400).send("Token not present")
    jwt.verify(token.web_access_token, process.env.JWT, (err, user) =>{
        if(err){
            res.status(403).send("Token invalid")}
       req.user = user;
       next();
    }
    )}