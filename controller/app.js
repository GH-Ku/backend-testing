const router = require('express').Router();
let que = 'q';

const koneksiRMQ = () => {
  const amq = require('amqplib/callback_api');
  amq.connect(
    {
      protokol: 'amqp',
      hostname: 'amqps://tvnhpzdi:K_SqZtJ6pVOXILcWXpaDMa34mFZ7wq0x@albatross.rmq.cloudamqp.com/tvnhpzdi',
      port: '5672',
    },
    function (err, conn) {
      try {
        if (err) {
          console.log(err);
          console.log('ini error');
        } else {
          console.log('connected to rmq');
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
};

koneksiRMQ();

module.exports = { router };
