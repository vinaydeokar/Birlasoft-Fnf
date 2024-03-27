const fs = require('fs');
const { readFile } = require('fs/promises');
const superagent = require('superagent');

//step-1
  //fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  // console.log(`Breed: ${data}`);
  // superagent.get(`https://dog.ceo/api/breed/${data}/image/random`) // it will return a promise
  //     .then(res) => {                                              // consuming a promise
  //         console.log(res.body.message);
          
  //         fs.writeFile('dog-img.txt', res.body.message, err => {
  //             if (err) return console.log(err.message); 
  //             console.log('Random dog image saved to file!');
  //         });
  //         })
  //        .catch(err=>{
  //          console.log(err.message);
  //     });
  // });
//step-2
const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😢');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file 😢');
      resolve('success');
    });
  });
};
//chaining----> readFilePro.then(data=>return api(data)).then(res=>return writeFilePro(res.body.message))
// Using above functions in practice to chain the then() handlers
/*readFilePro(`${__dirname}/dog.txt`)
  .then(data => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then(res => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch(err => {
    console.log(err);
  });
*/

/*//consuming promises using Async/Await
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    //imgs= res.body.message;
    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};
*/

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n')); // it will join all 3 strings with a new line
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);

    throw err; // if there is an actual error, we don't just want to log it to console, we want to throw it directly i.e., to mark it as a rejected promise
  }
  return '2: READY 🐶';
};
//The function you provided is an immediately invoked function expression (IIFE). An IIFE is a JavaScript function that runs as soon as it is defined. In this case, it's an asynchronous IIFE
(async () => {
  try {
    console.log('1: Will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('ERROR 💥');
  }
})();


// console.log('1: Will get dog pics!');
// getDogPic()
//   .then(x => {
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   })
//   .catch(err => {
//     console.log('ERROR 💥');
//   });
//*/

