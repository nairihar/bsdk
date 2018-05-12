import 'babel-polyfill'
import assert from 'assert'

import Route from '../src/http'

describe('Route from object', () => {
  describe('checking route options after creating it', () => {
    const name = 'api'
    const api = new Route({
      name,
      routes: {
        signIn: '/signInAccount',
      },
    })
    it('should have route which name is signIn', () => {
      assert.equal((api.signIn instanceof Route), true)
    })
    it('name should signIn', () => {
      assert.equal(api.signIn.getName(), 'signIn')
    })
  })
})