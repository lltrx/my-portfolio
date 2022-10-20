import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import project from "./project";
import skill from "./skill";
import social from "./socialMedia";
import experience from "./experience";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo, skill, experience, social, project]),
});
