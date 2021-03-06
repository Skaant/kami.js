import pug from 'pug'
import fs from 'fs'
import websitePageMotif from '../website-page.motif.js'
import { TEMPLATE_FILE_NOT_FOUND, TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION, TEMPLATE_IS_NOT_A_PUG_FILE } from './_errors/shape.errors.js'

/**
 * Returns a new object
 * 
 * @param {Function|string} template
 *  When a `string` is given, expect a
 *  path to a `pug` template.
 */
export default (template, data) => {
  let _template
  if (typeof template === 'function') {
    _template = template
  } else if (typeof template === 'string') {
    if (!template.endsWith('.pug'))
      throw new Error(TEMPLATE_IS_NOT_A_PUG_FILE)
    try {
      fs.statSync(template)
      _template = pug.compileFile(template)
    } catch {
      throw new Error(TEMPLATE_FILE_NOT_FOUND)
    }
  } else {
    throw new Error(TEMPLATE_IS_NEITHER_STRING_NOR_FUNCTION)
  }
  const _data = data
  return {
    motif: websitePageMotif.id,
    data,
    /** `data` overriding may not be useful :
     *  no known consumers of this feature right now. */
    template: data => _template({
      ..._data,
      ...data
    })
  }
}