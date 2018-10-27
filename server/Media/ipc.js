const log = require('../lib/logger')('media')
const Media = require('./Media')
const {
  MEDIA_ADD,
  MEDIA_UPDATE,
  MEDIA_REMOVE,
  _SUCCESS,
  _ERROR,
} = require('../../shared/actions')

const ACTION_HANDLERS = {
  [MEDIA_ADD]: async ({ payload }) => Media.add(payload),
  [MEDIA_UPDATE]: async ({ payload }) => Media.update(payload),
  [MEDIA_REMOVE]: async ({ payload }) => Media.remove(payload),
}

/**
 * Provides an IPC interface to methods that write to db
 */
module.exports = function (io) {
  process.on('message', async function (action) {
    const { type } = action

    if (typeof ACTION_HANDLERS[type] !== 'function') {
      log.debug('no handler for ipc action: %s', type)
      return
    }

    try {
      const res = await ACTION_HANDLERS[type](action)

      process.send({
        ...action,
        'type': type + _SUCCESS,
        'payload': res,
      })
    } catch (err) {
      process.send({
        ...action,
        'type': type + _ERROR,
        'error': err,
      })

      log.debug(`error in ipc action ${type}: ${err.message}`)
    }
  })
}