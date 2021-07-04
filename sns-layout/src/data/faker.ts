import faker from 'faker';
import * as Util from './util';

export const randomId = (): string => faker.random.uuid();
export const randomName = (): string => faker.name.findName();
export const randomEmail = (): string => faker.internet.email();
export const randomAvatarUrl = (name: string): string => Util.avatarUriByName(name ?? randomName());
export const randomDate = (): Date => faker.date.recent();
export const randomParagraphs = (count: number = 2): string =>
  Util.makeArray(count).map(faker.lorem.paragraph).join('\n');
export const randomImage = (): string =>
  Util.unsplashUrl(Util.random(800, 1000), Util.random(800, 1000));
