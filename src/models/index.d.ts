import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum PostTypeEnum {
  PHOTO = "PHOTO",
  VIDEO = "VIDEO",
  TEXT = "TEXT"
}

export enum RoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPER = "SUPER",
  OWNER = "OWNER"
}



type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly isRead?: boolean | null;
  readonly type?: PostTypeEnum | keyof typeof PostTypeEnum | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly userTo: string;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly isRead?: boolean | null;
  readonly type?: PostTypeEnum | keyof typeof PostTypeEnum | null;
  readonly createdAt?: string | null;
  readonly userID: string;
  readonly userTo: string;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerRepost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Repost, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly blacklisted?: boolean | null;
  readonly createdAt?: string | null;
  readonly postID: string;
  readonly updatedAt?: string | null;
}

type LazyRepost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Repost, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly blacklisted?: boolean | null;
  readonly createdAt?: string | null;
  readonly postID: string;
  readonly updatedAt?: string | null;
}

export declare type Repost = LazyLoading extends LazyLoadingDisabled ? EagerRepost : LazyRepost

export declare const Repost: (new (init: ModelInit<Repost>) => Repost) & {
  copyOf(source: Repost, mutator: (draft: MutableModel<Repost>) => MutableModel<Repost> | void): Repost;
}

type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Post?: Post | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly likePostId?: string | null;
  readonly likeUserId?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Post: AsyncItem<Post | undefined>;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly likePostId?: string | null;
  readonly likeUserId?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
  };
  readonly id: string;
  readonly content: string;
  readonly blacklisted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postID: string;
  readonly userID: string;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
  };
  readonly id: string;
  readonly content: string;
  readonly blacklisted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postID: string;
  readonly userID: string;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly text: string;
  readonly image?: string | null;
  readonly video?: string | null;
  readonly type: PostTypeEnum | keyof typeof PostTypeEnum;
  readonly blacklisted?: boolean | null;
  readonly promotion?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userID: string;
  readonly Comments?: (Comment | null)[] | null;
  readonly Reposts?: (Repost | null)[] | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly text: string;
  readonly image?: string | null;
  readonly video?: string | null;
  readonly type: PostTypeEnum | keyof typeof PostTypeEnum;
  readonly blacklisted?: boolean | null;
  readonly promotion?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userID: string;
  readonly Comments: AsyncCollection<Comment>;
  readonly Reposts: AsyncCollection<Repost>;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly password: string;
  readonly userRole?: RoleEnum | keyof typeof RoleEnum | null;
  readonly address?: string | null;
  readonly premium: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blacklisted?: boolean | null;
  readonly Posts?: (Post | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Messages?: (Message | null)[] | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly password: string;
  readonly userRole?: RoleEnum | keyof typeof RoleEnum | null;
  readonly address?: string | null;
  readonly premium: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blacklisted?: boolean | null;
  readonly Posts: AsyncCollection<Post>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Messages: AsyncCollection<Message>;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}