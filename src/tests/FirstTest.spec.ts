import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Rodrigo'

  expect(user.name).toEqual('Rodrigo')
})
