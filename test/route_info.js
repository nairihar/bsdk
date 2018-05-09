import 'babel-polyfill'
import assert from 'assert'

import Route from '../src/http'
import { defaults, methods, } from '../src/http/configs'

describe('Route info', () => {
  describe('checking default values for simple info methods', () => {
    const api = new Route({
      name: 'api',
      routes: {},
    })
    it('getHost should return null', () => {
      assert.equal(api.getHost(), null)
    })
    it('getUrl should return null', () => {
      assert.equal(api.getUrl(), null)
    })
    it('getUrl should return "/"', () => {
      assert.equal(api.getPath(), defaults.path)
    })
    it('getName should return api name', () => {
      assert.equal(api.getName(), 'api')
    })
    it('getTimeout should return default timeout', () => {
      assert.equal(api.getTimeout(), defaults.timeout)
    })
    it('getMethod should return POST', () => {
      assert.equal(api.getMethod(), methods.POST)
    })
    it('getMessages should return messages default object', () => {
      assert.deepEqual(api.getMessages(), defaults.messages)
    })
    it('getInfo should return all default ingo', () => {
      const info = {
        name: 'api',
        host: defaults.host,
        path: defaults.path,
        method: methods.POST,
        timeout: defaults.timeout,
        url: null,
      }
      assert.deepEqual(api.getInfo(), info)
    })
  })
})
