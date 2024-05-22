import CardWrapper from '../card-wrapper/card-wrapper';
import ProductItem from '../product-item/product-item';

/* eslint-disable-next-line */
export interface ProductGroupProps {
  classes?: string;
  title: string;
  accountInfoArr: any;
}

export function ProductGroup(props: ProductGroupProps) {
  return (
    <CardWrapper classes="mb-4">
      <div className="card-header font-weight-bold" style={{ fontSize: '24px' }}>
        {props?.title}
      </div>
      <ul className="list-group list-group-flush p-2">
        {props?.accountInfoArr?.map((account: any) => (
          <li className="list-group-item" key={account.id}>
            <ProductItem accountData={account}></ProductItem>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}

export default ProductGroup;
