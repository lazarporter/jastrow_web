import { ID, Directus } from '@directus/sdk';

type Word = {
  id: ID;
  word: string;
  definition: string;
};

type MyCollections = {
  words: Word;
};

const directus = new Directus<MyCollections>('https://yoixi3ry.directus.app/');

export const getDirectusAPI = () => ({
  login: (username: string, password: string) => {
    console.log(`login ${username}|${password}`);
    return Promise.resolve({ username });
  },
  register: (username: string, password: string) => {
    console.log(`register ${username}|${password}`);
    return Promise.resolve({ username });
  },
  logout: () => {
    console.log('logout');
  },
});

// async function init() {
//   let authenticated = false;

//   // Try to authenticate with token if exists
//   await directus.auth
//     .refresh()
//     .then(() => {
//       authenticated = true;
//     })
//     .catch(console.log);

//   // Let's login in case we don't have token or it is invalid / expired
//   while (!authenticated) {
//     const email = window.prompt('Email:');
//     const password = window.prompt('Password:');

//     await directus.auth
//       .login({ email, password })
//       .then(() => {
//         authenticated = true;
//       })
//       .catch(() => {
//         window.alert('Invalid credentials');
//       });
//   }

//   // After authentication, we can fetch the private data in case the user has access to it
//   const privateData = await directus
//     .items('privateData')
//     .readByQuery({ meta: 'total_count' });

//   console.log({
//     items: privateData.data,
//     total: privateData.meta.total_count,
//   });
// }
