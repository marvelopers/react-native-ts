import * as Faker from './faker';
import * as Util from './util';
import { IPerson } from './IPerson';

export const createRandomPerson = (): IPerson => {
  const name = Faker.randomName();
  return {
    id: Faker.randomId(),
    createDate: Faker.randomDate(),
    modifiedDate: new Date(),
    name,
    email: Faker.randomEmail(),
    avatar: Faker.randomAvatarUrl(name),
    image: Faker.randomImage(),
    comments: Faker.randomParagraphs(5),
    counts: {
      comment: Util.random(10, 100),
      retweet: Util.random(10, 100),
      heart: Util.random(10, 100),
    },
  };
};

export default createRandomPerson;
