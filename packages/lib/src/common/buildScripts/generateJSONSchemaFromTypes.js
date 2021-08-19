module.exports = getSchemaFromTypes;
const path = require('path');
const fs = require('fs');

const TJS = require('typescript-json-schema');
function getSchemaFromTypes() {
  // optionally pass argument to schema generator
  const settings = {
    required: true,
  };

  // optionally pass ts compiler options
  const compilerOptions = {
    strictNullChecks: true,
  };

  // optionally pass a base path
  // const basePath = "./my-dir";

  const typesFilePath = path.join(
    __dirname,
    '../../common/interfaces/galleryTypes.ts'
  );
  console.log(
    fs.existsSync(
      path.join(__dirname, '../../common/interfaces/galleryTypes.ts')
    )
  );
  const program = TJS.getProgramFromFiles(
    [typesFilePath],
    compilerOptions
    // basePath
  );

  // We can either get the schema for one file and one type...
  const schema = TJS.generateSchema(program, 'GalleryProps', settings);
  return schema;
}
