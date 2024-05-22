import { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/* eslint-disable-next-line */
export interface AccountInfoPropertyProps {
  item: any,
  accountInfo: any,
}

export function AccountInfoProperty(props: AccountInfoPropertyProps) {
  const [itemValue, setItemValue] = useState<any>('');

  useEffect(() => {
    let itemData: any = null;
    props?.item?.key?.split('.').map((eachKey: any) => {
      itemData = itemData === null ? props?.accountInfo?.[eachKey] : itemData?.[eachKey];
    });
    setItemValue(itemData);
  }, []);

  const renderTooltip = (iprops: any) => (
    <Tooltip id="button-tooltip" {...iprops}>
      {props?.item?.tooltip}
    </Tooltip>
  );

  const ShowToolTipView = () => {
    return props?.item?.tooltip ? <OverlayTrigger
      placement="top"
      overlay={renderTooltip}
    >
      <span className="ml-2 px-2 cursor-pointer font-weight-normal">i</span>
    </OverlayTrigger> : <></>;
  }
  return (
    itemValue ?
      (
        <div className='mt-2 pt-2 col-6' >
          <div className="col-12 font-weight-bold">
            {props?.item?.title}
            <ShowToolTipView />
          </div>
          <div className="col-12">
            {itemValue}
          </div>
        </div>
      )
      :
      <></>
  );
}

export default AccountInfoProperty;
