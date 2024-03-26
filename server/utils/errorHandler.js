/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
  catchErrorHandler: (err, req, res, next) => {
    console.error(
      '*****SERVER ERROR*****\n',
      `Path: ${req?.path} \n`,
      `Error Message: ${err?.message} \n`,
      `Method: ${req?.method} \n`,
    );

    res?.status(500).send(err?.message);
  },
};
