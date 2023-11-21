type TProductId=string
type TProduct={
    name:string,
    id:string,
    sku:string,
    price:number,
    image:string,
    attributes:TProductAttributes

}
type TProductAttributes={
    description:string,
    shape:string,
    hardiness:string,
    taste:string
}
type TAPIAvoResponse = {
    length: number
    data: TProduct[]
    error?: string
  }

  type TItemMenu={
    path: string;
    icon: React.JSX.Element;
    title: string;
  }
  