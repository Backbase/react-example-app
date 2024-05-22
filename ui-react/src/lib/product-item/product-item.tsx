import { useNavigate } from "react-router-dom";
import CardWrapper from "../card-wrapper/card-wrapper";
import * as icons from 'react-bootstrap-icons';

interface IconProps extends icons.IconProps {
  // Cannot use "name" as it is a valid SVG attribute
  // "iconName", "filename", "icon" will do it instead
  iconName: keyof typeof icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
}
/* eslint-disable-next-line */
export interface ProductItemProps {
  accountData: any;
  classes?: string;
}

const iconClassMap: any = {
  'Current Account': 'Wallet',
  'Savings Account': 'ArrowUpRightSquare',
  'Pocket Parent': 'Bank',
  'Loan': 'Coin'
};

export function ProductItem(props: ProductItemProps) {
  const navigate = useNavigate();
  //Function used to navigate on account details
  const onDetailNavigationHandler = () => {
    navigate(`/accounts/${props?.accountData?.id}/transactions`)
  }
  return (
    <div onClick={onDetailNavigationHandler} className="py-2">
      <CardWrapper classes="border-0 shadow-sm d-flex flex-row align-items-center cursor-pointer">
        <div className="pl-3">
        <Icon iconName={iconClassMap[props?.accountData?.productKindName]} size={40} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props?.accountData?.displayName}</h5>
          <p className="card-text">{props?.accountData?.BBAN}</p>
        </div>
        <div className="pr-3 font-weight-bold">${props?.accountData?.availableBalance}</div>
      </CardWrapper>
    </div>
  );
}

export default ProductItem;
