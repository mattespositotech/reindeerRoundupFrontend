import { Grid, GridColumn, Image } from "semantic-ui-react";

interface ImageWithContainerProps {
  imgUrl: string;
  content: JSX.Element;
  reversed?: boolean;
  list?: boolean;
  small?: boolean;
}

function textColumn(content: JSX.Element, list: boolean) {
  return (
    <GridColumn width={list ? 12 : 8} key='text'>
      {content}
    </GridColumn>
  )
}

function imageColumn(imgUrl: string, list: boolean, small: boolean) {
  const sizeProp = small ? 'small' : undefined;

  return (
    <GridColumn width={list ? 4 : 8} key='image'>
      <Image src={imgUrl} size={sizeProp} />
    </GridColumn>
  )
}

export default function ImageWithContainer({ imgUrl, content, reversed, list = false, small=false }: ImageWithContainerProps) {
  const columns = reversed ? [textColumn(content, list), imageColumn(imgUrl, list, small)] : [imageColumn(imgUrl, list, small), textColumn(content, list)];

  return (
    <Grid centered verticalAlign="middle">
      {columns}
    </Grid>
  )
}