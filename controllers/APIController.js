const BAKERY = require('../model/BakeryModel');

exports.test = function (req, res) {
  res.send('Olá! Teste ao Controller');
}

exports.addProduct = function (req, res, next) {
  BAKERY.create(req.body)
    .then((product) => {
      res.send(product);
    })
    .catch(next);
};

exports.updateProduct = function (req, res, next) {
  BAKERY.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      BAKERY.findOne({ _id: req.params.id })
        .then(product => {
          res.send(product);
        });
    })
    .catch(next);
};

exports.update = function (req, res, next) {
  BAKERY.findByIdAndUpdate({ _id: req.params.id },
    req.body).then(function () {
      BAKERY.findOne({ _id: req.params.id }).then(function (product) {
        res.send(product);
      });
    }).catch(next);
};

exports.deleteProduct = function (req, res, next) {
  BAKERY.findByIdAndRemove({ _id: req.params.id })
    .then((product) => res.send(product))
    .catch(next);
};

exports.listProducts = function (req, res, next) {
  BAKERY.find()
    .then(products => {
      res.send(products);
    })
    .catch(next);
}