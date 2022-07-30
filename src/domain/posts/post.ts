export type PostID = number;

export type AuthorAttributesData = {
  name: string;
  created_by: number;
  updatedBy: number;
  createdAt: string;
  updatedAt: string;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  created_by: number;
  updatedBy: number;
  publishedAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};
export type PostCoverAttributes = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type PostCover = {
  data: {
    id: PostID;
    attributes: PostCoverAttributes;
  };
};

export type PostAttributesData = {
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_by: PostCreatedBy;
  updatedBy: PostCreatedBy;
  createdAt: string;
  updatedAt: string;
  cover: PostCover;
};

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};

export type Data = {
  data: PostData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: string;
    };
  };
};
