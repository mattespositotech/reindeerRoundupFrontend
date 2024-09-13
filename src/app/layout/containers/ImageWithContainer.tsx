import { Grid, GridColumn, Image } from "semantic-ui-react";

interface ImageWithContainerProps {
  imgUrl: string;
  content: JSX.Element;
  reversed?: boolean;
  list?: boolean;
}

function textColumn(content: JSX.Element, list: boolean) {
  return (
    <GridColumn width={list ? 12 : 8} key='text'>
      {content}
    </GridColumn>
  )
}

function imageColumn(imgUrl: string, list: boolean) {
  return (
    <GridColumn width={list ? 4 : 8} key='image'>
      <Image src={imgUrl} />
    </GridColumn>
  )
}

export default function ImageWithContainer({ imgUrl, content, reversed, list = false }: ImageWithContainerProps) {
  const columns = reversed ? [textColumn(content, list), imageColumn(imgUrl, list)] : [imageColumn(imgUrl, list), textColumn(content, list)];

  return (
    <Grid centered verticalAlign="middle">
      {columns}
    </Grid>
  )
}