import { CardWrapper } from "@backbase-react/ui-react";
import AccountInfoProperty from "../account-info-property/account-info-property";

/* eslint-disable-next-line */
export interface AccountInfoContainerPropertyProps {
  config: any,
  accountInfo: any,
}

function AccountProperyView(props: any): any {
  return (props?.config?.children?.length > 0
    ? (
      <div className="row">
        {
          props?.config?.children?.map((item: any, i: number) => <AccountInfoProperty accountInfo={props.accountInfo} key={item?.id || i} item={item} />)
        }
      </div>
    )
    :
    <></>);

}

export function AccountInfoContainer(props: AccountInfoContainerPropertyProps) {
  return (
    <div className='mt-4'>
      <CardWrapper classes='p-4'>
        <div className="d-flex">
          <h3>{props?.config?.title}</h3>
        </div>
        <AccountProperyView {...props}/>
      </CardWrapper>
    </div>
  );
}

export default AccountInfoContainer;
