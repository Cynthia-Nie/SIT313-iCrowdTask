import faker from 'faker'

const staffList = []
for(var i = 0; i<6; i++)
  {
    staffList.push(
      {
        "key": i,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "position" : faker.name.jobTitle()
      }
      )
  }

export default staffList
