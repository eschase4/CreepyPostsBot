require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// async function uploadFile() {
//   try {
//       const f = await openai.createFile(
//           fs.createReadStream("newdata.jsonl"),
//           "fine-tune"
//       );
//       console.log(`File ID ${f.data.id}`);
//       return f.data.id;
//   }
//   catch (err) {
//       console.log('err uploadfile: ', err.response.data);
//   } 
// }
// uploadFile();

// async function makeFineTune() {
//   try {
//       const ft = await openai.createFineTune({
//           training_file: 'file-K8kpS0z12KiU5mAW5k9iyHU9',
//           model: 'curie'
//       });
//       console.log(ft.data);
//    }
//   catch (err) {
//       console.log('err makefinetune: ', err.response.data.error);
//   }
// }
// makeFineTune();

async function getFineTunedModelName() {
  try {
      const modelName = await openai.listFineTunes();
      console.table(modelName.data.data, ["id", "status", "fine_tuned_model"]);

  }
  catch (err) {
      console.log('err getmod: ', err)
  }
}
getFineTunedModelName();