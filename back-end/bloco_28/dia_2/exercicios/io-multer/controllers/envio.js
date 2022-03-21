module.exports = (req, res) =>
res.status(200).json({ file: req.files });