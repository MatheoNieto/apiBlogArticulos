export const success = (req:any, res:any, message:any, datos:any, status:any) => {
  const response = {
    details: message,
    body: datos,
  };
  if (!message) {
    delete response.details;
  }

  res.status(status || 200).send(response);
};

export  const error = (req:any, res:any, message:any, status:any, details:any) => {
  console.error(`[response error] ${details}`);

  res.status(status || 500).send({
    error: message,
    body: '',
  });
};
