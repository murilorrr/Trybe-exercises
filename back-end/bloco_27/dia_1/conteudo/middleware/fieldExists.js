const fieldExists = (req, res, next) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    password.length >= 6 ? null : new Error("O campo 'password' deve ter pelo menos 6 caracteres");
  } catch (err) {
    res.status(404).json({error: true, message: err.message});
  }
  next();
};