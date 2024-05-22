export interface ServiceAgreement {
  additions: object;
  id: string;
  externalId: string;
  name: string;
  description: string;
  isMaster: boolean;
  status: string;
  validFromDate: string | null;
  validFromTime: string | null;
  validUntilDate: string | null;
  validUntilTime: string | null;
  customerCategory: string | null;
}
