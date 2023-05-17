export default {
  'GET /user': { name: 'login', age: 18 },
  'POST /user/login': (req, res) => {
    console.log('req.body:', req.body);
    res.send({
      ok: 1,
    });
  },
};
