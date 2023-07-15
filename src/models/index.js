// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostTypeEnum = {
  "PHOTO": "PHOTO",
  "VIDEO": "VIDEO",
  "TEXT": "TEXT"
};

const RoleEnum = {
  "USER": "USER",
  "ADMIN": "ADMIN",
  "SUPER": "SUPER",
  "OWNER": "OWNER"
};

const { Message, Repost, Like, Comment, Post, User } = initSchema(schema);

export {
  Message,
  Repost,
  Like,
  Comment,
  Post,
  User,
  PostTypeEnum,
  RoleEnum
};