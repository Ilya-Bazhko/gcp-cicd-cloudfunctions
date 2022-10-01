exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction</font><br><b>App Version 1.2</b>";
  res.status(200).send(message);
};
