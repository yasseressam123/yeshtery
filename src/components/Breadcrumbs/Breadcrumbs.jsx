import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Breadcrumbs.module.scss';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Men</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Clothing</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Tops</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Adidas</Breadcrumb.Item>
      <Breadcrumb.Item active>Adidas Black T-Shirt</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;