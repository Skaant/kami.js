import FOLDER from "../../../folder/folder.motif.js";
import WEBSITE from '../../website.motif.js'
import formatEnum from "../../../get/_enums/format/format.enum.js";
import INSTANCE from "../../../instance/instance.motif.js";

export default (
  id,
  options
) =>

  new Promise(resolve =>

    /** While a MOTIF doesn't have a
     *  specific `get` method, we use `FILE.get()`. */
    Promise.all([
      INSTANCE.get(
        WEBSITE,
        {
          format: formatEnum.ESM
        }),
      FOLDER.create(
        '',
        '_build',
        () => [])
    ])

      .then(([ websites ]) => {

        const website = websites.find(website =>
          
          website.id === id)

        if (!website) throw new Error(
          'No website "' + id + '".')

        const {
          provision,
          mapping,
          ...data
        } = website

        Promise.all([
          FOLDER.clear('_build/' + id),
          provision()
        ])
        
          .then(([ , _data ]) =>

            FOLDER.create(
              '',
              '_build/' + id,
              folderScope => mapping(
                folderScope,
                {
                  ...data,
                  ..._data
                },
                options
              ))

            .then(() => {
              
              FOLDER.create(
                '/_build/' + id,
                'assets',
                folderScope => {

                  FOLDER.copy(
                    '/_websites/'
                      + id + '/_assets',
                    folderScope,
                    options
                  )
                    .then(() =>
                        
                      resolve(website))

                  /** meh */
                  return []
                })
            }))
      }))