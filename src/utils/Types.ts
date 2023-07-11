import { User } from "@prisma/client";

export type ExpressUser = {
  id: string;
  email: string;
  metadata?: Record<any, any>;
};
export const convertExpressUser = (user: User): ExpressUser => {
  const { id, email, metadata } = user;

  return {
    id: id.toString(),
    email,
    metadata: metadata ? JSON.parse(metadata) : metadata,
  };
};
