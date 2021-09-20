export default {
  backendUri:
    process.env.NODE_ENV === 'development'
      ? 'http://zacniucit-elb-406a2c6714d8ca1b.elb.eu-central-1.amazonaws.com:8300/graphql/'
      : 'https://zacniucit.ceskodigital.net/graphql',
};
