const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   // Authorization
//   const token = req.headers.authorization;
//   // if (token && inWhiteList(token)) {
//   // if (token && !inBlacklist(token)) {
//   if (token) {
//     // check token, if good, just next()
//     jwt.verify(token, "HERE'S THE SECRET", (err, decodedToken) => {
//       if (err) {
//         // this would mean the token is bad
//         res.status(401).json({ message: err.message });
//       } else {
//         // happy path
//         req.decodedToken = decodedToken;
//         next();
//       }
//     });
//   } else {
//     res.status(400).json({ message: "No credentials provided" });
//   }
// };

module.exports = (req, res, next) => {
  // Authorization
  const token = req.headers.authorization;
  // if (token && inWhiteList(token)) {
  // if (token && !inBlacklist(token)) {
  if (token) {
    // check token, if good, just next()
    jwt.verify(token, "THIS IS THE SECRET", (err, decodedToken) => {
      if (err) {
        // this would mean the token is bad
        res.status(401).json({ message: err.message });
      } else {
        // happy path
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};


// function restricted(req,res,next){
//     const token = req.headers.authorization
//     if(req.headers.authorization){
//         jwt.verify(
//             token,
//             process.env.JWT_SECRET,
//             (err, decodedToken) => {
//                 if(err){
//                     res.status(401).json({message: err.message})
//                 } else {
//                     req.decodedToken = decodedToken
//                     next()
//                 }
//             }
//         )
//     }
//     else {
//         res.status(400).json({message: 'No Credentials provided'})
//     }
// }