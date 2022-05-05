export type IMPIdentifications = Array<{
  id: string;
  name: string;
  type: string;
  min_length: number;
  max_length: number;
}>;

export type IMPTypeCard = {
  paging: {
    total: number;
    limit: number;
    offset: number;
  };
  results: Array<{
    secure_thumbnail: string;
    issuer: {
      default: boolean;
      name: string;
      id: number;
    };
    id: string;
    payment_type_id: string;
    thumbnail: string;
    name: string;

    status: string;
  }>;
};
