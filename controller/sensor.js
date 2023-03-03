const phModel = require('../model/sensor');

exports.getdata = () =>
  new Promise(async (resolve, reject) => {
    await phModel.find({})
      .then((user) => {
        resolve({
          status: true,
          msg: 'susccess',
          data: user,
        });
      })
      .catch(() => {
        reject({
          status: false,
          msg: 'fail',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

exports.input = (data) =>
  new Promise(async (resolve, reject) => {
    await phModel.create(data)
      .then(() => {
        resolve({
          status: true,
          msg: 'success',
        });
      })
      .catch((err) => {
        reject({
          status: false,
          msg: 'fail',
        });
      });
  });
