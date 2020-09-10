import namesProp from "./_props/names/names.prop.js";
import descriptionProp from "./_props/description/description.prop.js";
import createWay from "./_ways/create/create.way.js";
import readmeWay from "./_ways/readme/readme.way.js";
import getWay from "./_ways/get/get.way.js";
import cliWay from "./_ways/cli/cli.way.js";
import _commands from "./_props/_commands/index.js";
import flavourProp from "./_props/flavour/flavour.prop.js";
import _readmeWay from "./_ways/_readme/_readme.way.js";
import testWay from "./_ways/test/test.way.js";
import _specs from "./_props/_specs/index.js";

export default {
  id: 'kami',
  names: namesProp,
  description: descriptionProp,
  flavour: flavourProp,
  _commands,
  create: createWay,
  readme: readmeWay,
  _readme: _readmeWay,
  get: getWay,
  cli: cliWay,
  test: testWay,
  _specs
}