export const promisify = (client: any, service: any, arg: any) =>
  new Promise<any>((resolve, reject) =>
    client[service](arg, (err: any, data: any) => {
      if (err) return reject(err);
      return resolve(data);
    }),
  );
