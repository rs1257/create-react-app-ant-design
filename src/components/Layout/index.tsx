import { ReactElement, ReactNode, FC } from 'react';
import './layout.scss';

type LayoutType = {
  header?: ReactNode;
  footer?: ReactNode;
  page: ReactNode;
};

const Layout: FC<LayoutType> = ({ header, footer, page }): ReactElement => {
  return (
    <div className="layout">
      {header && <div className="layout__header">{header}</div>}
      <div className="layout__content">{page}</div>
      {footer && <div className="layout__header">{footer}</div>}
    </div>
  );
};

export default Layout;
